import React from 'react'
import { connect } from 'react-redux'
import { Layout, Menu, Icon } from 'antd'
const { Content } = Layout

import Sidebar from './sidebar/sidebar.jsx'
import Header from './header/header.jsx'

import { CHANGE_TOGGLE } from '../redux/createAction.js'

@connect(state => ({
    collapsed: state.collapsed,
}), dispatch => ({
    onToggle: () => {
        dispatch({
            type: CHANGE_TOGGLE
        })
    }
}))
class Home extends React.Component {
	constructor(props){
		super(props)
	}
    render() {
        return (
            <Layout className = 'layoutWrapper'>
                <Sidebar collapsed = {this.props.collapsed}/>
                <Layout>
                    <Header collapsed = {this.props.collapsed} toggle = {this.props.onToggle}/>
                    <Content className = 'layoutContent'>
                        {this.props.children}
                    </Content>
                </Layout>
            </Layout>
        )
    }
}

export default Home
