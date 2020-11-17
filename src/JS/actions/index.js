let nextComent = () => {
  if(!localStorage.comentsList){
    return 1;
  } else {
    return JSON.parse(localStorage.comentsList).length;
  }
}

export const addComent = (author, textComent) => {

  let newData= new Date();
  let data = newData.toLocaleString("ru");

  return {
    type: 'ADD_COMENT',  
    id: nextComent(),
    author,   
    textComent,  
    data,
  }
}

export const delComent = (id) => {
  return {
    type: 'DEL_COMENT',
    id,
  }
}