import React, { memo } from "react";
import cn from "classnames";
import styles from "./Details.module.scss";
import DetailsSuperHero from "features/Details/DetailsSuperHero";

const Details: React.FC = () => {
  return (
    <section className={cn(styles.wrapper)}>
      <DetailsSuperHero />
    </section>
  );
};

export default memo(Details);
