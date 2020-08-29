import React from 'react';
import style from './PageLayout.module.scss';
import {Layout} from 'antd';


const {Header, Content} = Layout;

const PageLayout = ({children}) => {
    return (
        <Layout className={style['page-layout-wrapper']} style={{minHeight: '100vh'}}>
            <Header className="site-layout-background" style={{padding: 0}}>
                <h1>Contacts</h1>
            </Header>
            <Content style={{margin: '0 16px'}}>
                <div className="site-layout-background" style={{padding: 24, minHeight: 360}}>
                    {children}
                </div>
            </Content>
        </Layout>

    );
};

export default PageLayout;

