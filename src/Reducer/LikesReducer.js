import {handleActions} from 'redux-actions';
import * as actions from '../Constants/Constants';

const initialState = {
    likesCount: 0,
    dislikeCount: 0,
    isLike: false,
    isDislike: false,
};

const LikesReducer = handleActions({
    [actions.HANDLE_LIKE_CLICK]: state => ({
        ...state,
        isLike: true,
        isDislike: false,
        likesCount: 1,
        dislikeCount: 0,
    }),
    [actions.HANDLE_DISLIKE_CLICK]: state => ({
        ...state,
        isLike: false,
        isDislike: true,
        dislikeCount: 1,
        likesCount: 0,
    }),
}, initialState);

export default LikesReducer;