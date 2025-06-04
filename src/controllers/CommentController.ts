import { Request, Response } from "express";
import { AppDataSource } from "../database";
import { Comment } from "../database/entity/Comment";
import { CommentModel } from "../models";

const repository = AppDataSource.getRepository(Comment);

class CommentController {
  async getAll(req: Request, res: Response) {
    try {
      const comments = await repository.find();
      res.send(comments);
    } catch {
      res.status(500).send('Internal error');
    }
  }

  async get(req: Request<{ id: string }>, res: Response) {
    try {
      const { id } = req.params;
      const comment = await repository.findOneBy({ id: Number(id) });
      res.send(comment);
    } catch {
      res.status(500).send('Internal error');
    }
  }

  async post(req: Request, res: Response) {
    try {
      const newComment = CommentModel.formatData(req.body);
      const comment = await repository.save(newComment);
      res.status(201).send(comment);
    } catch (error){
      res.status(500).send('Internal error');
    }
  }

  async patch(req: Request<{ id: string }>, res: Response) {
    try {
      const { id } = req.params;
      const comment = await repository.findOneBy({ id: Number(id) });

      if (!comment) {
        res.status(404).send('Comment not found');
        return;
      }

      const newComment = CommentModel.formatData(req.body);
      await repository.update(id, newComment);
      res.status(204).send();
    } catch {
      res.status(500).send('Internal error');
    }
  }

  async delete(req: Request<{ id: string }>, res: Response) {
    try {
      const { id } = req.params;
      await repository.delete(Number(id));
      res.status(204).send();
    } catch {
      res.status(500).send('Internal error');
    }
  }
}

export default new CommentController();
