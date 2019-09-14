import React from 'react';
import usePosts from '../hooks/use-posts';
import PostPreview from './post-preview';

const Posts = () => {
  const posts = usePosts()
  console.log(posts)
  return (
    <div className="posts">
      {posts.map(post => <PostPreview key={post.slug} post={post} />)}
    </div>
  )
};

export default Posts;
