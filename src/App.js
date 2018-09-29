/**
 * Composant App
 * <Router>
 *    <main class="mainPage">
 *      . header
 *      . route cible
 *        - route vers Phones
 *        - route vers PhoneForm en création
 *        - route vers PhoneForm en modification
 *        - autre route vers PageNotFound
 *    </main>
 * </Router>
 */
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Phones from './containers/Phones'
import PhoneForm from './containers/PhoneForm'
import Header from './components/Header'
import PageNotFound from './components/PageNotFound'

import './styles/main.css'

const App = () => (
  <Router>
    <main className="mainPage">
      <Header />
      <Switch>
        <Route path="/" component={Phones} exact />
        <Route path="/managePhone" component={PhoneForm} exact />
        <Route path="/managePhone/:id" component={PhoneForm} />
        <Route component={PageNotFound} />
      </Switch>
    </main>
  </Router>
)

export default App
