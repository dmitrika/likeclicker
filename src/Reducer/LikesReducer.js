import {handleActions} from 'redux-actions';
import * as actions from '../Constants/Constants';

const initialState = {
    likesCount: 5,
    dislikeCount: 5,
    isLike: false,
    isDislike: false,
};

const LikesReducer = handleActions({
    [actions.HANDLE_LIKE_CLICK]: state => ({
        ...state,
        isLike: !state.isLike,
        isDislike: false,
        likesCount: state.isLike ? state.likesCount - 1 : state.likesCount + 1,
        dislikeCount: state.isDislike ? state.dislikeCount - 1 : state.dislikeCount,
    }),
    [actions.HANDLE_DISLIKE_CLICK]: state => ({
        ...state,
        isLike: false,
        isDislike: !state.isDislike,
        dislikeCount: state.isDislike ? state.dislikeCount - 1 : state.dislikeCount + 1,
        likesCount: state.isLike ? state.likesCount - 1 : state.likesCount,
    }),
}, initialState);

export default LikesReducer;