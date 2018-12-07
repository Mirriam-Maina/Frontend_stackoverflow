import { FETCH_POSTS } from './types';
import axios from 'axios';

export const fetchPosts = () => dispatch => {
    // console.log('fetching, getting');
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(posts =>
            dispatch({
                type: FETCH_POSTS,
                payload: posts
            })
        );
};
