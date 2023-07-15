import {useEffect} from 'react';
import {useSelector, useDispact} from 'react-redux';
import {setPosts} from '../state/index.js';
import PostWidget from './PostWidget.jsx';

const PostsWidget = ({userId, isPofile = false}) => {
	const dispatch = useDispact();
	const posts = dispatch((state) => state.posts);
	const token = dispatch((state) => state.token);

	const getPosts = async () => {
		const response = await fetch('http://localhost:3001/', {
			method: 'GET',
			headers: {Authorization: `Bearer ${token}`},
		});

        const data = await response.json();
        dispatch(setPosts({posts: data}));
	};
};

export default PostsWidget;
