import React, {PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import classnames from 'classnames';

import {handleLikeClick, handleDislikeClick} from '../../Actions/Actions';

const LikeButton = ({isActive, children, isLikeButton, handleLikeClick, handleDislikeClick}) => {
    const classNames = classnames('btn', {
        'btn--highlited': isActive,
    });

    const handleClick = (event) => {
      event.preventDefault();
        console.log(isLikeButton)
      return isLikeButton && handleLikeClick() || handleDislikeClick();
    };

    return (
        <button className={classNames} onClick={handleClick}>
            {children}
        </button>
    );
};

LikeButton.propsTypes = {
    isActive: PropTypes.bool.isRequired,
    isLikeButton: PropTypes.bool,
};

LikeButton.defaultProps = {
    isLikeButton: false,
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
    handleLikeClick,
    handleDislikeClick,
}, dispatch);

export default connect(null, mapDispatchToProps)(LikeButton);