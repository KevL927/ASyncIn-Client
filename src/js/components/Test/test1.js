import React from 'react';
import {Link} from 'react-router';

export default (props) => {
	console.log(props)
   return (
   		<div>
   			<h6>HEADER</h6>
   			<Link to="test">go to test3</Link>
   			<Link to="tester">go to test4</Link>
   			<br />
   			<center>{props.children}</center> {/*this is test3 or test4*/}

   			<h3>footer</h3>
   		</div>
   )
};