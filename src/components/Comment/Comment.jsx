import React from 'react';
import PropTypes from 'prop-types';
import './Comment.scss';

export const Comment = ({ comment }) => (
  <div className="comment">
    <p className="comment__header">
      $
      {comment.name}
      {' '}
      /
      <a href="#">
        $
        {comment.email}
      </a>
    </p>
    <br />
    <p className="comment__body">
      : $
      {comment.body}
    </p>
    <hr />
  </div>
);

Comment.propTypes = {
  comment: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }),
};
