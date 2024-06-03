import db from "../client";

export const getPostComments = (postSlug: string) => {
  return db.query(`
    SELECT
      *
    FROM
      comments
    WHERE
      post_slug = '${postSlug}'
  `);
};

export const addCommentToPost = (
  postSlug: string,
  author: string,
  comment: string,
  respondToCommentId?: number
) => {
  return db.query(`
    INSERT INTO
      comments(
        post_slug,
        author,
        text,
        responds_to
      )
    VALUES(
      '${postSlug}',
      '${author}',
      '${comment}',
      ${respondToCommentId !== undefined ? respondToCommentId : "NULL"}
    )
  `);
};
