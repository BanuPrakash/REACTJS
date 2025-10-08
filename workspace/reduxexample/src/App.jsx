import { connect } from "react-redux";

function App(props) {
  
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    let contact = {
      name: formData.get("name"),
      email: formData.get("email")
    }

    props.addContact(contact);
  }

  return (
    <>
     <form onSubmit={handleSubmit}>
      <input name="name" type="text" placeholder="Name" />
      <input name="email" type="email" placeholder="Email" />
      <button type="submit">Submit</button>
      <button type="button" onClick={props.clearContacts}>Clear All</button>
     </form>
     {
      props.contactList.map(contact => (
      <div key={contact.email}>
        <span>{contact.name} - {contact.email}</span>
        <button onClick={() => props.removeContact(contact.email)}>X</button>
      </div>))
      }
    </> )
}

function mapStateToProps(state) { 
  return {
      pic: state.profile.avatar, 
      displayName: state.profile.name,
      contactList: state.contacts 
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addContact: (contact) => dispatch({ type: 'ADD_CONTACT', payload: contact }),
    removeContact: (email) => dispatch({ type: 'REMOVE_CONTACT', payload: email }),
    clearContacts: () => dispatch({ type: 'CLEAR_CONTACTS' })
  } 
} 

export default connect(
  mapStateToProps ,
  mapDispatchToProps 
)(App)
