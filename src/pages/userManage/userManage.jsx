import React from 'react'
import { connect } from 'react-redux'
import { Row, Col, Tabs, Input, Button, Icon } from 'antd'
const TabPane = Tabs.TabPane
const Search = Input.Search
import { testFetch } from '../../redux/createAction'
import UserTable from '../Components/userTable.jsx'

@connect(state => ({
	isFetching: state.isFetching,
	userdata: state.userdata
}), dispath => ({
	fetch(){
		dispath(testFetch())
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

	render(){
		return (
			<div>
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

				    	<UserTable userdata = { this.props.userdata } test = { this.test } isFetching = { this.props.isFetching }></UserTable>

				    	<Row>
				    		<Col className = 'contentCol' span={24}>
								<Button type="primary" className = 'colBtn' icon = 'cloud-upload'>导入</Button>
								<Button type="primary" className = 'colBtn' icon = 'cloud-download'>导出</Button>
					    	</Col>
				    	</Row>
				    </TabPane>
				    <TabPane tab="用户添加" key="2">

				    </TabPane>
			  	</Tabs>
	      	</div>
		)
	}
} 
      	
export default UserManage