import React from 'react';
import usePosts from '../hooks/use-posts';
import PostPreview from './post-preview';

const Posts = (props) => {
  const posts = usePosts()
  return (
    <div className="posts">
      {posts.map((post, index) => <PostPreview key={post.slug} post={post} seePostHandler={() => props.seePostHandler(index)} />)}
    </div>
  )
};

export default Posts;
