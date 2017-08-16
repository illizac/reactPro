import React from 'react'
import { connect } from 'react-redux'
import { Row, Col, Tabs, Input, Button, Icon } from 'antd'
const TabPane = Tabs.TabPane
const Search = Input.Search
import { FETCH_USER_TABLE } from '../../redux/createAction'
import UserTable from '../Components/userTable.jsx'
import UserForm from './userForm.jsx'
import CompanyTree from '../Components/companyTree.jsx'



@connect(state => ({
	isFetching: state.isFetching,
	userdata: state.userdata
}), dispath => ({
	fetch(){
		dispath({
			type: FETCH_USER_TABLE
		})
	}
}))
class UserManage extends React.Component{
	constructor(props) {
		super(props);
	}

	test = (record, index) => console.log(record)

	componentWillMount() {
		this.props.fetch()
	}

	state = {
		columns: [{
		  	title: '归属公司',
		  	dataIndex: 'company',
		  	key: 'company',
		}, {
		  	title: '归属部门',
		  	dataIndex: 'department',
		  	key: 'department',
		}, {
		  	title: '登录名',
		  	dataIndex: 'userName',
		  	key: 'userName',
		}, {
		  	title: '姓名',
		  	dataIndex: 'name',
		  	key: 'name',
		}, {
		  	title: '电话',
		  	dataIndex: 'tel',
		  	key: 'tel',
		}, {
		  	title: '手机',
		  	dataIndex: 'phone',
		  	key: 'phone',
		}, {
		  	title: '邀请码',
		  	dataIndex: 'code',
		  	key: 'code',
		}, {
		    title: '操作',
		    dataIndex: 'operate',
		    key: 'operate',
		    render: (text, record, index) => 
		        (<span>
		            <Button className = 'colBtn' onClick = {_ => this.test(record, index)}>修改</Button>
		            <Button type="danger" className = 'colBtn' onClick = {_ => this.test(record, index)}>删除</Button>
		        </span>)
		}]
	}

	render(){
		return (
			<Row>
				<Col span = {3} className = 'treeCol'>
					<CompanyTree></CompanyTree>
				</Col>
	      		<Col span = {21}>
	      			<Tabs defaultActiveKey="1">
					    <TabPane tab="用户列表" key="1">
					    	<Row>
					    		<Col className = 'contentCol' span={24}>
									<Input
									className = 'selectInput'
									placeholder="归属区域"
									disabled = {true}
									style={{ width: 200 }}
									addonAfter={<Icon type="plus" />}/>
									<Input
									className = 'selectInput'
									placeholder="归属机构"
									disabled = {true}
									style={{ width: 200 }}
									addonAfter={<Icon type="plus" />}/>
									<Search
									className = 'searchInput'
									placeholder="登录名"
									style={{ width: 200 }}/>
									<Search
									className = 'searchInput'
									placeholder="姓名"
									style={{ width: 200 }}/>
									<Button type="primary" className = 'colBtn' icon = 'search'>查询</Button>
						    	</Col>
					    	</Row>

					    	<UserTable data = { this.props.userdata } isFetching = { this.props.isFetching } columns = { this.state.columns }></UserTable>

					    	<Row>
					    		<Col className = 'contentCol' span={24}>
									<Button type="primary" className = 'colBtn' icon = 'cloud-upload'>导入</Button>
									<Button type="primary" className = 'colBtn' icon = 'cloud-download'>导出</Button>
						    	</Col>
					    	</Row>
					    </TabPane>
					    <TabPane tab="用户添加" key="2">
					    	<UserForm></UserForm>
					    </TabPane>
				  	</Tabs>
	      		</Col>
	      	</Row>
		)
	}
} 
      	
export default UserManage