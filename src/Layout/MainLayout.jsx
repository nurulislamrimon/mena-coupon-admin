/* eslint-disable react/prop-types */

import "./MainLayout.css";
import { Layout } from "antd";
import { Outlet } from "react-router";
import MenuBar from "../Components/Nav/MenuBar/MenuBar";
import colors from "../Utils/colorVariables";

const { Content, Sider } = Layout;

const MainLayout = () => {
  return (
    <Layout
      style={{
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
      }}
    >
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        style={{ height: "100%", backgroundColor: colors.bgContainer }}
      >
        <MenuBar />
      </Sider>
      <Layout>
        <Content
          style={{
            margin: "24px 16px 0",
          }}
        >
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colors.bgContainer,
            }}
          >
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};
export default MainLayout;
