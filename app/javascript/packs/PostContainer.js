import React, { Component } from 'react'
import Posts from '../components/Posts'


export default class PostContainer extends Component {

  state = {
    posts : [
    {
      id: 1,
      title: 'Easy to use',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vestibulum, neque at dignissim molestie, urna risus finibus ante, in venenatis.'
    },
    {
      id: 2,
      title: 'Mail outside',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut neque lacus, convallis sit amet pulvinar sit amet, finibus auctor nisl.'
    },
    {
      id: 3,
      title: 'Baby on board',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rhoncus leo mi, sit amet consectetur ipsum vehicula ut. Pellentesque efficitur.'
    }
  ]
  }
  render() {    
    return (
      <div>
        <Posts posts={this.state.posts}/>
      </div>
    )
  }
}



