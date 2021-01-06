import { Router } from 'express';

import authConfig from './app/middlewares/authConfig';

import CreateUser from './app/services/CreateUser';
import Auth from './app/services/Auth';

const routes = Router();

routes.post('/users', CreateUser.store);
routes.post('/auth', Auth.authenticate);

routes.use(authConfig);

export default routes;
