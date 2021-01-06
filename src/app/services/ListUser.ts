import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import User from '../entities/User';

class ListUser {
  async index(req:Request, res:Response) {
    const repository = await getRepository(User);

    const user = await repository.find();

    return res.json(user);
  }
}

export default new ListUser();
