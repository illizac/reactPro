import React from 'react'
import { connect } from 'react-redux'
import { Row, Col, Tabs, Button } from 'antd'
const TabPane = Tabs.TabPane
import UserTable from '../Components/userTable.jsx'
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
		super(props);
	}
	componentWillMount() {
		console.log(location.hash.substring(2, location.hash.length))
		this.props.fetch()
	}
	state = {
		columns: [{
		  	title: '角色名称',
		  	dataIndex: 'character',
		  	key: 'character',
		}, {
		  	title: '英文名称',
		  	dataIndex: 'enName',
		  	key: 'enName',
		}, {
		  	title: '归属区域',
		  	dataIndex: 'area',
		  	key: 'area',
		}, {
		  	title: '数据范围',
		  	dataIndex: 'scope',
		  	key: 'scope',
		}, {
		    title: '操作',
		    dataIndex: 'operate',
		    key: 'operate',
		    render: (text, record, index) => 
		        (<span>
		            <Button className = 'colBtn'>分配</Button>
		            <Button className = 'colBtn'>修改</Button>
		            <Button type="danger" className = 'colBtn'>删除</Button>
		        </span>)
		}]
	}
	render(){
		return (
			<Row>
	      		<Col>
	      			<Tabs defaultActiveKey="1">
					    <TabPane tab="角色列表" key="1">
					    	<UserTable data = { this.props.characterdata } isFetching = { this.props.isFetching } columns = { this.state.columns }></UserTable>
					    </TabPane>
					    <TabPane tab="角色添加" key="2">

					    </TabPane>
				  	</Tabs>
	      		</Col>
	      	</Row>
		)
	}
}

export default CharacterManage