import React from 'react';
import {css} from '@emotion/core';

const PostPreview = ({ post, seePostHandler }) => (
  <article
    css={css`
      margin-top: 1rem;
      padding-bottom: 1rem;

      :first-of-type {
        margin-top: 1rem;}
    `}
    >
  <h3
    onClick={seePostHandler}
    css={css`
      cursor: pointer;
      font-weight: bold;

      &:hover {
        text-decoration: underline;
      }
    `}
  >
   {post.title}
  </h3>
  <p>{post.excerpt}</p>
    {/* va scroller vers le lien */}
    <button onClick={seePostHandler} css={css`
      cursor: pointer;

      &:hover {
        background: #efefef;
      }
    `}>Read this post &rarr;</button>
  </article>
);

export default PostPreview;
