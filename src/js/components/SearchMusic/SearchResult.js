import React from 'react';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';

export default ({ track }) => {
	const tooltip_track_title = (
	  <Tooltip id="tooltip_playlist_add"><strong>{track.title}</strong></Tooltip>
	);
	return (
		<div className="search-result">
			<div>
				<img className="thumbnail" src={track.thumbnail} alt="thumbnail"/>
				<OverlayTrigger placement="bottom" overlay={tooltip_track_title}>
					<div className="crop_track">
						  {track.title}
					</div>
				</OverlayTrigger>
			</div>
		</div>
	);
};