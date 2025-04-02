import React from 'react';
import s from './QueroDoar.module.scss';
import { useState } from 'react';
import axios from 'axios';
import livro from '../../assets/vector.png'

export default function QueroDoar() {
  const [titulo, setTitulo] = useState("");
  const [categoria, setCategoria] = useState("");
  const [autor, setAutor] = useState("");
  const [imagem_url, setImagem_url] = useState("");

  const enviarDados = async () => {
    const urlApi = "https://apilivros-xq63.onrender.com/doar";
    const dadosEnviar = { titulo, categoria, autor, imagem_url };

    try {
      await axios.post(urlApi, dadosEnviar);
      alert("Livro cadastrado!!");
      setTitulo("");
      setCategoria("");
      setAutor("");
      setImagem_url("");
    } catch (error) {
      alert("Erro ao cadastrar livro");
      console.error(error);
    }
  };

  const capturaTitulo = (e) => setTitulo(e.target.value);
  const capturaCategoria = (e) => setCategoria(e.target.value);
  const capturaAutor = (e) => setAutor(e.target.value);
  const capturaImagem = (e) => setImagem_url(e.target.value);

  return (
    <section className={s.principal}>
      <section className={s.container}>
        <h2>Por favor, preencha o formulário com suas informações e as informações do Livro</h2>
        <form onSubmit={(e) => { e.preventDefault(); enviarDados(); }}>
          <div>
            <img src={livro} alt="Ícone de livro" /> {/* IMAGEM CORRIGIDA */}
            <h3>Informações do Livro</h3>
          </div>
          <input type="text" placeholder='Titulo' onChange={capturaTitulo} value={titulo} required />
          <input type="text" placeholder='Categoria' onChange={capturaCategoria} value={categoria} required />
          <input type="text" placeholder='Autor' onChange={capturaAutor} value={autor} required />
          <input type="text" placeholder='Link da Imagem' onChange={capturaImagem} value={imagem_url} />
          <input className={s.doar} type="submit" value="Doar" />
        </form>
      </section>
    </section>
  );
}
