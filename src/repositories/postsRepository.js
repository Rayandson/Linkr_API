import { connectionDB } from "../db/db.js";

async function createPost(user_id, content, url, title, description, image) {
  return connectionDB.query(
    "INSERT INTO posts (user_id, content, url, url_title, url_description, url_image) VALUES($1, $2, $3, $4, $5, $6) RETURNING id;",
    [user_id, content, url, title, description, image]
  );
}

async function getPosts() {
  return connectionDB.query(
    `SELECT 
       posts.*, users.user_name, users.profile_picture,
       COUNT(likes.post_id) as likes
    FROM 
      posts JOIN likes ON likes.post_id = posts.id
    JOIN 
      users ON posts.user_id = users.id
    GROUP BY 
      posts.id, users.user_name, users.profile_picture
    ORDER BY 
      posts.id DESC 
    LIMIT 
      20;
      `
  );
}

function getPostsByHashtag(id) {
  return connectionDB.query(
    `SELECT * FROM posts WHERE id IN (SELECT post_id FROM posts_hashtags WHERE hashtag_id = $1)`,
    [id]
  );
}

function searchPost(id) {
  return connectionDB.query(`SELECT * FROM posts WHERE id=$1`, [id]);
}

function deletePost(id) {
  return connectionDB.query(`DELETE FROM posts WHERE id=$1`, [id]);
}

function insertLikeToPost(userId, postId) {
  return connectionDB.query(
    `INSERT INTO likes (user_id, post_id) VALUES ($1, $2)`,
    [userId, postId]
  );
}

const postsRepository = {
  createPost,
  getPosts,
  getPostsByHashtag,
  searchPost,
  deletePost,
  insertLikeToPost,
};

export default postsRepository;
