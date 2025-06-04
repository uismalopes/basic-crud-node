import { Comment } from "../database/entity/Comment";

class CommentModel {
  formatData(comment: Comment) {
    const { avatarUrl, description, name } = comment;
    return {
      avatarUrl,
      description,
      name
    }
  }
};

export default new CommentModel();