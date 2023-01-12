import React, { Component, createRef } from 'react'

export default class home extends Component {

    constructor() {
        super()
        this.inputref = null
    }

    onClickchang = () => {
        this.inputref.style.backgroundColor = "red"
        this.inputref.placeholder.style.Color = "white"
    }
    
  render() {
    return (
        <div>
            {/* =================== EVENT ==================== */}
            <input ref={(Node) => {this.inputref = Node}} id="place" placeholder='enter name' />
            <button type='submit' onClick={this.onClickchang}>Submit</button>
        </div>
    )
  }
}
