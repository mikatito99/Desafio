import React from 'react';
import s from './doados.module.scss'; 


const livros = [
  {
    titulo: "Dracula",
    genero: "Terror",
    autor: "Bram Stoker",
    capa: "https://m.media-amazon.com/images/I/81kotNTvCJL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    titulo: "Lady Killers",
    genero: "True Crime",
    autor: "Tori Telfer",
    capa: "https://darkside.vtexassets.com/arquivos/ids/169695/251-lady-killers-2.jpg?v=637024569308830000"
  },
  {
    titulo: "A Culpa é Das Estrelas",
    genero: "Drama",
    autor: "john green",
    capa: "https://http2.mlstatic.com/D_NQ_NP_659517-MLU74221499187_012024-O.webp"
  },
  {
    titulo: "A Biblioteca Da Meia Noite",
    genero: "Ficção Cientifica",
    autor: "Matt Haig",
    capa: "https://images-americanas.b2w.io/produtos/01/00/img3/38853570/9/3885357006_4GG.jpg"
  },
  {
    titulo: "O Cavaleiro Andante ",
    genero: "Alta Fantasia",
    autor: "George R.R Martin",
    capa: "https://m.media-amazon.com/images/I/71qNz6f+aYL._AC_UF1000,1000_QL80_.jpg"
  }
];

const doados = () => {
  return (
    <div className={s.container}>
      <h2>Livros Doados</h2>
      <div className={s.listaLivros}>
      
        {livros.map((livro, index) => (
          <div key={index} className={s.livroCard}>
            <img src={livro.capa} alt={livro.titulo} className={s.imagemLivro} />
            <h3>{livro.titulo}</h3>
            <p><strong>Gênero:</strong> {livro.genero}</p>
            <p><strong>Autor:</strong> {livro.autor}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default doados;