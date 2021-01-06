import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import User from '../entities/User';

class CreateUser {
  async store(req: Request, res: Response) {
    const repository = await getRepository(User);
    const { email, password } = req.body;

    const userExist = await repository.findOne({ where: { email } });
    if (userExist) {
      return res.sendStatus(409);
    }

    const user = await repository.create({ email, password });
    await repository.save(user);

    return res.json(user);
  }
}

export default new CreateUser();
