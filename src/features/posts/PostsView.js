import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchposts } from './postSlice';

const PostsView = () => {
	const { isloading, posts, error } = useSelector((state) => state.posts);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchposts());
	}, []);

	return (
		<div>
			{isloading && <h3>Loading ....</h3>}
			{error && <h3>{error}</h3>}
			<section>
				{posts &&
					posts.map((post) => {
						return (
							<article key={post.id}>
								<h5>{post.title}</h5>
								<p>{post.body}</p>
							</article>
						);
					})}
			</section>
		</div>
	);
};

export default PostsView;
