import React from "react"
import "./post.css"

function Post({ post }) {
  if (!post) return null

  return (
    <div className="post">
      {post.title} - {post.excerpt}
      <br />
      <a href={post.url}>Visit site</a>
    </div>
  )
}

export default Post
