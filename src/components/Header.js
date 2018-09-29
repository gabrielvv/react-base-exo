/**
 * Objet Header
 *
 * styles/header.css
 *
 * <header class="Header">
 *    <a href="/" class="HeaderLink">Phones</a>
 *    <a href="/managePhone" class="HeaderLink">Ajout Phone</a>
 * </header>
 *
 * Classe active : HeaderActive
 *
 * Faire un tableau de routes et les mapper
 */

import React from 'react'
import { NavLink } from 'react-router-dom'

import '../styles/header.css'

const routes = [
  {
    url: '/',
    label: 'Phones'
  },
  {
    url: '/managePhone',
    label: 'Ajout Phone'
  }
]

const Links = routes.map(route => (
  <NavLink
    to={route.url} className="HeaderLink" activeClassName="HeaderActive" exact key={route.url}
  >{route.label}</NavLink>
))

const Header = () => (
  <header className="Header">{Links}</header>
)

export default Header
