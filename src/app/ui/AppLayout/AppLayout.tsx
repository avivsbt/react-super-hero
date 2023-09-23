import cn from "classnames";
import React, { memo } from "react";
import { Outlet } from "react-router-dom";
import { Layout, theme, ConfigProvider, Typography } from "antd";
import styles from "./AppLayout.module.scss";
import { Footer } from "antd/es/layout/layout";

const { Header, Content } = Layout;
const { darkAlgorithm } = theme;


const AppLayout: React.FC = () => {
  return (
    <ConfigProvider
      theme={{
        algorithm: darkAlgorithm,
      }}>
      <Layout className={cn(styles.wrapper)}>
        <Header className={cn(styles.header)}>
          <Typography.Title level={1}>Super Hero</Typography.Title>
        </Header>
        <Content className={cn(styles.content)}>
          <Outlet />
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Octup ©2023 Created by Aviv Mizrahi
        </Footer>
      </Layout>
    </ConfigProvider>
  );
};

export default memo(AppLayout);
