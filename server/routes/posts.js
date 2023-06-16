import express from 'express';
import {getFeedPost, getUserPosts, likePost} from '../controllers/posts.js';
import {verifyToken} from '../middleware/auth';

const router = express.Router();

//Read
router.get('/', verifyToken, getFeedPost);
router.get('/:userId/posts', verifyToken, getUserPosts);

//Update
router.patch('/:id/like', verifyToken, likePost);

export default router;
