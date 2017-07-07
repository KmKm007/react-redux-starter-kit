import { applyMiddleware, createStore } from 'redux'
import { createLogger } from 'redux-logger'
import reducers from '@reducers'
import thunk from 'redux-thunk'

const middleware = [ thunk ]

if (process.env.NODE_ENV === 'development') {
  middleware.push(createLogger())
}

const store = createStore(reducers,
  window.devToolsExtension && window.devToolsExtension(),
  applyMiddleware(...middleware))

export default store
