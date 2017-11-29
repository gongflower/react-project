import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link,  
	NavLink } from 'react-router-dom';
import '../style/home1.scss';
import '../style/font/iconfont.css';
import { Carousel } from 'antd';
import 'antd/dist/antd.css';
// import axios from 'axios';

class Home extends Component {
	// 	componentDidMount() {
	// 	this.props.getData();
	// }

	render(){
	// 	var item = null;
	// 	if(this.props.list){
	// 		item=this.props.list.map((item,index)=>{
	// 						return <li key={item.id}>
	// 						<Link to="/Food">
	// 						<img src={item.icon_url}/>
	// 						</Link>
	// 						<span>{item.name}</span>
	// 						</li>
	// 					})
	// 		}
	// var items = null;
	// 	if(this.props.list){
	// 		items = this.props.list.map((item,index)=>{
	// 						return <li key={item.id}>
	// 						<Link to={"/details/"+item.id}>
	// 						<img src={item.image_240}/>
	// 						</Link>
	// 						<div className="content">
	// 						<p className="one">
	// 								{item.store_name}{item.msg_name}
	// 									<span>
	// 										{item.city_name}
	// 									</span>
	// 						</p>
	// 						<p className="two">
	// 								{item.subtitle}
	// 						</p>
	// 						<p className="three">
	// 								￥{item.price}
	// 									<i>/</i>
	// 									<span className="jiage">
	// 										{item.origin_price}
	// 									</span>
	// 									<span className="renqi">
	// 									<i></i>
	// 										{item.buy_num}
	// 									</span>
	// 						</p>
	// 						</div>
	// 						</li>			
	// 		})
	// 	}
		return(
			<div id="home">
			<header>
				<ul className="left">
					<li className="left">
					<NavLink to="/" >首页</NavLink>
					</li>
					<li className="left">
					<NavLink to="/community" >社区</NavLink>
					</li>
				</ul>
				<ul className="right">
					<li className="left ca">
					<NavLink to="/cart" ><i className="iconfont icon-gouwuchekong"></i></NavLink>
					</li>
					<li className="left log">
					<NavLink to="/login" ><i className="iconfont icon-renzhuanhuan"></i></NavLink>
					</li>
				</ul>
			</header>
			<div className="swipe">
					<Carousel className="my-carousel" autoplay={true} infinite>
					      {['M08/16/5F/CgvUA1ob4zWAKHRwAAEi4FJPrV8204_75_52_o', 
					      'M02/1D/C2/CgvUBVob40KAGp1ZAAEVHT1Wcj0997_75_52_o', 
					      'M0A/1C/59/CgvUBFob416ADXy9AAEy7a55nF8482_75_52_o',
					      'M03/16/80/CgvUA1ob50SADFZuAAGgNkmRmoY458_75_52_o',
					      'M0B/1C/7A/CgvUBFob55KANPRiAAERdTaQlqE764_75_52_o',
					      'M0B/1D/B7/CgvUBVob4YaAdt5GAAEV4qLfkMo032_75_52_o'].map(i => (
					        <div key={i}><img src={`http://pic1.ymatou.com/G02/${i}.jpg`} /></div>
      						))}
    				</Carousel>
				</div>
			</div>
			)	
	}
		
}

// const mapStateToProps = (state)=>{
// 	return {
// 		list: state.list
// 	}
// }

// const mapDispatchToProps = (dispatch)=>{
// 	return {
// 		getData: function(){
// 			axios.get("/home/api/getLikeList?pageNub=1&pageSize=20")
// 			.then((res)=>{
// 				console.log(res)
// 				dispatch({
// 					type: "SINGLE_GET_DATA",
// 					payload:{ 
// 						list:JSON.parse(res.data.likeProductInfo[0])
// 					}
// 				})
// 			})
// 		}
// 	}
// }

// const Home = connect(mapStateToProps, mapDispatchToProps)(HomeU);

export default Home;