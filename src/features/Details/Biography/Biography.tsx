import { Divider, Descriptions } from "antd";
import { ISuperHeroBiography } from "entities/SuperHero/model/type";
import React, { memo } from "react";

type Props = {
  data: ISuperHeroBiography;
}

const Biography: React.FC<Props> = ({ data }) => {
  return (
    <>
      <Divider orientation="left" plain>
        Biography
      </Divider>

      <Descriptions column={1}>
        <Descriptions.Item label="Publisher">
          {data.publisher}
        </Descriptions.Item>

        <Descriptions.Item label="Aliases">
          {data.aliases}
        </Descriptions.Item>

        <Descriptions.Item label="Alignment">
          {data.alignment}
        </Descriptions.Item>

        <Descriptions.Item label="Alter egos">
          {data["alter-egos"]}
        </Descriptions.Item>

        <Descriptions.Item label="first Appearance">
          {data["first-appearance"]}
        </Descriptions.Item>
      </Descriptions>
    </>
  );
};

export default memo(Biography);
