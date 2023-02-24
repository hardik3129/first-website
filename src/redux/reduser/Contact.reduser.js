const initialvalue = {
    ContactData : []
}

const Contactreduser = (state = initialvalue , action) => {
  if (action.type === 'ADDCONTACT') {
    state = {...state, ContactData : [...state.ContactData , action.payload]}
  }

  return state 
}

export default Contactreduser