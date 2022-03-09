import React, { Component, Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import Loading from '@/components/Loading';
import ErrorBoundary from '@/components/ErrorBoundary';

// lazy load
const lazyLoad = (path) =>
  lazy(() => {
    return new Promise((resolve) => setTimeout(resolve, 1 * 1000))
      .then(() => import(`@/views/${path}`))
      .catch(() => import('@/components/Error'));
  });

const Home = lazyLoad('Home');
const Test = lazyLoad('Test');

// @withRouter
class Routes extends Component {
  render() {
    return (
      <ErrorBoundary>
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/test' component={Test} />

            <Route render={() => <h1>404</h1>} />
          </Switch>
        </Suspense>
      </ErrorBoundary>
    );
  }
}

export default Routes;
