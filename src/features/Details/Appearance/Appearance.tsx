import { Divider, Descriptions } from "antd";
import { ISuperHeroAppearance } from "entities/SuperHero/model/type";
import React, { memo } from "react";

type Props = {
  data: ISuperHeroAppearance;
}

const Appearance: React.FC<Props> = ({ data }) => {
  return (
    <>
      <Divider orientation="left" plain>
        Appearance
      </Divider>
      <Descriptions>

        <Descriptions.Item label="Height">
          {data.height}
        </Descriptions.Item>

        <Descriptions.Item label="Weight">
          {data.weight}
        </Descriptions.Item>

        <Descriptions.Item label="Gender">
          {data.gender}
        </Descriptions.Item>

        <Descriptions.Item label="Eye color">
          {data["eye-color"]}
        </Descriptions.Item>

        <Descriptions.Item label="Hair color">
          {data["hair-color"]}
        </Descriptions.Item>

        <Descriptions.Item label="Race">
          {data.race}
        </Descriptions.Item>

      </Descriptions>
    </>
  );
};

export default memo(Appearance);
