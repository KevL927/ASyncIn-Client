import {connect} from 'react-redux';

import mapStateToProps from './mapStateToProps';


const mergeProps  = function (stateProps, dispatchProps) {
    const id = stateProps.id;
    delete stateProps.id;

    Object.keys(dispatchProps).forEach(function (key) {
        stateProps[key] = function () {
            var args = Array.prototype.slice.call(arguments);
            args.unshift(id);
            dispatchProps[key].apply(null, args);
        };
    });

    return stateProps;
};

export function connectWithDispatch(dispatch) {return connect(mapStateToProps, dispatch, mergeProps);}
export const connectTo = connect(mapStateToProps);