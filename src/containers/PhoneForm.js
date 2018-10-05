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
 * 1. Gestion de l'affichage
 * - Utiliser le composant TextInput pour les champs de formulaire
 * - Récupérer le phone avec getPhonebyId au chargement s'il un id est fourni en url, sinon champs vides
 * - Si le phone n'a pas d'id (en création) ne pas afficher #0 dans le FormTitle
 * - Créer une méthode pour chaque onChange de champs
 *
 * 2. Soumission du formulaire
 * - Gérer les erreurs à la soumission du formulaire
 * - Gestion des erreurs fait appel à la fonction services/isPhoneError.js
 * - Quand le form est validé, le phone est sauvé, rediriger vers la page d'accueil
 */
