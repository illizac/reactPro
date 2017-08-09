import React from 'react'
import { Table, Button } from 'antd'
const { Column } = Table

const columns = [{
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
}]

const UserTable = ({ userdata, test, isFetching }) => (
	<Table dataSource={userdata.map((val, index) => Object.assign({}, val, {key: index}))} bordered loading = { isFetching }>
		{columns.map(val => (
			<Column 
			title={val.title}
		    dataIndex={val.dataIndex}
		    key={val.key}></Column>
		))}
		<Column title='操作' dataIndex='operate' key='operate'
		render = {(text, record, index) => 
  			(<span>
  				<Button className = 'colBtn' onClick = {_ => test(record, index)}>修改</Button>
  				<Button type="danger" className = 'colBtn' onClick = {_ => test(record, index)}>删除</Button>
  			</span>)}></Column>
	</Table>
)

export default UserTable