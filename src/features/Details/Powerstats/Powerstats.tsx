import { Divider, Descriptions } from "antd";
import { ISuperHeroPowerStats } from "entities/SuperHero/model/type";
import React, { memo } from "react";

type Props = {
  data: ISuperHeroPowerStats;
}

const Powerstats: React.FC<Props> = ({ data }) => {
  return (
    <>
      <Divider orientation="left" plain>
        Power stats
      </Divider>
      <Descriptions>
        <Descriptions.Item label="Combat">
          {data.combat}
        </Descriptions.Item>

        <Descriptions.Item label="Durability">
          {data.durability}
        </Descriptions.Item>

        <Descriptions.Item label="Intelligence">
          {data.intelligence}
        </Descriptions.Item>

        <Descriptions.Item label="Power">
          {data.power}
        </Descriptions.Item>

        <Descriptions.Item label="Speed">
          {data.speed}
        </Descriptions.Item>

        <Descriptions.Item label="Strength">
          {data.strength}
        </Descriptions.Item>
      </Descriptions>
    </>
  );
};

export default memo(Powerstats);
