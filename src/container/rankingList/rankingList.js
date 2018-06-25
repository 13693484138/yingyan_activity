import React, { Component } from 'react';
import 'antd-mobile/dist/antd-mobile.css';
import ReactDOM from 'react-dom';
import {Modal,Icon,NavBar,ListView,Button} from 'antd-mobile';
import './rankingList.scss'
import close from '../../imgs/close.png';
function MyBody(props) {
    return (
        <div className="am-list-body my-body">
            <span style={{ display: 'none' }}>you can custom body wrap element</span>
            {props.children}
        </div>
    );
}

const data = [
    {
        img: '../../imgs/listImg.png',
        title: 'Meet hotel',
        des: '-执迷不悟-,ID:3345445450'
    },
    {
        img: '../../imgs/listImg.png',
        title: 'McDonald\'s invites you',
        des: '-执迷不悟-,ID:3345445450'
    },
    {
        img: '../../imgs/listImg.png',
        title: 'Eat the week',
        des: '-执迷不悟-,ID:3345445450'
    },
];
const NUM_SECTIONS = 6;
const NUM_ROWS_PER_SECTION = 6;
let pageIndex = 0;

const dataBlobs = {};
let sectionIDs = [];
let rowIDs = [];
function genData(pIndex = 0) {
    for (let i = 0; i < NUM_SECTIONS; i++) {
        const ii = (pIndex * NUM_SECTIONS) + i;
        const sectionName = `Section ${ii}`;
        sectionIDs.push(sectionName);
        dataBlobs[sectionName] = sectionName;
        rowIDs[ii] = [];

        for (let jj = 0; jj < NUM_ROWS_PER_SECTION; jj++) {
            const rowName = `S${ii}, R${jj}`;
            rowIDs[ii].push(rowName);
            dataBlobs[rowName] = rowName;
        }
    }
    sectionIDs = [...sectionIDs];
    rowIDs = [...rowIDs];
}
class RankingList extends Component{
    constructor(props) {
        super(props);
        const getSectionData = (dataBlob, sectionID) => dataBlob[sectionID];
        const getRowData = (dataBlob, sectionID, rowID) => dataBlob[rowID];
        const dataSource = new ListView.DataSource({
            getRowData,
            getSectionHeaderData: getSectionData,
            rowHasChanged: (row1, row2) => row1 !== row2,
            sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
        });

        this.state = {
            dataSource,
            modal1: false,
            isLoading: true,
            height: document.documentElement.clientHeight * 3 / 4,
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
    componentDidMount() {
        // you can scroll to the specified position
        // setTimeout(() => this.lv.scrollTo(0, 120), 800);

        const hei = document.documentElement.clientHeight - ReactDOM.findDOMNode(this.lv).parentNode.offsetTop;
        // simulate initial Ajax
        setTimeout(() => {
            genData();
            console.log(rowIDs);
            console.log(sectionIDs);
            this.setState({
                dataSource: this.state.dataSource.cloneWithRowsAndSections(dataBlobs, sectionIDs, rowIDs),
                isLoading: false,
                height: hei,
            });
        }, 600);
    }
    onEndReached = (event) => {
        // load new data
        // hasMore: from backend data, indicates whether it is the last page, here is false
        if (this.state.isLoading && !this.state.hasMore) {
            return;
        }
        console.log('reach end', event);
        this.setState({ isLoading: true });
        setTimeout(() => {
            genData(++pageIndex);
            this.setState({
                dataSource: this.state.dataSource.cloneWithRowsAndSections(dataBlobs, sectionIDs, rowIDs),
                isLoading: false,
            });
        }, 1000);
    }
    render(){
        const separator = (sectionID, rowID) => (
            <div
                key={`${sectionID}-${rowID}`}
                style={{
                    backgroundColor: '#F5F5F9',
                    height: 8,
                    borderTop: '1px solid #ECECED',
                    borderBottom: '1px solid #ECECED',
                }}
            />
        );
        let index = data.length - 1;
        const row = (rowData, sectionID, rowID) => {
            if (index < 0) {
                index = data.length - 1;
            }
            const obj = data[index--];
            return (
                <div key={rowID} style={{ padding: '0 15px' }}>
                    <div style={{ display: '-webkit-box', display: 'flex',position: 'relative', padding: '15px 0',backgroundColor:'#1c1c1c',borderRadius:'8px',margin:'10px 0' }}>
                        <img className="listImg" style={{ height: '64px' }} src={require('../../imgs/listImg.png')} alt="" />
                        <div className="listText" style={{ lineHeight: 1 }}>
                            <div  className="listLang" style={{ marginBottom: '8px', fontWeight: 'bold',color:'#ffffff' }}>{obj.des}</div>
                            <div style={{color:'#f7ce67'}}>2343543票</div>
                        </div>
                        <div className="listBottom" onClick={this.showModal('modal1')}>投票</div>
                        <div className="listTitle"><span className="listSpan">4</span></div>
                    </div>
                </div>
            );
        };
        return(
            <div className='rankList'>
                <NavBar mode="light"
                        icon={<Icon type="left" />}
                        onLeftClick={() => {sectionIDs=[],this.props.history.push('/activity')}}
                >排行榜</NavBar>
                <div className="ranking">
                    <div className="ranking-two">
                        <div className="ranking-img">
                        <img src={require('../../imgs/twoHead.png')} alt=""/>
                            <img src={require('../../imgs/twoImg.png')} alt=""/>
                        </div>
                        <div className="ranking-name">-执迷不悟-</div>
                        <div className="ranking-id">ID:3345445450</div>
                        <div className="ranking-shu">2343543票</div>
                        <div className="ranking-buttom">投票</div>
                    </div>
                    <div className="ranking-one">
                        <img src={require('../../imgs/oneHead.png')} alt=""/>
                        <div className="ranking-name">-执迷不悟-</div>
                        <div className="ranking-id">ID:3345445450</div>
                        <div className="ranking-shu">2343543票</div>
                        <div className="ranking-buttom">投票</div>
                    </div>
                    <div className="ranking-shui">
                        <div className="ranking-img">
                            <img src={require('../../imgs/shuiHead.png')} alt=""/>
                            <img src={require('../../imgs/twoImg.png')} alt=""/>
                        </div>
                        <div className="ranking-name">-执迷不悟-</div>
                        <div className="ranking-id">ID:3345445450</div>
                        <div className="ranking-shu">2343543票</div>
                        <div className="ranking-buttom">投票</div>
                    </div>
                </div>
                <Modal
                    visible={this.state.modal1}
                    transparent
                    maskClosable={false}
                    className="myModel"
                    onClose={this.onClose('modal1')}
                    wrapProps={{ onTouchStart: this.onWrapTouchStart }}
                >
                    <div align='center'>
                        <div align='right' style={{width:'100%'}}>
                        <img src={close} className='imgwhc' alt='图片' onClick={this.onClose('modal1')}/>
                        </div>
                        <p style={{color:'#000'}}>你正在为某某选手投票~</p>
                        <img className="pop-img" src={require('../../imgs/listImg.png')} alt=""/>
                        <p className="pop-img-name" style={{fontsize:"16px",color:"#000"}}>主播名称</p>
                        <div className="pop-buttom">
                        <Button  inline size="small" className='contentma1'  onClick={this.onClose('modal1')}>残忍拒绝</Button>
                        <Button  inline size="small" className='contentma2'>确认投票</Button>
                        </div>
                    </div>
                </Modal>
                <ListView
                    ref={el => this.lv = el}
                    dataSource={this.state.dataSource}
                    // renderHeader={() => <span>header</span>}
                    // renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
                    //     {this.state.isLoading ? 'Loading...' : 'Loaded'}
                    // </div>)}
                    // renderSectionHeader={sectionData => (
                    //     <div>{`Task ${sectionData.split(' ')[1]}`}</div>
                    // )}
                    // renderBodyComponent={() => <MyBody />}
                    renderRow={row}
                    // renderSeparator={separator}
                    style={{
                        height: this.state.height,
                        overflow: 'auto',
                    }}
                    pageSize={4}
                    onScroll={() => { console.log('scroll'); }}
                    scrollRenderAheadDistance={500}
                    onEndReached={this.onEndReached}
                    onEndReachedThreshold={10}
                />
            </div>
        );
    }
}

export default RankingList;