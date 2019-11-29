import React from 'react';
import { css } from '@emotion/core';
import usePosts from '../hooks/use-posts';
import PostPreview from './post-preview';

const Posts = props => {
  const posts = usePosts();
  return (
    <div
      className="posts"
      css={css`
        padding: 40px;
      `}
    >
      {posts.map((post, index) => (
        <PostPreview
          key={post.slug}
          post={post}
          seePostHandler={() => props.seePostHandler(index)}
        />
      ))}
    </div>
  );
};

export default Posts;
