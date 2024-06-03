import db from "../client";

export const incrementVisitCount = (postSlug: string) => {
  return db.query(`
    INSERT INTO
      stats(post_slug, visits)
    VALUES
      ('${postSlug}', 1)
    ON CONFLICT DO UPDATE SET visits = visits + 1
  `);
};

export const addLikeReactionToPost = (postSlug: string) => {
  return db.query(`
    UPDATE TABLE
      stats
    SET
      like = like + 1
    WHERE
      post_slug = '${postSlug}'
  `);
};

export const addDislikeReactionToPost = (postSlug: string) => {
  return db.query(`
    UPDATE TABLE
      stats
    SET
      dislike = dislike + 1
    WHERE
      post_slug = '${postSlug}'
  `);
};

export const addConfusedReactionToPost = (postSlug: string) => {
  return db.query(`
    UPDATE TABLE
      stats
    SET
      confused = confused + 1
    WHERE
      post_slug = '${postSlug}'
  `);
};

export const addInspiringReactionToPost = (postSlug: string) => {
  return db.query(`
    UPDATE TABLE
      stats
    SET
      inspiring = inspiring + 1
    WHERE
      post_slug = '${postSlug}'
  `);
};
