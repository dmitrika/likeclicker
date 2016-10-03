import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

import LikeButton from '../Buttons/LikeButton';

const Likes = ({isDislike, isLike, likesCount, dislikeCount}) =>
    <div>
        <LikeButton isActive={isLike} isLikeButton>
            Like it
        </LikeButton> {likesCount},
        <LikeButton isActive={isDislike} >
            Dislike it
        </LikeButton> {dislikeCount}
    </div>
;

Likes.propsTypes = {
    isDislike: PropTypes.bool.isRequired,
    isLike: PropTypes.bool.isRequired,
    likesCount: PropTypes.number.isRequired,
    dislikeCount: PropTypes.number.isRequired,
    handleButtonClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
    likesCount: state.likesCount,
    isLike: state.isLike,
    isDislike: state.isDislike,
    dislikeCount: state.dislikeCount,
});

export default connect(mapStateToProps)(Likes);