import React, { Component } from 'react'

export default class Post extends Component {
  render() {
    const posts = this.props.posts
    return posts.map((post, index) => (
      <div key={index}>
        <h3>{post.title}</h3>
        <p>{post.content}</p>
        <hr/>
      </div>
    ))
  }
}
