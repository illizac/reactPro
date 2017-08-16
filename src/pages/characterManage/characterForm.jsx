import React from 'react'
import { connect } from 'react-redux'
import { Row, Col, Form, Button, Input, Icon, Select } from 'antd'
import SelectRen from '../Components/select.jsx'
const FormItem = Form.Item
const Option = Select.Option
const { TextArea } = Input

@connect(state => ({}), dispath => ({}))
class CharacterForm extends React.Component{
	constructor(props) {
		super(props)
	}
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
				label = '角色名称'
				required
				labelCol = {{span:4}}
				wrapperCol = {{span:8}}>
					<Input
					style={{ width: 200 }}/>
				</FormItem>
				<FormItem
				label = '英文名称'
				required
				labelCol = {{span:4}}
				wrapperCol = {{span:8}}>
					<Input
					style={{ width: 200 }}/>
				</FormItem>
				<FormItem
				label = '角色类型'
				labelCol = {{span:4}}
				wrapperCol = {{span:8}}>
					<SelectRen list = {['管理角色', '普通角色']} defaultKey = '任务分配'></SelectRen>
				</FormItem>
				<FormItem
				label = '是否系统数据'
				labelCol = {{span:4}}
				wrapperCol = {{span:8}}>
					<SelectRen list = {['是', '否']}></SelectRen>
				</FormItem>
				<FormItem
				label = '是否可用'
				labelCol = {{span:4}}
				wrapperCol = {{span:8}}>
					<SelectRen list = {['是', '否']}></SelectRen>
				</FormItem>
				<FormItem
				label = '数据范围'
				labelCol = {{span:4}}
				wrapperCol = {{span:8}}>
					<SelectRen list = {['所有数据', '所在公司及以下数据', '所在公司数据', '所在部门及以下数据', '所在部门数据', '仅本人数据', '按明细设置']} width = {200}></SelectRen>
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

export default CharacterForm