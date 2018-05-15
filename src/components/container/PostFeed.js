import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { Post } from '../presentation'; // This is grabing the post from Post.

class PostFeed extends Component {
_renderPost({ item }) {  //The function is _renderPost it takes the argument as an Object 'item'. 'item' is just the imageUri
  return <Post item={item}/>; // This is returning the post from Post.
}

_returnKey(item) {
  return item.toString();
}

  render(){
    return (
      <FlatList
      data={[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]} //This is how many times we want the post to show
      keyExtractor={this._returnKey} //Always need a key foreach item on a flatlist needs to be a string
      renderItem={this._renderPost} //This would render the Post once but we pass in the argument for the images siwtch each time Odd and Even.
    />
    );
  }
}

export default PostFeed;
