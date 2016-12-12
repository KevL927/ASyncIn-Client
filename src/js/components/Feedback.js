import React, { Component } from 'react'


class Feedback extends Component {
  render () {
    return ( 
    	<div>
    		  <p>{this.props.feedback}</p>
    	</div>
    )
  }
}

export default Feedback;