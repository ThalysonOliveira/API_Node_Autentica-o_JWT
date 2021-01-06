import { Router } from 'express';

import CreateUser from './app/services/CreateUser';
import Auth from './app/services/Auth';

const routes = Router();

routes.post('/users', CreateUser.store);
routes.post('/auth', Auth.authenticate);

export default routes;
