import React,{Component} from 'react'
import  pic from './logo.png'
import './index.less'
import WrappedLoginForm from '../../component/From'
export default class bbbb extends Component{
        render(){
        return(
          <div className="logins">
            <header className="headers">
              <img src={pic} alt='pic'/>
              <h1>React项目: 后台管理系统</h1>
            </header>
            <section className="styls">
              <h2>用户登录</h2>
            <WrappedLoginForm/>
            </section>
          </div>
        )
        }
}