import express from 'express';
import Post from '../models/Post';
import User from '../models/User';

export const createPost = async (res, req) => {
	try {
		const {userId, description, picturePath} = req.body();

		const user = User.findById(userId);
		const newPost = new Post({
			userId,
			firstName: user.firstName,
			lastName: user.lastName,
			location: user.location,
			description,
			picturePath,
			userPicturePath: user.picturePath,
			likes: {},
			comments: [],
		});
		await newPost.save();

		const post =  await Post.save();
		res.status(201).json(post);
	} catch (err) {
		res.status(409).json({Message: err.Message});
	}
};
