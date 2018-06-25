import {Icon,Button,NavBar,Modal,Checkbox} from 'antd-mobile';
import React, { Component } from 'react';
import 'antd-mobile/dist/antd-mobile.css'; 
import eagle01 from '../../imgs/eagle01.png';
import close from '../../imgs/close.png';
import './activity.scss'

const AgreeItem = Checkbox.AgreeItem;
class Activity extends Component { 
	
	constructor(props) {
    super(props);
    this.state = {
      modal1: false,
      modal2: false,
      modal:'modal1',
      rz:true,//是否认证
      baoming:'我要报名'
    };
  }
  showModal = key => (e) => {
    e.preventDefault(); // 修复 Android 上点击穿透
    if(this.state.rz){
	    this.setState({
	      baoming:'我的资料',
	      modal:'modal2',
	      modal2:true,
	      checked:true
	    });
    }else{
	    this.setState({
	      modal1:true
	    });
    }   
  }
  onClose = key => () => {
    this.setState({
      [key]: false,
    });
  }
  vote(){
  	this.props.history.push('/contesTants')
  }
  uploadSp(){
  	if(this.state.checked){
  		this.props.history.push('/information')
  	}else{
  		alert('需同意相关服务条款才可上传参赛视频！');
  	}
  }
  onChange = (e) => {
    this.setState({
      checked: e.target.checked,
    });
  }
    render() {
        return (
        	<div className='cdiv'>
			    <NavBar mode="light"
			      icon={<Icon type="left" />}
			      onLeftClick={() => alert('返回')}
			    >活动</NavBar>
			    <div className='content_zq'>  
			    <div align='right' style={{padding:'10px',color:'#b78a36'}}>
			    	<a href='' style={{color:'#b78a36',textDecoration:'underline'}}  onClick={() => this.props.history.push('/activityrule')}>活动规则</a>
			    </div>
			    
		        <Modal
		          visible={this.state.modal1}
		          transparent
		          maskClosable={false}
		          className="myModel"
		          onClose={this.onClose('modal1')}
		          wrapProps={{ onTouchStart: this.onWrapTouchStart }}
		        >
		          <div>
		           <p style={{color:'#000'}}>你当前还不是鹰眼主播哦~</p>
		           <br/>
		           <Button  inline size="small" className='contentma1'  onClick={this.onClose('modal1')}>缓一下</Button>
    			   <Button  inline size="small" className='contentma2'>去认证</Button>
		          </div>
		        </Modal>
				<Modal
		          visible={this.state.modal2}
		          transparent
		          maskClosable={false}
		          className="myModel"
		          onClose={this.onClose('modal2')}
		          wrapProps={{ onTouchStart: this.onWrapTouchStart }}
		        >
		          <div>
		           <div align='right' style={{width:'100%'}}>
		           <img src={close} className='imgwhc' alt='图片' onClick={this.onClose('modal2')}/>
		           </div>
		           <img src={eagle01} className='imgwh' alt='图片'/>
		           <h2 className='color000'>恭喜报名成功!</h2>
		           <p className='color000'>快来上传你的第一支参赛视频吧~</p>
		           <AgreeItem data-seed="logId"  checked={this.state.checked} onChange={this.onChange}>
                      我已阅读并同意相关服务条款
		           </AgreeItem>
    			   <Button size="small" className='contentma3' onClick={() => this.uploadSp()}>去上传参赛短视频</Button>
		          </div>
		        </Modal>
			    <div className='contentdiv'>
			    <Button  inline size="small" className='contenta' onClick={() => this.vote()}>我要投票</Button>
    			<Button  inline size="small" className='contenta' onClick={() => this.props.history.push('/rankinglist')}>排行榜</Button>
    			<Button  inline size="small" className='contenta' onClick={this.showModal(this.state.modal)}>{this.state.baoming}</Button>
    			
    			</div>
			    </div>
			</div>
 
        );
    }
}

export default Activity;