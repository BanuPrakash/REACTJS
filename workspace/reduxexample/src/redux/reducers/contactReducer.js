export default function contactReducer(state = [], action) {
  switch(action.type) {
    case 'ADD_CONTACT':
    // state.push(action.payload); // not change original state  
    // clone state and add payload to the clone and return
      return  [...state, action.payload]; 
    case 'REMOVE_CONTACT':
        return state.filter(contact => contact.email !== action.payload)
    case 'CLEAR_CONTACTS':
        return [];
    default:
      return state;
  }
}