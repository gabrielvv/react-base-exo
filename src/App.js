/**
 * Composant App
 * <Router>
 *    <main class="mainPage">
 *      . header
 *      . route cible
 *        - route vers Phones
 *        - route vers PhoneForm en création (sans id) : /managePhone
 *        - route vers PhoneForm en modification (avec id) : /managePhone/:id
 *        - autre route vers PageNotFound
 *    </main>
 * </Router>
 */

import React from 'react'

class App extends React.Component {
  render () {
    return <div>Hello</div>
  }
}

export default App
