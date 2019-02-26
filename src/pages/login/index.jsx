import React,{Component} from 'react'
import './index.less'
import imgs from './logo.png'
import CS from '../../component'
export default class  extends Component{
        render(){
        return(
          <div className="all">
          <header className="heard">
            <img src={imgs}/>
            <h1>React项目: 后台管理系统</h1>
          </header>
            <section>
             <h2>用户登陆</h2>
              <CS/>
            </section>
         </div>)
        }
}