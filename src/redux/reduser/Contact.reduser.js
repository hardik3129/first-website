const initialvalue = {
    ContactData : []
}

const Contactreduser = (state = initialvalue , action) => {
  if (action?.type === 'ADDCONTACT') {
    state = {...state, ContactData : [...state.ContactData , action.payload]}
  }
  
  if (action?.type === 'DELETECONTATC') {
    const filter = state.ContactData.filter((i) => i.id !== action.payload)
    state = {...state, ContactData : filter}
  }

  if (action?.type === 'EDITCONTACT') {
    const filter = state.ContactData.map((i) => {
      if (i.id == action.payload.id) {
        i = action.payload
      }
      return i
    })
    state = {...state, ContactData : filter}
  }
  return state 
}
export default Contactreduser