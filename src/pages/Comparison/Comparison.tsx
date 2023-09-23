import React, { memo } from "react";
import cn from "classnames";
import styles from "./Comparison.module.scss";
import CardsComparison from "features/Comparison/Cards/CardsComparison";

const Comparison: React.FC = () => {
  return (
    <section className={cn(styles.wrapper)}>
      <CardsComparison />
    </section>
  );
};

export default memo(Comparison);
