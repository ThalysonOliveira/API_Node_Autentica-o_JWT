import { Request, Response } from 'express';

class CreateUser {
  async store(req: Request, res: Response) {
    return res.json({ ok: true });
  }
}

export default new CreateUser();
