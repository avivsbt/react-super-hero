import React, { memo, useCallback, useMemo, useState } from "react";
import { AutoComplete, Input, Typography } from "antd";
import cn from "classnames";
import styles from "./SearchComparison.module.scss";
import { AxiosError } from "axios";
import superHeroApi from "entities/SuperHero/api/superHeroApi";
import { debounce } from 'lodash';
import { removeDuplicates } from "shared/lib/util";
import { ISuperHero } from "entities/SuperHero/model/type";
import { useAppDispatch, useAppSelector } from "shared/hooks/useStoreHooks";
import { superHeroUpdated, superHerodAdded } from "entities/SuperHero/model/superHeroSlice";
import { getSuperHeroEntitiesSelector } from "entities/SuperHero/model/superHeroSelector";

type Props = {
  value?: string;
  id?: string | null;
}

const SearchComparison: React.FC<Props> = ({ value = "", id = null }) => {

  const [result, setResult] = useState<ISuperHero[] | null>(null);
  const [input, setInput] = useState<string>(value);
  const [loading, setLoading] = useState<boolean>(false);

  const heros = useAppSelector(getSuperHeroEntitiesSelector);

  const dispatch = useAppDispatch();

  const options = useMemo(() => result?.map(hero => {
    return { value: hero.name, disabled: !!heros[hero.id as string] }
  }
  ), [heros, result]);

  /* Reset search */
  const onResetSearch = useCallback(() => {
    setInput("");
    setResult(null);
  }, []);

  /* Define a debounced version of onSearch */
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedOnSearch = useCallback(
    debounce(async (name: string) => {
      try {
        const { data } = await superHeroApi.getSuperHero({ name });
        if (!data.results) {
          setResult([]);
          setLoading(false);
          return;
        }
        const list = removeDuplicates(data.results, "name");
        setResult(list);
      } catch (err) {
        const error = err as AxiosError;
        console.error(error.response?.data);
      }
      setLoading(false);
    }, 300), []);

  /* Search super hero */
  const onSearch = useCallback(async (name: string) => {
    setInput(name);
    setResult(null);
    if(name.length > 1) {
      setLoading(true);
      debouncedOnSearch(name);
    }
  }, [debouncedOnSearch]);

  /* Select super hero */
  const onSelect = useCallback((option: string) => {
    const selected = result?.find(hero => hero.name === option);
    if (!selected) return;
    id ? dispatch(superHeroUpdated({ id, changes: selected })) : dispatch(superHerodAdded({ ...selected, updatedAt: + new Date() }));
    onResetSearch();
  }, [dispatch, result, id, onResetSearch]);

  return (
    <>
      <AutoComplete
        popupClassName="certain-category-search-dropdown"
        popupMatchSelectWidth={true}
        options={options}
        notFoundContent={!!result && <Typography.Text className={cn(styles["no-data"])}>No results found.</Typography.Text>}
        className={cn(styles.wrapper)}
        onSelect={onSelect}
        value={input}
      >
        <Input.Search
          onChange={(event) => onSearch(event.currentTarget.value)}
          size="middle"
          placeholder="COMPARE WITH"
          loading={loading}
        />
      </AutoComplete>
    </>
  );
};

export default memo(SearchComparison);

