import React from 'react'
import { Layout, Menu, Icon } from 'antd'
const { Content } = Layout

import Sidebar from './sidebar/sidebar.jsx'
import Header from './header/header.jsx'

class Home extends React.Component {
	constructor(props){
		super(props)
	}
    render() {
        return (
            <Layout className = 'layoutWrapper'>
                <Sidebar collapsed = {this.props.collapsed} menu = {this.props.sideMenu}/>
                <Layout>
                    <Header collapsed = {this.props.collapsed} toggle = {this.props.onToggle}/>
                    <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
                        {this.props.children}
                    </Content>
                </Layout>
            </Layout>
        )
    }
}
export default Home
