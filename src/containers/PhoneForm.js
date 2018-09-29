/**
 * Objet ManagePhonePage
 *
 * styles/form.css
 *
 *
 * <section class="FormWrapper">
 *
 *    <h1 class="FormTitle">
 *      Phone #0
 *    </h1>
 *
 *    <form>
 *
 *      <TextInput className="TextInput" /> pour name
 *      <TextInput className="TextInput" /> pour price
 *
 *      <button class="Button" disabled="true">
 *        'Mettre à jour' ou 'Ajouter'
 *      </button>
 *    </form>
 * </section>
 *
 * - Utiliser le composant TextInput pour les champs de formulaire
 * - Récupérer le phone avec getPhonebyId au chargement s'il un id est fourni en url, sinon champs vides
 * - Si le phone n'a pas d'id (en création) ne pas afficher #0 dans le FormTitle
 * - Gestion des erreurs fait appel à la fonction services/isPhoneError.js
 * - Créer une méthode pour chaque onChange de champs
 * - Ajouter le phone si saisie valide avec savePhone de l'api
 * - Le bouton est disabled si le form n'est pas valide
 * - Quand le form est validé, rediriger vers la page d'accueil
 */

import React from 'react'
import { Redirect } from 'react-router'

import PhoneApi from '../services/phoneApi'
import isPhoneError from '../services/isPhoneError'
import TextInput from '../components/TextInput'

import '../styles/form.css'

const defaultState = {
  phone: { name: '', price: '', id: null },
  shouldRedirect: false,
  isInError: null,
  errors: {},
}

class ManagePhonePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = { ...defaultState, isInError: !props.id }
  }

  componentDidMount() {
    this.getPhone()
  }

  // getPhone en cas de changement de route entre update et création via menu
  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id === this.props.match.params.id) return
    this.getPhone()
  }

  getPhone() {
    const phoneId = this.props.match.params.id
    if (!phoneId) {
      this.setState({ ...defaultState, isInError: true })
      return
    }

    PhoneApi.getPhoneById(phoneId).then(phone => {
      this.setState({ phone, isInError: false })
    })
  }

  setPhoneNameState(event) {
    const { value } = event.target
    const { phone } = this.state
    this.setState({ phone: { ...phone, name: value } }, () => this.checkFormError())
  }

  setPhonePriceState(event) {
    const { value } = event.target
    const { phone } = this.state
    this.setState({ phone: { ...phone, price: value } }, () => this.checkFormError())
  }

  checkFormError() {
    const { phone } = this.state
    const errors = isPhoneError(phone)
    this.setState({
      errors,
      isInError: !!Object.keys(errors).length
    })
  }

  savePhone(event) {
    event.preventDefault()

    const { phone } = this.state
    PhoneApi.savePhone(phone).then(() => {
      this.setState({ shouldRedirect: true })
    })
  }

  render() {
    const { shouldRedirect, phone, errors, isInError } = this.state

    const nameField = {
      name: 'name',
      label: 'Nom',
      value: phone.name,
      onChange: e => this.setPhoneNameState(e),
      error: errors.name
    }

    const priceField = {
      name: 'price',
      label: 'Prix',
      value: phone.price,
      onChange: e => this.setPhonePriceState(e),
      error: errors.price
    }

    return shouldRedirect ? (
      <Redirect to="/" />
    ) : (
      <section className="FormWrapper">
        <h1 className="FormTitle">
          Phone {phone.id && '#'}{phone.id}
        </h1>
        <form>
          <TextInput
            { ...nameField }
            className="TextInput"
          />

          <TextInput
            { ...priceField }
            className="TextInput"
          />

          <button
            className="Button"
            onClick={e => this.savePhone(e)}
            disabled={isInError}
          >
            {phone.id ? 'Mettre à jour' : 'Ajouter' }
          </button>

        </form>
      </section>
    )
  }
}

export default ManagePhonePage
