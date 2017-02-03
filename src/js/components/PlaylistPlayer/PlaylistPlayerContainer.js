import React from 'react';

import AddPlaylist from '../AddPlaylist/AddPlaylist';
import RenderTracks from './RenderTracks';

export default ({ playlistObject, url }) => {
    return (
        <div>
            <RenderTracks playlistObject={playlistObject} />
            <AddPlaylist />
        </div>
    );
};