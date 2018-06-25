import {WingBlank,WhiteSpace,SearchBar,Icon,NavBar} from 'antd-mobile';
import React, { Component } from 'react';
import ContentList from '../../component/contentList/contentList'
import 'antd-mobile/dist/antd-mobile.css';
import './contesTants.scss'
class ContestTants extends Component {
    constructor(props) {
        super(props);
        this.state = {
            info:[]
        };
        console.log(this.state.info.length)
    }

    componentWillMount(){
        let formData = new FormData();
        formData.append("activity_id",1);
        formData.append("uid",1000000001);
        fetch("http://test.api.eagleeyetv.com.cn/v1/activity/audience/list",{
            method: 'POST',
            body:formData
        })
            .then((response)=>response.json())
            .then((json)=>{
                console.log(json);
                if(json.c==0){
                    console.log(json.d.items)
                    this.setState({
                        info: json.d.items
                    })
                }
                console.log(this.state);
            })
            .catch((error)=>{console.log(error)})
    }
    render() {
        console.log(this.state.info);
        return (
            <div className="ys-bg">
                <NavBar mode="light"
                        icon={<Icon type="left" />}
                        onLeftClick={() => this.props.history.push('/activity')}
                        rightContent={[
                           <span onClick={()=>{this.props.history.push('/rankinglist')}} style={{color:'#34d3cb'}}>排行榜</span>,
                        ]}
                >参赛选手</NavBar>
                <SearchBar placeholder="主播ID或者用户名搜索" maxLength={8} cancelText="搜索" />
                <ContentList list={this.state.info}/>
            </div>
        );
    }
}

export default ContestTants;