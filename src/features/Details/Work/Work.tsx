import { Divider, Descriptions } from "antd";
import { ISuperHeroWork } from "entities/SuperHero/model/type";
import React, { memo } from "react";

type Props = {
  data: ISuperHeroWork;
}

const Work: React.FC<Props> = ({ data }) => {
  return (
    <>
      <Divider orientation="left" plain>
        Work
      </Divider>
      
      <Descriptions column={1}>
        <Descriptions.Item label="Occupation">
          {data.occupation}
        </Descriptions.Item>

        <Descriptions.Item label="Base">
          {data.base}
        </Descriptions.Item>
      </Descriptions>
    </>
  );
};

export default memo(Work);
