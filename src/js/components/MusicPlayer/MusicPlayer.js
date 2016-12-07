import ReactPlayer from 'react-player'
import React from 'react'


export default ({ url }) => {
    return (
    	<div>
    		<ReactPlayer url={url} playing/>
    	</div>
    )
}