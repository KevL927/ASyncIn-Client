import React from 'react';
import { Component } from 'react';
import Loading from 'react-loading';
 
class LoadingAni extends Component{
  render () {
    return (
    <div>
      	<Loading type='spokes' color='#e3e3e3' />
    </div>
    );
  }
};

export default LoadingAni;