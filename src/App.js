import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import React, { useState } from "react";
import OSMMap from "./components/OSMMap";
import FormInput from "./components/FormInput";
import RegionInfo from "./components/RegionInfo";
import { Provider } from "react-redux";
import store from "./reducers";
import { MapContainer } from "react-leaflet";
import Avatar from "antd/lib/avatar/avatar";

const { Header, Sider, Content, Footer } = Layout;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => setCollapsed(!collapsed);

  return (
    <Provider store={store}>
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              Nav 1
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              Nav 2
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              Nav 3
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ padding: 0, maxHeight: "10vh" }}>
            {React.createElement(
              collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                onClick: toggle,
                style: {
                  color: "white",
                  fontSize: "1.8em",
                  paddingLeft: "14px",
                },
              }
            )}
            <Menu theme="dark" mode="horizontal" style={{ float: "right" }}>
              <Menu.Item key="1">Login</Menu.Item>
              <Menu.Item key="3">
                <Avatar size="small" icon={<UserOutlined />} /> Guest
              </Menu.Item>
            </Menu>
          </Header>
          <Content
            style={{
              minHeight: "90vh",
            }}
          >
            <MapContainer center={[0, 0]} zoom={5} style={{ height: "90vh" }}>
              <OSMMap />
            </MapContainer>
            <FormInput />
            <RegionInfo />
          </Content>
          <Footer style={{ textAlign: "center" }}>MAP UP</Footer>
        </Layout>
      </Layout>
    </Provider>
  );
};

export default App;
