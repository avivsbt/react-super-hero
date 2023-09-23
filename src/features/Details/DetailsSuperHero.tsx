import { Card, Col, Image, Row, Typography } from "antd";
import { getSuperHeroEntitiesSelector } from "entities/SuperHero/model/superHeroSelector";
import { ISuperHero } from "entities/SuperHero/model/type";
import React, { memo, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppSelector } from "shared/hooks/useStoreHooks";
import cn from "classnames";
import styles from "./DetailsSuperHero.module.scss";
import { LeftCircleOutlined } from "@ant-design/icons";
import Biography from "./Biography";
import Appearance from "./Appearance";
import Powerstats from "./Powerstats";
import Work from "./Work";
import Connections from "./Connections";

const DetailsSuperHero: React.FC = () => {

  const { id } = useParams();
  const navigate = useNavigate();
  const heros = useAppSelector(getSuperHeroEntitiesSelector);

  const [hero, setHero] = useState<ISuperHero>();

  useEffect(() => {
    if (!heros[id as string]) navigate("/");
    setHero(heros[id as string])
  }, [heros, id, navigate]);

  return (
    hero ?
      <Card
        className={cn(styles.wrapper)}
        title={
          <Typography.Title className={cn(styles.title)}>
            <span
              className={cn(styles.back)}
              onClick={() => navigate("/")}
            >
              <LeftCircleOutlined />
            </span>
            {hero?.name}
          </Typography.Title>
        }
        bordered={false}
      >
        <Row className={cn(styles.cover)} wrap={false} >

          <Col flex={"200px"} className={cn(styles.avatar)} >
            <Image preview={false} src={hero.image.url} />
          </Col>

          <Col flex="auto">
            <Appearance data={hero.appearance} />

            <Powerstats data={hero.powerstats} />

            <Biography data={hero.biography} />

            <Work data={hero.work} />

            <Connections data={hero.connections} />
          </Col>

        </Row>
      </Card>
      : null
  );
};

export default memo(DetailsSuperHero);
