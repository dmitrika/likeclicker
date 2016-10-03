import * as actions from '../Constants/Constants';
import {createAction} from 'redux-actions';

export const handleLikeClick = createAction(
    actions.HANDLE_LIKE_CLICK,
);

export const handleDislikeClick = createAction(
    actions.HANDLE_DISLIKE_CLICK,
);
