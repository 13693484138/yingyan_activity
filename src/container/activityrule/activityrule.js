import {NavBar,Icon} from 'antd-mobile';
import React, { Component } from 'react';
import 'antd-mobile/dist/antd-mobile.css'; 
import './activityrule.scss'

class Activityrule extends Component {
	constructor(props) {
    super(props);
    this.state = {
      height:document.documentElement.clientHeight-45,
    };
    }
    render() {
        return (
        	<div style={{backgroundColor:'#000',color:'#fff',overflow:'hidden'}}>
        	<NavBar mode="light"
			      icon={<Icon type="left" />}
			      onLeftClick={() => this.props.history.push('/activity')}
			>活动规则</NavBar>
        	<div style={{padding:10,height:this.state.height,overflow:'scroll'}}>
        	<h2 align='center' style={{color:'#deb13e'}}>参赛要求和报名须知</h2>
        	<p>参赛要求</p>
        	<p>和报名须知参赛要求和报名须知参赛要求和报名须知
        	参赛要求和报名须知参赛要求和报名须知参赛要求和报名须知
        	参赛要求和报名须知参赛要求和报名须知参赛要求和报名须知
        	参赛要求和报名须知参赛要求和报名须知参赛要求和报名须知
        	参赛要求和报名须知参赛要求和报名须知
        	参赛要求和报名须知参赛要求和报名须知
        	参赛要求和报名须知参赛要求和报名须知
        	参赛要求和报名须知参赛要求和报名须知
        	参赛要求和报名须知参赛要求和报名须知</p>
        	<p>参赛要求</p>
        	<p>和报名须知参赛要求和报名须知参赛要求和报名须知
        	参赛要求和报名须知参赛要求和报名须知参赛要求和报名须知
        	参赛要求和报名须知参赛要求和报名须知参赛要求和报名须知
        	参赛要求和报名须知参赛要求和报名须知参赛要求和报名须知
        	参赛要求和报名须知参赛要求和报名须知
        	参赛要求和报名须知参赛要求和报名须知
        	参赛要求和报名须知参赛要求和报名须知
        	参赛要求和报名须知参赛要求和报名须知
        	参赛要求和报名须知参赛要求和报名须知</p>
        	<p>参赛要求</p>
        	<p>和报名须知参赛要求和报名须知参赛要求和报名须知
        	参赛要求和报名须知参赛要求和报名须知参赛要求和报名须知
        	参赛要求和报名须知参赛要求和报名须知参赛要求和报名须知
        	参赛要求和报名须知参赛要求和报名须知参赛要求和报名须知
        	参赛要求和报名须知参赛要求和报名须知
        	参赛要求和报名须知参赛要求和报名须知
        	参赛要求和报名须知参赛要求和报名须知
        	参赛要求和报名须知参赛要求和报名须知
        	参赛要求和报名须知参赛要求和报名须知</p>
        	<p>参赛要求</p>
        	<p>和报名须知参赛要求和报名须知参赛要求和报名须知
        	参赛要求和报名须知参赛要求和报名须知参赛要求和报名须知
        	参赛要求和报名须知参赛要求和报名须知参赛要求和报名须知
        	参赛要求和报名须知参赛要求和报名须知参赛要求和报名须知
        	参赛要求和报名须知参赛要求和报名须知
        	参赛要求和报名须知参赛要求和报名须知
        	参赛要求和报名须知参赛要求和报名须知
        	参赛要求和报名须知参赛要求和报名须知
        	参赛要求和报名须知参赛要求和报名须知</p>
            </div>     
			</div>
 
        );
    }
}

export default Activityrule;