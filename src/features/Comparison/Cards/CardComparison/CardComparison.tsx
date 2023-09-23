import { Card, Image } from "antd";
import React, { memo, useCallback } from "react";
import cn from "classnames";
import styles from "./CardComparison.module.scss";
import Meta from "antd/es/card/Meta";
import { DeleteOutlined, LinkOutlined } from "@ant-design/icons";
import { ISuperHero } from "entities/SuperHero/model/type";
import { useAppDispatch } from "shared/hooks/useStoreHooks";
import { superHeroRemove } from "entities/SuperHero/model/superHeroSlice";
import { Link } from "react-router-dom";
import DescriptionCardComparison from "../DescriptionCardComparison/DescriptionCardComparison";
import SearchComparison from "features/Comparison/Search/SearchComparison";
import WrapperCardComparison from "../WrapperCardComparison";

type Props = {
  hero: ISuperHero
}

const CardComparison: React.FC<Props> = ({ hero }) => {

  const dispatch = useAppDispatch();

  /* Delete super hero */
  const onDelete = useCallback(() => {
    dispatch(superHeroRemove(hero.id))
  }, [dispatch, hero.id]);

  return (
    <WrapperCardComparison>
      <SearchComparison value={hero.name} id={hero.id} />
      <Card
        cover={
          <div className={cn(styles["cover-img"])}>
            <Image className={cn(styles.img)} preview={false} alt={hero.name} src={hero.image.url} />
          </div>
        }
        actions={[
          <DeleteOutlined key="delete" onClick={onDelete} />,
          <Link to={`details/${hero.id}`}><LinkOutlined key="link" /></Link>
        ]}
      >
        <Meta
          title={hero.name}
          description={<DescriptionCardComparison powerStats={hero.powerstats} />}
        />
      </Card>
    </WrapperCardComparison>
  );
};

export default memo(CardComparison);
