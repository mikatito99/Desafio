import React from 'react';
import s from './queroDoar.module.scss';

export default function queroDoar() {  
  return (
    <div className={s.container}>
      <h2>
        Por favor, preencha o formulário com suas informações e as informações do Livro
      </h2>
      <form className={s.form}>
        <div className={s.iconTitle}>
          <i className="fas fa-book"></i>
          <h3>Informações do Livro</h3>
        </div>
        <input type="text" placeholder="Título" required />
        <input type="text" placeholder="Categoria" required />
        <input type="text" placeholder="Autor" required />
        <input type="url" placeholder="Link da imagem da capa" />
        <button type="submit">Doar</button>
      </form>
    </div>
  )
}
