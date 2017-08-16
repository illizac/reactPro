import React from 'react'
import { connect } from 'react-redux'
import { Form, Input, Icon, Select, Radio, Row, Col, Button } from 'antd'
import SelectRen from '../Components/select.jsx'
const FormItem = Form.Item
const Option = Select.Option
const RadioGroup = Radio.Group
const { TextArea } = Input

class UserForm extends React.Component{
	constructor(props) {
		super(props);
	}
	state = {value: 1}
	radioChange = e => this.setState({
		value: e.target.value
	})

	render(){
		return (
			<Form>
				<FormItem
				label = '归属区域'
				required
				labelCol = {{span:4}}
				wrapperCol = {{span:8}}>
					<Input
					placeholder="归属区域"
					disabled = {true}
					style={{ width: 200 }}
					addonAfter={<Icon type="plus" />}/>
				</FormItem>
				<FormItem
				label = '归属机构'
				labelCol = {{span:4}}
				wrapperCol = {{span:8}}>
					<Input
					placeholder="归属机构"
					disabled = {true}
					style={{ width: 200 }}
					addonAfter={<Icon type="plus" />}/>
				</FormItem>
				<FormItem
				label = '工号'
				labelCol = {{span:4}}
				wrapperCol = {{span:8}}>
					<Input style={{ width: 200 }}/>
				</FormItem>
				<FormItem
				label = '姓名'
				labelCol = {{span:4}}
				wrapperCol = {{span:8}}>
					<Input style={{ width: 200 }}/>
				</FormItem>
				<FormItem
				label = '登录名'
				labelCol = {{span:4}}
				wrapperCol = {{span:8}}>
					<Input style={{ width: 200 }}/>
				</FormItem>
				<FormItem
				label = '密码'
				labelCol = {{span:4}}
				wrapperCol = {{span:8}}>
					<Input style={{ width: 200 }}/>
				</FormItem>
				<FormItem
				label = '确认密码'
				labelCol = {{span:4}}
				wrapperCol = {{span:8}}>
					<Input style={{ width: 200 }}/>
				</FormItem>
				<FormItem
				label = '邮箱'
				labelCol = {{span:4}}
				wrapperCol = {{span:8}}>
					<Input style={{ width: 200 }}/>
				</FormItem>
				<FormItem
				label = '电话'
				labelCol = {{span:4}}
				wrapperCol = {{span:8}}>
					<Input style={{ width: 200 }}/>
				</FormItem>
				<FormItem
				label = '手机'
				labelCol = {{span:4}}
				wrapperCol = {{span:8}}>
					<Input style={{ width: 200 }}/>
				</FormItem>
				<FormItem
				label = '是否允许登录'
				labelCol = {{span:4}}
				wrapperCol = {{span:8}}>
					<SelectRen list = {['是', '否']}></SelectRen>
				</FormItem>
				<FormItem
				label = '用户类型'
				labelCol = {{span:4}}
				wrapperCol = {{span:8}}>
					<SelectRen list = {['系统管理', '部门管理', '普通用户']} defaultKey = '请选择' width = {200}></SelectRen>
				</FormItem>
				<FormItem
				label = '用户角色'
				labelCol = {{span:4}}
				wrapperCol = {{span:8}}>
					<RadioGroup onChange = {this.radioChange} value={this.state.value}>
				        <Radio value={1}>区域管理员</Radio>
				        <Radio value={2}>普通用户</Radio>
				        <Radio value={3}>机构管理员</Radio>
				        <Radio value={4}>系统管理员</Radio>
			      	</RadioGroup>
				</FormItem>
				<FormItem
				label = '备注'
				labelCol = {{span:4}}
				wrapperCol = {{span:6}}>
					<TextArea rows={4}/>
				</FormItem>
				<FormItem
				label = ' '
				labelCol = {{span:4}}
				wrapperCol = {{span:8}}>
					<Row>
						<Col>
							<Button type="primary" className = 'colBtn'>保存</Button>
							<Button className = 'colBtn'>取消</Button>
						</Col>
					</Row>
				</FormItem>
			</Form>
		)
	}
}

export default UserForm