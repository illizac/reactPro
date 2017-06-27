import React from 'react'
import { Menu, Icon, Layout } from 'antd'
const { Sider } = Layout
import {Link} from 'react-router'
import propTypes from 'prop-types'

import QueueAnim from 'rc-queue-anim'

const Sidebar = props => 
	<Sider
    trigger={null}
    collapsible
    collapsed={ props.collapsed }
    >
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['0']}>
            {
                props.menu.map((val,index) => 
                    <Menu.Item key = {index}>
                        <Link to = {val.path}>
                            <Icon type={val.type} />
                            <span className="nav-text">{val.text}</span>
                        </Link>                    
                    </Menu.Item>
                )
            }
        </Menu>
    </Sider>

Sidebar.propTypes = {
    collapsed: propTypes.bool.isRequired
}

export default Sidebar

