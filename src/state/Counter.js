import React from 'react';

class Counter extends React.Component {
    constructor(props) {
        console.log('props in constructor', props)
        super(props)
        this.state = { count: 0 }
      }
    
    handleButtonClick= () => {
        const newCount = this.state.count + 1
        this.setState({
            count: newCount
        })
    }

    //Do I need or is this redundant to constructor() ?
    state = {
        count: 0
      };

    render() {
        return (
            <div>
                <p>current count: {this.state.count}</p>
                <button onClick={this.handleButtonClick}>
                    Add 1
                </button>
            </div>
        )
    }

}
export default Counter

