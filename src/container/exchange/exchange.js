import {Icon,Button,NavBar,List,Stepper,Modal} from 'antd-mobile';
import React, { Component } from 'react';
import 'antd-mobile/dist/antd-mobile.css'; 
import './exchange.scss'

const Item = List.Item;

class Exchange extends Component { 
		
	constructor(props) {
    super(props);
    this.state = {
      modal2: false
    };
  }
  showModal = key => (e) => {
    e.preventDefault(); // 修复 Android 上点击穿透
    this.setState({
      [key]: true,
    });
  }
  onClose = key => () => {
    this.setState({
      [key]: false,
    });
  }
    render() {
        return (
        	<div>
			    <NavBar mode="light"
			      icon={<Icon type="left" />}
			      onLeftClick={() => this.props.history.push('/')}
			    >兑换</NavBar>
			    <List className="my-list">
			        <Item>
			          苏某君 
			        <span style={{float:'right',width:'75%',textAlign:'right'}}>余额:<span style={{color:"#34d3cb"}}>10000000000.00 </span>
			        	<Button className='czBtn'  size="small" inline>充值</Button>
			        </span>
			        </Item>
			    </List>
			    <List renderHeader={() => '购票'} className="my-list">
			     <Item extra={<Stepper style={{ width:'95%',border:'1px solid #34d3cb',color:'#34d3cb',borderRadius:20,minWidth: '100px' }} showNumber size="small" defaultValue={50} />}>需消费3000鹰眼豆</Item>
			    </List>
			    <p align='right' style={{color:"#34d3cb",paddingRight:'10px'}}>您今日还可兑换N张票</p>
			    <Button className='dhBtn' onClick={this.showModal('modal3')}>立即兑换</Button>
			    <ul>购票须知：
			    <li>1、鹰嘴豆和票的兑换比例</li>
			    </ul>
			     <Modal
		          visible={this.state.modal3}
		          transparent
		          maskClosable={true}
		          onClose={this.onClose('modal3')}
		          wrapProps={{ onTouchStart: this.onWrapTouchStart }}
		        >
		          <div>
		           <p className='pclass'><Icon type="check-circle" style={{verticalAlign:'text-top',color:"#34d3cb"}}/> 兑换成功!</p>
		          </div>
		        </Modal> 
			</div>
 
        );
    }
}

export default Exchange;