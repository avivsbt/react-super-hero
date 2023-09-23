import React, { memo } from "react";
import cn from "classnames";
import styles from "./AdditionalCardComparison.module.scss";
import { PlusCircleOutlined } from "@ant-design/icons";
import SearchComparison from "features/Comparison/Search/SearchComparison";
import WrapperCardComparison from "../WrapperCardComparison";

const AdditionalCardComparison: React.FC = () => {
  return (
    <WrapperCardComparison>
      <SearchComparison />
      <div className={cn(styles.inner)}>
        <PlusCircleOutlined />
      </div>
    </WrapperCardComparison>
  );
};

export default memo(AdditionalCardComparison);
