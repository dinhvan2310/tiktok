import { DefaultLayout } from 'components/Layout';
import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { publicRoutes, privateRoutes } from 'routes';

function App() {
  const routes = [...publicRoutes, ...privateRoutes].map((route) => {
    let Layout = DefaultLayout;
    if (route.layout === null) {
      Layout = React.Fragment;
    } else if (route.layout) {
      Layout = route.layout;
    }
    return {
      path: route.path,
      element: <Layout>{route.element}</Layout>,
    };
  });

  return (
    <div className="App">
      <RouterProvider router={createBrowserRouter(routes)}></RouterProvider>
    </div>
  );
}

export default App;
