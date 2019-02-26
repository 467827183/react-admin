import React,{Component} from 'react'
import {
  Form, Icon, Input, Button, message,
} from 'antd';
const Item = Form.Item
class CCC extends Component{
        funcs=(rule, value, callback)=>{
               if(!value){
                       callback('请输入密码')
               }else if(value.length>3){
                       callback('输入的密码不能小于三位')
               }else if(value.length<11){
                       callback('输入的密码不能超过11位')
               }else{
                       callback()
               }
        }
  handleSubmit=(e)=>{
    const {validateFields} = this.props.form
     e.preventDefault()
    validateFields((errors, values) => {

        if(!errors){
                console.log('请求成功'+values);

        }else{
                const messages = Object.values(errors).reduce((prev,curr)=>prev+curr.errors[0].message+'','')
          message.error(messages)
        }
    });

  }
        render(){
          const { getFieldDecorator } = this.props.form;
        return(
          <Form className="styles" onSubmit={this.handleSubmit}>
                  <Item>
                    {getFieldDecorator('username',{rules:[{ required: true,message: '请输入用户名'},{max:11,message:'用户名不能超过11位'}],
                  })( <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />)}
                  </Item>
                  <Item>{getFieldDecorator('password',{rules:[{validator:this.funcs}]})(<Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />)}

                  </Item>
                  <Button type="primary" htmlType="submit" className="buttons">
                          Log in
                  </Button>
        </Form>
        )
        }
}
const   MessagesComponent= Form.create()(CCC)
export  default  MessagesComponent