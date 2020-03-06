//A component that uses life-cycles, setInterval and state 
//to alternate between rendering either "tick" or "tock" 
//for a time and then rendering "BOOM!!!!".
import React, { Component } from 'react';

export default class Bomb extends Component {

    state = {
        count: 0,
    }

    componentDidMount() {
        this.interval = setInterval(() => {
           this.setState({
               count: this.state.count + 1
           })
        }, 1000)
    }

    componentWillUnmount(){
        clearInterval(this.interval)
    }

    renderDisplay() {
        const { count } = this.state
            if (count >= 8){
                clearInterval(this.interval)
                return 'BOOM!!!'
            } else if (count % 2 === 0) {
                return 'tick'
            } else {
                return 'tock'
            } 
    }   

    render() {
        return (
            <div className='CountdownBomb'>
                <p>{this.renderDisplay()}</p>
            </div>
        )
    }
}

