import express from 'express';

const router = express.Router();

/**
 * @swagger
 * /users:
 *   get:
 *     description: Get all users
 *     responses:
 *       200:
 *         description: Successfully fetched all users
 */
router.get('/', (req, res) => {
  res.status(200).json({ message: 'List of all users' });
});

export default router;
