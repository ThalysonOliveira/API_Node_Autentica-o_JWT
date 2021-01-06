import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import bcrypt from 'bcryptjs';

import User from '../entities/User';

class Auth {
  async store(req: Request, res: Response) {
    const repository = await getRepository(User);
    const { email, password } = req.body;

    const user = await repository.findOne({ where: { email } });
    if (!user) {
      return res.sendStatus(401);
    }

    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      return res.sendStatus(401);
    }
  }
}

export default new Auth();
