import React, { FunctionComponent } from 'react'
import { BrowserRouter } from 'react-router-dom'
import routes from './routes'

const App: FunctionComponent = () => {
  return (
    <BrowserRouter>
      {routes}
    </BrowserRouter>
  )
}

export default App
