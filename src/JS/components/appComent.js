import React from 'react';

const AddComent = ((props) => {

  const { addComent } = props;

  let textComent = '';
  let author ='';


  return (
    <div>
      <div>          
        <input
          className="enterText"
          type="text"
          placeholder="Автор коментария"
          onChange={e => {
              author = e.target.value;
            }}
        />
      </div>
      <div>
        <textarea
          className="enterText"
          type="text"
          rows="7"
          placeholder="Текст коментария"
          onChange={e => {
              textComent = e.target.value}
            }
        >          
        </textarea>
      </div>
      <button
        onClick={e => {
          addComent(author, textComent, e);
          document.querySelectorAll('.enterText').forEach((elem) => {
            elem.value = ''
          })
        }}
      >
          Опубликовать коментарий
      </button>
    </div>
  )
})

export default AddComent

