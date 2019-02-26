import React,{Component} from 'react'
import {
  Form, Icon, Input, Button,
} from 'antd';
const Item = Form.Item
class Froms extends Component{
        render(){
          const {from} = this.props
        return(
          <Form>
            <Item>
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
            </Item>
            <Item>
              <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="password" />
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