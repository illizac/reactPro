import React from 'react'
import { Layout, Icon, Menu } from 'antd'
const { Header } = Layout
const SubMenu = Menu.SubMenu
const MenuItemGroup = Menu.ItemGroup

class HeaderCol extends React.Component{
	constructor(props){
		super(props)
	}
	render(){
		return (
			<Header style={{ background: '#fff', padding: 0 }}>
		        <Icon
		        className="trigger"
		        type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
		        onClick={() => this.props.toggle()}
		        />
		        <Menu mode = {'horizontal'} className = 'headerMenu'>
		        	<SubMenu title={<img className = 'avator' src = {'http://img2.woyaogexing.com/2017/06/07/c20e0818c599eea8!400x400_big.jpg'}/>}>
		        		<MenuItemGroup title = '设置中心'>
		        			<Menu.Item key = 'setting01'>设置</Menu.Item>
		        			<Menu.Item key = 'setting02'>退出登录</Menu.Item>
		        		</MenuItemGroup>
		        	</SubMenu>
		        </Menu>
		    </Header>
		)
	}
} 
	

export default HeaderCol