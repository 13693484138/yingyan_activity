import {Button,WingBlank} from 'antd-mobile';
import React, { Component } from 'react';
import 'antd-mobile/dist/antd-mobile.css';
import './contentList.scss';

class ContentList extends Component {
	constructor(props) {
    super(props);
        console.log(this.props.list)
  }
    render() {
        return (
            <div className="content-ys">
                <WingBlank>
                {this.props.list.length === 0?"":this.props.list.map((data,index)=>(
	               <div className="content-list" key={data.user_id}>
	               <div className="content-list-co">
	                   <img className="content-img" src={data.user_avatar} alt=""/>
	                   <div className="content-name-bar">
	                       <span>{data.user_nickname}</span>
	                   </div>
	               </div>
	                    <div style={{textAlign:"center"}}>
	                    <Button  inline size="small" className='contentma1' >{data.activity_contestant_vote}票</Button>
	                    <Button  inline size="small" className='contentma2'>为TA投票</Button>
	                    </div>
	                </div>
                 ))}

                </WingBlank>
                <div style={{clear:'both'}}></div>
            </div>
        );
    }
}
export default ContentList;