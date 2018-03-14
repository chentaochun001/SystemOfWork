import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import('E:/MyWorks/html-learning/react/umi-react/umi-api/global.css');
import Layout from 'E:/MyWorks/html-learning/react/umi-react/umi-api/layouts/index.js';


let Router = DefaultRouter;


export default function() {
  return (
<Router history={window.g_history}>
  <Layout><Switch>
    <Route exact path="/404" component={() => React.createElement(require('C:/Users/Amy/AppData/Local/Yarn/config/global/node_modules/umi-build-dev/lib/Compiling.js').default, { route: '/404' })} />
    <Route exact path="/home" component={require('../home/page.jsx').default} />
    <Route exact path="/" component={require('../index.js').default} />
    <Route exact path="/list" component={() => React.createElement(require('C:/Users/Amy/AppData/Local/Yarn/config/global/node_modules/umi-build-dev/lib/Compiling.js').default, { route: '/list' })} />
    <Route component={require('E:/MyWorks/html-learning/react/umi-react/umi-api/pages/404.js').default} />
  </Switch></Layout>
</Router>
  );
}
