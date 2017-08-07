import React from 'react'
import { connect } from 'react-redux'
import { Layout, Menu, Icon } from 'antd'
const { Content } = Layout

import Sidebar from './sidebar/sidebar.jsx'
import Header from './header/header.jsx'

import { toggle, testFetch } from '../redux/createAction.js'

@connect(state => ({
    collapsed: state.collapsed,
    sideMenu: state.sideMenu
}), dispatch => ({
    onToggle: () => {
        dispatch(toggle())
        dispatch({
            type: 'INCREMENT_ASYNC'
        })
    }
    // testFetch: () => {
    //  dispatch(testFetch())
    // }
}))
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
