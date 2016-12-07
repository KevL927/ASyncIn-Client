import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions/actions';
import AddPlaylist from '../AddPlaylist/AddPlaylist';
import playMusicFunc from '../MusicPlayer/playMusicFunc';
import RenderTracks from './RenderTracks';

export default ({ playlistObject, url }) => {

        return (
            <div>
                {playMusicFunc(url)}
                <RenderTracks playlistObject={playlistObject} />
                <AddPlaylist />
            </div>
        );

}