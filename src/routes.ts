import { Router } from 'express';

import CreateUser from './app/services/CreateUser';

const routes = Router();

routes.post('/users', CreateUser.store);

export default routes;
