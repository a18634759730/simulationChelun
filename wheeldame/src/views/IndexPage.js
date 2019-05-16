import React, { Component } from 'react';

import Bscroll from 'react-bscroll';

import 'react-bscroll/lib/react-scroll.css';

import axios from 'axios';

import RightProinst from './../components/RightProinst';

export class  IndexPage extends Component {
  constructor(props){
    super(props)
    this.state={
      dataArr:[],
    }
    this.liClickDelete = this.liClickDelete.bind(this)
  }
  render() {
    let carArr = this.state.dataArr || [];
    return (
      <div className='IndexPage'>
        <Bscroll click={true}>
          <div className='IndexPage_content'>
            {
              carArr.map((item,ind)=>{
                return <div key={ind} className='IndexPage_content_child'>
                          <h1>{item.title}</h1>
                          <ul>
                            {
                              item.list.map((item,ind)=>{
                                return <li onClick={this.liClickDelete} key={ind}>
                                          <img src={item.CoverPhoto}/>
                                          <span>{item.Name}</span>
                                       </li>
                              })
                            }
                          </ul>
                       </div>
              })
            }
          </div>
        </Bscroll>
        <RightProinst data={this.state.dataArr}></RightProinst>
      </div>
    )
  }
  liClickDelete(){
    console.log(111)
  }
  componentDidMount(){
    axios.get('https://baojia.chelun.com/v2-car-getMasterBrandList.html?_1557967701460').then((item,ind)=>{
      let targetArr = []
      let obj = {}
      if(item.data.code === 1){
        item.data.data.map((item,ind)=>{
          let flter = item.Spelling.substr(0, 1);
          if(!obj[flter]){
            obj[flter] = {
              title:flter,
              list:[]
            }
          }
          obj[flter].list.push(item)
        })
      }
      for(let k in obj){
        targetArr.push(obj[k])
      }
      this.setState({
        dataArr:targetArr
      })
    })
  }
}

export default IndexPage
