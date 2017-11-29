import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import scss from '../style/login.scss';
import {
  Link
} from 'react-router-dom'
class LoginUI extends Component {
	componentDidMount() {
	}
	render() {
		return (
		<div id="login">
		  	<div className="top">
				<Link to="/pcenter"><i className="iconfont icon-icon"></i></Link>
				<p className="log">登录</p>
			</div>
			<div className="in">
				<input type="text" ref="user" placeholder="手机号/邮箱/用户名"/>
				<input type="password" ref="pw" placeholder="密码"/>
				<button onClick={()=>{this.props.register(this.refs.user.value,this.refs.pw.value,this)}}>登录</button>
				<div className="di">
					<Link to="/regist" className="free">免费注册</Link>
					<p className="forget">忘记密码?</p>
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
			//alert(username);
			//alert(password);
			axios.post('/api/login','username='+username+'&password='+password)
			.then(function(res){
				if(res.data){
					that.props.history.push("/")
				}else{
					alert("登录失败")
				}
			})
		}
	}
}

const Login = connect(mapStateToProps, mapDispatchToProps)(LoginUI);

export default Login;