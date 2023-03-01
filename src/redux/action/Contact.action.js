export const Contactaction = (data) => {
  return {
    type: 'ADDCONTACT',
    payload: data
  }
}

export const DeleteContactData = (id) => {
  return{
    type : 'DELETECONTATC',
    payload : id
  }
}

export const editCotact = (data) => {
  return {
    type : 'EDITCONTACT',
    payload : data
  }
}