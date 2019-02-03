import React, { Component } from 'react'
import Post from '../components/Post'

export default class Posts extends Component {
  render() {    
    return (
      <div>
        <Post posts={this.props.posts} />
      </div>
    )
  }
}
