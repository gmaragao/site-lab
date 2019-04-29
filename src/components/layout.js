import React from "react"
import { Link } from "gatsby"
import { Layout, Menu, Breadcrumb } from "antd"
const { Header, Content, Footer } = Layout

const PageLayout = props => {
  return (
    <div>
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            style={{ lineHeight: "64px" }}
          >
            <Menu.Item>
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/team">Team</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/hall">Hall</Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: "0 50px", marginTop: 10 }}>
          <div style={{ background: "#fff", padding: 24, minHeight: 280 }}>
            {props.children}
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          <p>Handcrafted with &hearts; by Lab Ventures</p>
          <p>
            Reach us at:{" "}
            <a href="https://www.google.com.br/maps/place/Av.+Pl%C3%ADnio+Kroeff,+1715+-+Rubem+Berta,+Porto+Alegre+-+RS,+91150-170/@-29.9968535,-51.1156693,17z/data=!3m1!4b1!4m5!3m4!1s0x9519768b9a75caa7:0x63c95e432595a41a!8m2!3d-29.9968582!4d-51.1134753">
              Av. Plínio Kroeff, 1715.
            </a>{" "}
            Porto Alegre/RS - Brazil{" "}
          </p>
          <p>Into the lab, we think outside the box</p>
        </Footer>
      </Layout>
    </div>
  )
}

export default PageLayout
