import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../style/pcenter.css';
import axios from 'axios';
import {
  Link
} from 'react-router-dom'

class Pcenter extends Component{
	componentDidMount() {
	}
	render() {
		return(
			<div>
		   <div id="red">
			<span className="red2">个人中心</span>
			<p className="red1">
				<Link to="/cart">
				<i className="iconfont icon-gouwuchekong "></i>
				</Link>
			</p>
			<p className="red3">
				<Link to="/">
				<i className="iconfont icon-home"></i>
				</Link>
			</p>
		</div>
		<div className="pe">
			<span className="red3">
			</span>
			<Link to="/login" className="lo">请登录</Link>
		</div>

		<ul className="red9">
			<li>
				<span className="redd">我的订单</span>
				<i className="reddd iconfont icon-you"></i>
			</li>
			<li>
				<span className="redd">我的优惠券</span>
				<i className="reddd iconfont icon-you"></i>
			</li>
		</ul>
		</div>
			)
	}
}
export default Pcenter;