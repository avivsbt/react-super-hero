import React, { memo } from "react";
import cn from "classnames";
import styles from "./WrapperCardComparison.module.scss";
import { Col } from "antd";

type Props = {
  children: React.ReactNode
}

const WrapperCardComparison: React.FC<Props> = ({ children }) => {
  return (
    <Col className={cn(styles.card)} span={4}>
      {children}
    </Col>
  );
};

export default memo(WrapperCardComparison);
