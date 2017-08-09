import React from 'react'
import { connect } from 'react-redux'
import { Menu, Icon, Layout } from 'antd'
const { Sider } = Layout
const SubMenu = Menu.SubMenu
import {Link} from 'react-router'
import propTypes from 'prop-types'

import QueueAnim from 'rc-queue-anim'

@connect(state => ({
    sideMenu: state.sideMenu
}))
class Sidebar extends React.Component{
    constructor(props) {
        super(props);
    }
    state = {
        openKeys: []
    }
    onOpenChange = (openKeys) => {
        const latestOpenKey = openKeys.find(key => !(this.state.openKeys.indexOf(key) > -1));
        this.setState({ openKeys: latestOpenKey ? [latestOpenKey] : [] });
    }
    render(){
        return (
            <Sider
            trigger={null}
            collapsible
            collapsed={ this.props.collapsed }
            className = 'siderWrapper'
            >
                <div className="logo" />
                <QueueAnim
                component = {Menu}
                type='left'
                componentProps = {{theme:"dark", mode:"inline", defaultSelectedKeys:['0'], onOpenChange: this.onOpenChange, openKeys: this.state.openKeys }}>
                    {
                        this.props.sideMenu.map((val,index) => 
                            val.subMenu ? 
                            <SubMenu key = {index} 
                            title={
                                <span>
                                    <Icon type={val.type} />
                                    <span className = 'nav-text'>{val.text}</span>
                                </span>
                            }>
                                {
                                    val.subMenu.map((item, key) => 
                                        <Menu.Item key = {`${index}sub${key}`}>
                                            <Link to = {item.path}>
                                                <span className="nav-text">{item.text}</span>
                                            </Link>                    
                                        </Menu.Item>
                                    )
                                }
                            </SubMenu>
                            : 
                            <Menu.Item key = {index}>
                                <Link to = {val.path}>
                                    <Icon type={val.type} />
                                    <span className="nav-text">{val.text}</span>
                                </Link>                    
                            </Menu.Item>
                        )
                    }
                </QueueAnim>
            </Sider>
        )
    }
}
	

// Sidebar.propTypes = {
//     collapsed: propTypes.bool.isRequired
// }

export default Sidebar

