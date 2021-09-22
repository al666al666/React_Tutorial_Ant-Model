import React from 'react';
import { Layout } from 'antd';
import AppHeader from './components/common/header';
import AppFooter from './components/common/footer';
import AppHome from './views/homepage'; 
import 'antd/dist/antd.css';
import './App.css'; 


export default function App() {
    const { Header, Footer, Content } = Layout;
    return (
        <Layout className="mainLayout">
            <Header>
                <AppHeader />
            </Header>
            <Content>
                <AppHome />
            </Content>
            <Footer>
                <AppFooter />
            </Footer>
        </Layout>

    )
}