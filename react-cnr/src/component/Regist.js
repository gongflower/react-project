import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import scss from '../style/regist.scss';
import {
  Link
} from 'react-router-dom'
class RegisterUI extends Component {
	componentDidMount() {
	}
	render() {
		return (
		<div id="regist">
		  	<div className="top">
				<Link to="login"><i className="iconfont icon-icon"></i></Link>
				<p className="log">注册</p>
			</div>

			<div className="in">
				<input type="text" ref="user" placeholder="手机号/邮箱/用户名"/>
				<input type="password" ref="pw" placeholder="密码"/>
				<button onClick={()=>{this.props.register(this.refs.user.value,this.refs.pw.value,this)}}>
					完成注册
				</button>
				<div className="di">
					<Link to="/login" className="free">登录</Link>
					<Link to="/" className="forget">忘记密码?</Link>
				</div>
			</div>
		</div>
		
		
		)
	}
}

const mapStateToProps = (state)=>{
	return {
		
	}
}

const mapDispatchToProps = (dispatch)=>{
	return {
		getList:()=>{
			// getData(dispatch)
		},
		register:(username,password,that)=>{
			axios.post('/api/regist','username='+username+'&password='+password)
			.then(function(res){
				if(res.data){
					that.props.history.push("/login");
				}else{
					alert("用户名已存在")
				}
			})
		}
	} 
	
}

const Regist = connect(mapStateToProps, mapDispatchToProps)(RegisterUI);

export default Regist;