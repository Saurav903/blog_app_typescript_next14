import { AppRouteHandlerFnContext, handleLogin } from '@auth0/nextjs-auth0';
import { NextRequest } from 'next/server';


const signupHandler = (req: NextRequest, res: AppRouteHandlerFnContext) =>
  handleLogin(req, res, {
    authorizationParams: {
      screen_hint: 'signup',
    },
  });

export default signupHandler;