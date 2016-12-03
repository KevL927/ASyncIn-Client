import React, { Component } from 'react'


class Feedback extends Component {
  render () {
    return (
    	<div>
    		{this.props.feedback}
    	</div>
    )
  }
}

export default Feedback;