import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../../redux/actions';

class Post extends Component {
  componentWillMount(){
    this.props.fetchPosts();
  }

  render() {
    const postItems = this.props.posts.map((post,key) => (
          <div key={key}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
      ))
    return (
      <div>
        <h1>Posts:</h1>
        {postItems}
        <p><Link to="/">Home Page</Link></p>
      </div>
    )
  }
}

Post.PropTypes = {
  fetchPosts: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  posts: state.posts.items,
});

export default connect(mapStateToProps, { fetchPosts })(Post);
