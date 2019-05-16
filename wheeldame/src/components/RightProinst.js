import React, { Component } from 'react'

export class RightProinst extends Component {
  constructor(props){
    super(props)
    console.log('7s',this.props.data||[])
  }
  render() {
    let data = this.props.data && this.props.data;
    console.log('11s',data)
    return (
      <ul className='RightProinst'>
          {
            data.map((item,ind)=>{
              return <li key={ind}>{item.title}</li>
            })
          }
      </ul>
    )
  }
}

export default RightProinst
