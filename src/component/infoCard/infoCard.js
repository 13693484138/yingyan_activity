import {Icon} from 'antd-mobile';
import React, { Component } from 'react';
import 'antd-mobile/dist/antd-mobile.css'; 
import eagle01 from '../../imgs/eagle01.png';
import man from '../../imgs/man.png';
import woman from '../../imgs/woman.png';
import star from '../../imgs/star.png';
import '../../container/information/information.scss';


class InfoCard extends Component { 
    render() {
        return (
        	<div>
			    <div className='infoCard'>			
			    <img src={eagle01} className='imgava' alt='图片'/><br/>
				    <div>
					    <span style={{color:'#ffc000'}}>-执迷不悟</span>
					    <span style={{backgroundColor:'#5ea0ff'}}>
					    <img src={man} className='imgicon' alt='icon'/>
					    </span>
					    <span style={{color:'#fff',backgroundColor:'#9cdb42'}}>
					    <img src={star} className='imgicon' alt='icon'/> 10
					    </span>
					    <br/>
					    <p>ID:666666</p>
					    <p>粉丝 100万 | 关注 30</p>
					    <p>简介:简介简介简介简介简介简介简介</p>
				    </div>
			    </div> 
			</div>
        );
    }
}

export default InfoCard;