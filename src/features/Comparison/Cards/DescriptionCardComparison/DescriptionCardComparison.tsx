import React, { memo } from "react";
import { ISuperHeroPowerStats } from "entities/SuperHero/model/type";
import { List, Typography } from "antd";
import cn from "classnames";
import styles from "./DescriptionCardComparison.module.scss";

type Props = {
  powerStats: ISuperHeroPowerStats
}

const DescriptionCardComparison: React.FC<Props> = ({ powerStats }) => {

  return (
    <div className={cn(styles.wrapper)}>
      <List className={cn(styles.list)} size="small">
        <List.Item>
          <Typography.Text>Combat: <b>{powerStats.combat}</b></Typography.Text>
        </List.Item>
        <List.Item>
          <Typography.Text>Durability: <b>{powerStats.durability}</b></Typography.Text>
        </List.Item>
        <List.Item>
          <Typography.Text>Intelligence: <b>{powerStats.intelligence}</b></Typography.Text>
        </List.Item>
        <List.Item>
          <Typography.Text>Power: <b>{powerStats.power}</b></Typography.Text>
        </List.Item>
        <List.Item>
          <Typography.Text>Speed: <b>{powerStats.speed}</b></Typography.Text>
        </List.Item>
        <List.Item>
          <Typography.Text>Strength: {powerStats.strength}</Typography.Text>
        </List.Item>
      </List>
    </div>

  );
};

export default memo(DescriptionCardComparison);
