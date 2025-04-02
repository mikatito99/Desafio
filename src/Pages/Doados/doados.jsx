import React from 'react';
import s from './doados.module.scss'; 
import axios from 'axios';
import livro from '../../assets/livro.png';
import { useState ,useEffect} from 'react';


export default function doados() {  
  const [lvros, setLivros] = useState([[]]);
  
  const getLivros = async () => {
    const response = await axios.get("https://apilivros-xq63.onrender.com/livros");
    setLivros(response.data);
  };

  useEffect(() => {
    getLivros();
  }, []);

  return (
    <section>
      <h2>livros doados</h2>
      
      <div className={s.boxcard}>
        <article>
          <img src={livro} alt=""/>
          <h3>protagonista</h3>
          <p>susane</p>
          <p>Autor</p>
        </article>

        {lvros.map((item) => (
          <article>
            <img src={item.imagem_url} alt=""/>
            <h3>{item.titulo}</h3>
            <p>{item.categoria}</p>
            <p>{item.autor}</p>
          </article>
        ))}
      </div>
    </section>
  );
}