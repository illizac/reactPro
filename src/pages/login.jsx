import React from 'react'
import { DatePicker } from 'antd'
import { Row, Col, Menu, Icon, Form, Input, Button, Checkbox } from 'antd'
import { hashHistory } from 'react-router'
const FormItem = Form.Item

class Login extends React.Component{
    constructor(props){
    	super(props)	 
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                hashHistory.push('/')
            }
        });
    }

    testfetch(e){
        e.preventDefault();
    }

    render() {
        const { getFieldDecorator } = this.props.form
        return (
            <Row className = 'loginwrapper'>
                <Col className = 'loginForm'>
                    <div className = 'loginTitle'>密码登录</div>
                    <Form onSubmit={this.handleSubmit.bind(this)} className="login-form">
                        <FormItem>
                            {getFieldDecorator('userName', {
                                rules: [{ required: true, message: 'Please input your username!' }],
                            })(
                                <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="请输入用户名" />
                            )}
                        </FormItem>
                        <FormItem className = 'formPass'>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: 'Please input your Password!' }],
                            })(
                                <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="请输入密码" />
                            )}
                        </FormItem>
                        <FormItem className = 'regis'>
                            <a className="login-form-forgot" href="" onClick = {this.testfetch.bind(this)}>忘记密码</a>
                            <a className="login-form-register" href="">现在注册</a>
                        </FormItem>
                        <FormItem>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                登录
                            </Button>
                        </FormItem>
                    </Form>
                </Col>
            </Row>
        )
    }

}
const WrappedNormalLoginForm = Form.create()(Login);

export default WrappedNormalLoginForm

