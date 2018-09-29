/**
 * Objet Phone
 * { name, price }
 *
 * styles/phone.css
 *
 * <article class="Phone">
 *    <div> ? </div>
 *    <div> ? &euro;</div>
 * </article>
 */

import React from 'react'
import PropTypes from 'prop-types'
import '../styles/phone.css'

const Phone = ({name, price}) => (
  <article className="Phone">
    <div>{name}</div>
    <div>{price}&euro;</div>
  </article>
)

Phone.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
}

export default Phone
