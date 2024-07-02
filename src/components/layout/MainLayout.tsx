import { Layout, Menu, MenuProps } from "antd";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { createElement } from "react";
import { Outlet } from "react-router-dom";

const { Content, Footer, Header, Sider } = Layout;

const items: MenuProps["items"] = [
  {
    key: "1",
    label: "Dashboard",
  },
  {
    key: "2",
    label: "Profile",
  },
  {
    key: "3",
    label: "User Management",
    children: [
      {
        key: "3.1",
        label: "Create user",
      },
      {
        key: "3.2",
        label: "Delete user",
      },
    ],
  },
];

function MainLayout() {
  return (
    <Layout style={{ height: "100vh" }}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          // console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          // console.log(collapsed, type);
        }}
      >
        <div style={{color: 'white', fontWeight: 'bold', height: '4rem', fontSize: "1rem", display: "flex", justifyContent: "center", alignItems: "center" }} >
            <h2>U Management</h2>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={items}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0 }} />
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            {/* Place Main Content Here */}
            <Outlet/>   
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          University Management ©{new Date().getFullYear()} Created by Saifur
        </Footer>
      </Layout>
    </Layout>
  );
}

export default MainLayout;
