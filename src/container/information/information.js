import {Icon,NavBar,Button,Modal} from 'antd-mobile';
import React, { Component } from 'react';
import 'antd-mobile/dist/antd-mobile.css'; 
import eagle02 from '../../imgs/eagle02.png';
import picIcon1 from '../../imgs/pic.png';
import picIcon2 from '../../imgs/picAdd.png';
import InfoCard from '../../component/infoCard/infoCard';
import './information.scss'

class Information extends Component {
	constructor(props) {
    super(props);
    this.state = {
      modal1: false,
      imgData:[],
      height:document.documentElement.clientHeight-45,
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
  
  videoPre(e){//视频预览
        let imgLen = e.target.files.length;
        for(let i=0;i<imgLen;i++){
            let reader = new FileReader();
            let data = {
            	image_name: e.target.files[i].name,
            	photo_src: null
            };
            
            reader.onloadend = () => {
            	data.photo_src = reader.result;
            	this.state.imgData.push(data);
            	this.setState({
            		imgData: this.state.imgData
            	})
            };
            reader.readAsDataURL(e.target.files[i]);
        }
}
    render() {
        return (
        	<div>
		        <NavBar mode="light"
			      icon={<Icon type="left" />}
			      onLeftClick={() => this.props.history.push('/activity')}
			    >资料</NavBar>			    
			    
			    <div style={{height:this.state.height,overflow:'scroll'}}>
			    <InfoCard/>
			    <Button className='zpzsBtn'> <img src={picIcon1} className='btnimg1' /> 作品展示    </Button>
			    <Button className='zpzsBtn'> 
				    <img src={picIcon2} className='btnimg1' /> 上传短视频
			    	<input className="change" type="file" onChange={(event)=>this.videoPre(event)}/>
			    </Button>
			    <div>
                {/*预览视频
                <div className="box">
                    <video src={this.state.imgData.length== 0 ?'' :this.state.imgData[0].photo_src}  style={{color:'#000',border:'2px solid red',height:200,width:200}} controls="controls"></video>
                </div>
                */}
                </div>
			    <div className='imgdiv'>
			      <img src={eagle02}  alt='图片'/>
			      <p>上传失败</p>
			    </div>  
			    <Button className='cxscBtn' onClick={this.showModal('modal1')}>重新上传</Button>
			    <Modal
		          visible={this.state.modal1}
		          transparent
		          maskClosable={false}
		          className="myModel"
		          onClose={this.onClose('modal1')}
		          wrapProps={{ onTouchStart: this.onWrapTouchStart }}
		        >
		          <div>
		           <p style={{color:'#000',lineHeight: 1.5}}>每位选手只有三次上传作品的机会哦~</p>
		           <p style={{color:'#000'}}>目前剩余两次</p>
		           <br/>
		           <Button  inline size="small" className='contentma1'  onClick={this.onClose('modal1')}>取 消</Button>
    			   <Button  inline size="small" className='contentma2'>继续上传</Button>
		          </div>
		        </Modal>
		        </div>
			</div>
        );
    }
}

export default Information;