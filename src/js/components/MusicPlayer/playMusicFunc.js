import React from 'react';

import MusicPlayer from '../MusicPlayer/MusicPlayer';

export default currentListeningUrl => {
    if(currentListeningUrl) {
        return <MusicPlayer url={currentListeningUrl} />;
    }
    return <div>No music</div>;
};