/**
 * Objet Phones
 *
 * styles/phone.css
 *
 * <div class="PhoneList">
 *    <a href="#" class="PhoneLink">
 *      <Phone />
 *    </a>
 * </div>
 *
 * - Récupère la liste des phones au montage du componsant en state
 * - Affiche la liste de phones
 * - Chaque Phone doit comporter un lien vers /managePhone/:id
 */

import React from 'react'
import { Link } from 'react-router-dom'

import PhoneApi from '../services/phoneApi'
import Phone from '../components/Phone'
import '../styles/phone.css'

class Phones extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      phones: []
    }
  }

  componentDidMount() {
    PhoneApi.getAllPhones().then(phones => {
      this.setState({ phones })
    })
  }

  render() {
    const { phones = [] } = this.state

    const phoneList = phones.map(phone => (
      <Link to={`/managePhone/${phone.id}`} key={phone.id} className="PhoneLink">
        <Phone {...phone} />
      </Link>
    ))

    return <div className="PhoneList">{phoneList}</div>
  }
}

export default Phones
