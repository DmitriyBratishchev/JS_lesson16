import React from 'react';

const ListComponents = (props) => {

  const { coments }= props;
  const { delComent } = props;

localStorage.removeItem('comentsList')
localStorage.setItem('comentsList', JSON.stringify(coments))
  return (
    <div>
      <h1>Коментарии</h1>

      <ul>   
        {
          coments.map( (coment) => {
            const className = coment.display ? '' : 'displai_none';

            return(
              <li 
                key={coment.id}
                className={className}
              >
                <div>
                  <span>
                    {coment.author}
                  </span>
                  <span
                    className="data"
                  >
                    {coment.data}
                  </span>
                </div>
                <div>
                  {coment.textComent}
                </div>
                <button onClick={e => delComent(coment.id, e)}>
                  Удалить коментарий
                </button>
                <hr></hr>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default ListComponents;