import React,{Component} from 'react'
import {
  Form, Icon, Input, Button,message
} from 'antd';
const Item = Form.Item
class Froms extends Component{
  fields=(rule, value, callback)=>{
       if(!value){
         callback('请输入密码')
       }else if(value.length>7){
           callback('密码必须小于七位')
       }else if(!(/^[A-Za-z0-9_]+$/.test(value))){
         callback('密码输入格式不正确')
       }else{
         callback()
       }

  }
  handleSubmit =(e)=>{
    const {validateFields,resetFields} = this.props.form;
       e.preventDefault()
    validateFields((err,value)=>{
         if(!err){
           console.log('效验通过');-
         }else{
           resetFields(['password'])
           const errors = Object.values(err).reduce((pre,cur)=>pre+cur.errors[0].message+'','')
           message.error(errors)
         }
    })
  }
        render(){
          const {getFieldDecorator,validateFields} = this.props.form;
        return(
          <Form  className='login-form-container' onSubmit={this.handleSubmit}>
            <Item>
              {getFieldDecorator('username',{ rules: [{ required: true, message: 'Please input your username!' },{ max: 7, message: '用户名必须小于七位' },{ min: 2, message: '用户名必须大于两位' }],})(<Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />)}
            </Item>
            <Item>
              {getFieldDecorator('password',{ rules: [{validator:this.fields}]})(<Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="password" />)}
            </Item>
            <Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
            </Button>
            </Item>
          </Form>
        )}
}
const WrappedLoginForm = Form.create()(Froms);
export default WrappedLoginForm