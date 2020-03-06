//A component that combines state and props. The parent of this component
// will pass in a prop that the number of which chamber contains a bullet, 
//and the number should be between 1 and 8. When a user clicks on a button, 
//the component will choose a random chamber and pull the trigger! If the 
//chamber with the bullet in is chosen, the component will render BANG!!!!

import React, {Component} from 'react';

export default class RouletteGun extends Component {

    static defaultProps = {
        bulletInChamber: 8
    };

    state = {
        chamber: null,
        spinningTheChamber: false,
    };

    componentWillUnmount() {
        clearTimeout(this.timeout)
    }

    handleClick = () => {
        this.setState({
            spinningTheChamber: true, 
        })

        this.timeOut = setTimeout(() => {
            const randomChamber = Math.ceil(Math.random() * 8) 

            this.setState({
                chamber: randomChamber,
                spinningTheChamber: false,
            })
        }, 2000)
    }

    renderDisplay() {
        const { chamber, spinningTheChamber } = this.state
        const { bulletInChamber } = this.props
        if (spinningTheChamber){
            return 'spinning the chamber and pulling the trigger!...'
        } else if ( chamber === bulletInChamber) {
            return 'BANG!!!'
        } else {
            return 'you\'re safe!'
        }
    }
    
    render() {
        return (
                <div className='RouletteGun'>
                    <p>{this.renderDisplay()}</p>
                    <button onClick={this.handleClick}>
                        Pull the trigger! 
                    </button>
                </div>
            )
        }

    }






