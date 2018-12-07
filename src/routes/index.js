import LandingPage from '../views/Landingpage';
import Post from '../views/Post';

const indexRoutes = [
  {
    path: '/',
    name: 'Landing Page',
    component: LandingPage,
  },
  {
    path: '/post',
    name: 'Get Posts',
    component: Post,
  },
];

export default indexRoutes;
