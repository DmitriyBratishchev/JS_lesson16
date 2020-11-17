

const coments = (state = [], action ) => {
  switch (action.type) {
    case 'ADD_COMENT':
      return [
        ...state,
        {
          id: action.id, 
          author: action.author, 
          textComent: action.textComent, 
          data: action.data, 
          display: true}
      ]

    case 'DEL_COMENT':
      return state.map(coment => {
        if (coment.id === action.id) {
          return {       
            id: coment.id, 
            author: coment.author, 
            textComent: coment.textComent, 
            data: coment.data, 
            display: false
          }
        }
        return coment;
      })

    default:
      return state;  
      
  }
}

export default coments;