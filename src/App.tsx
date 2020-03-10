import React, { Component } from 'react';
import Layout from 'antd/es/layout';
import Menu from 'antd/es/menu';

import './App.css';
import TrackTable from './TrackTable';

const { Header, Content, Footer } = Layout;

class App extends Component {
  render() {
    return (
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['1']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1">Overview</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '50px 50px' }}>
          <div className="site-layout-content">
            <TrackTable />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Trackify ©{new Date().getFullYear()} Created by{' '}
          <a
            href="https://github.com/DonkeyKongJr"
            target="_blank"
            rel="noopener noreferrer"
          >
            DonkeyKongJr
          </a>
        </Footer>
      </Layout>
    );
  }
}
export default App;
