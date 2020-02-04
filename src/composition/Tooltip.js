// This exports a tooltip component
// Tooltips need to be inline 
// Use a span for inline
// So the tip can be used within the paragraph

import React from 'react';
import './Tooltip.css';

//props.children is for normal text
//props.message is for text that appears on hover
function Tooltip(props) {
  return (
    <span className='Tooltip'>
        <span className='Tooltip-content'
        style={{ color: props.color }}
        >
            {props.children}
        </span>
        <div className='Tooltip-message'>
            {props.message}
        </div>
    </span>
  )
}

function Tooltips(props) {/* content not shown */}

class TooltipClass extends React.Component {
  static defaultProps = {
    color: '#01A800', //green
  };
  render() {
    console.log('Using a class component!')
    console.log(this.props)
    return (
      <span className='Tooltip'>
        <span 
          className='Tooltip-content'
          style={{ color: this.props.color }}
        >
            {this.props.children}
        </span>
        <div className='Tooltip-message'>
            {this.props.message}
        </div>
    </span>
    )
  }
}

// we're not exporting TooltipClass yet...

export default TooltipClass;


