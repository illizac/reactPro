import React from 'react'
import { connect } from 'react-redux'
import { Row, Col, Tabs, Button } from 'antd'
const TabPane = Tabs.TabPane
import UserTable from '../Components/userTable.jsx'
import CompanyTree from '../Components/companyTree.jsx'
import OrganizationForm from './organizationForm.jsx'
import { FETCH_CHARACTER_TABLE } from '../../redux/createAction'

@connect(state => ({
	isFetching: state.isFetching,
	characterdata: state.characterdata
}), dispath => ({
	fetch(){
		dispath({
			type: FETCH_CHARACTER_TABLE
		})
	}
}))
class CharacterManage extends React.Component{
	constructor(props) {
		super(props)
	}
	componentWillMount() {
		console.log(location.hash.substring(2, location.hash.length))
		this.props.fetch()
	}
	state = {
		columns: [{
		  	title: '机构名称',
		  	dataIndex: 'name',
		  	key: 'name',
		}, {
		  	title: '归属区域',
		  	dataIndex: 'area',
		  	key: 'area',
		}, {
		  	title: '机构编码',
		  	dataIndex: 'code',
		  	key: 'code',
		}, {
		  	title: '机构类型',
		  	dataIndex: 'type',
		  	key: 'type',
		}, {
		  	title: '备注',
		  	dataIndex: 'remark',
		  	key: 'remark',
		}, {
		    title: '操作',
		    dataIndex: 'operate',
		    key: 'operate',
		    render: (text, record, index) => 
		        (<span>
		            <Button className = 'colBtn'>修改</Button>
		            <Button type="danger" className = 'colBtn'>删除</Button>
		            <Button className = 'colBtn'>添加以下机构</Button>
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
					    <TabPane tab="机构列表" key="1">
					    	<UserTable data = { this.props.characterdata } isFetching = { this.props.isFetching } columns = { this.state.columns }></UserTable>
					    </TabPane>
					    <TabPane tab="机构添加" key="2">
					    	<OrganizationForm></OrganizationForm>
					    </TabPane>
				  	</Tabs>
	      		</Col>
	      	</Row>
		)
	}
}

export default CharacterManage