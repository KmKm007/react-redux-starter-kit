import React from 'react'
import Bundle from './bundle'

const createBundleRoute = BundlePage => props => {
  return (
    <Bundle load={BundlePage}>
      {Page => <Page {...props}/>}
    </Bundle>
  )
}

const HomeRoute = createBundleRoute(require('bundle-loader?lazy&name=home!@pages/Home'))

const CounterRoute = createBundleRoute(require('bundle-loader?lazy&name=counter!@pages/Counter'))

export {
  HomeRoute,
  CounterRoute
}
