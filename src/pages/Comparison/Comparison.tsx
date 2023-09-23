import React, { memo } from "react";
import cn from "classnames";
import styles from "./Comparison.module.scss";
import CardsComparison from "features/Comparison/Cards/CardsComparison";
import { Typography } from "antd";

const Comparison: React.FC = () => {
  return (
    <section className={cn(styles.wrapper)}>
      <Typography.Title className={cn(styles.title)}>Comparing the abilities of your SuperHero</Typography.Title>
      <CardsComparison />
    </section>
  );
};

export default memo(Comparison);
