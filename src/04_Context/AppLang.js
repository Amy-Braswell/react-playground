import React, { Component } from "react"
import Child from '../04_Context/lang-context/Child'
import LangControls from '../04_Context/lang-context/LangControls'

export default class AppLang extends Component {
  render() {
    return (
      <div className='AppLang'>
        <LangControls />
        <Child />
      </div>
    )
  }
}