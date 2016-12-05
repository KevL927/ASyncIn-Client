import traverse from './traverse-otherUserPlaylist';


export default function (state, props) {
    var ret = {};
    if (props.propList) {
        props = props.propList;
        props.forEach(function (prop) {
            ret[prop.split('.').pop()] = traverse(state, prop.split('.'));
        });
    }
    ret.otherUserPlaylist = state.otherUserPlaylist;

    return ret;
}