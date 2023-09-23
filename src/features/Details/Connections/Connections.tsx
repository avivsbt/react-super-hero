import { Divider, Descriptions } from "antd";
import { ISuperHeroConnections } from "entities/SuperHero/model/type";
import React, { memo } from "react";

type Props = {
  data: ISuperHeroConnections;
}

const Connections: React.FC<Props> = ({ data }) => {
  return (
    <>
      <Divider orientation="left" plain>
        Connections
      </Divider>
      <Descriptions column={1}>

        <Descriptions.Item label="Relatives">
          {data.relatives}
        </Descriptions.Item>

        <Descriptions.Item label="Group affiliation">
          {data["group-affiliation"]}
        </Descriptions.Item>



      </Descriptions>
    </>
  );
};

export default memo(Connections);
