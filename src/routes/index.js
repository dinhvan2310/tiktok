import Home from 'pages/Home';
import Following from 'pages/Following';
import Profile from 'pages/Profile';
import Upload from 'pages/Upload';
import { DefaultLayout } from '../components/Layout';

const publicRoutes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/following',
    element: <Following />,
  },
  {
    path: '/profile',
    element: <Profile />,
  },
  {
    path: '/upload',
    element: <Upload />,
    layout: null,
  },
];

const privateRoutes = [];
export { publicRoutes, privateRoutes };
