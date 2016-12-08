import React from 'react';
import playMusicFunc from '../MusicPlayer/playMusicFunc';

export default ({currentListeningUrl, currentListeningPlaylist}) => {
	return (
			<div>
			    <div> {playMusicFunc(currentListeningUrl)}</div>
			    <RenderTracks playlistObject={currentListeningPlaylist} />
			</div>
	)
}

 