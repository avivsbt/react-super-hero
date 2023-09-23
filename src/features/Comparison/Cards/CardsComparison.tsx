import { Row } from "antd";
import React, { memo } from "react";
import cn from "classnames";
import styles from "./CardsComparison.module.scss";
import { useAppSelector } from "shared/hooks/useStoreHooks";
import { getSuperHeroSelector } from "entities/SuperHero/model/superHeroSelector";
import CardComparison from "./CardComparison/CardComparison";
import AdditionalCardComparison from "./AdditionalCardComparison/AdditionalCardComparison";

const CardsComparison: React.FC = () => {

  const superHeros = useAppSelector(getSuperHeroSelector);

  return (
    <Row className={cn(styles.cards)} gutter={16}>
      {superHeros.map(hero => <CardComparison hero={hero} key={hero.id} />)}
      {superHeros.length < 6 && <AdditionalCardComparison />}
    </Row>
  );
};

export default memo(CardsComparison);
