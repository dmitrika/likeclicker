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
        likesCount: state.likesCount + 1,
    }),
    [actions.HANDLE_DISLIKE_CLICK]: state => ({
        ...state,
        isLike: false,
        isDislike: true,
        dislikeCount: state.dislikeCount + 1,
    }),
}, initialState);

export default LikesReducer;