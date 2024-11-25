import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import lupa from '../../assets/lupa.png';
import banner from '../../assets/banner.png'
import s from './header.module.scss';
import Inicio from '../../pages/inicio/inicio';
import Doados from '../../pages/doados/doados';
import QueroDoar from '../../pages/querodoar/querodoar';



export default function Header() {
  return (
    <BrowserRouter>
      <header className={s.header}>
        
        <section className={s.logoHeader}>
          <img
            src={logo}
            alt="Imagem de ilustração de livro aberto com capa azul"
          />
          <h1>Livros Vai na Web</h1>
        </section>
        <nav className={s.navHeader}>
          <ul>
            <li>
              <Link className={s.link} to="/inicio">
                Início
              </Link>
            </li>
            <li>
              <Link className={s.link} to="/doados">
                Livros Doados
              </Link>
            </li>
            <li>
              <Link className={s.link} to="/querodoar">
                Quero Doar
              </Link>
            </li>
          </ul>
        </nav>

        <section className={s.barraDeBusca}>
          <input
            type="search"
            name=""
            id=""
            placeholder="O que você procura?"
          />
          <button>
            <img src={lupa} alt="Icone de lupa branca" />
          </button>
        </section>


            
      </header>
      <Routes>
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/doados" element={<Doados />} />
        <Route path="/querodoar" element={<QueroDoar />} />
      </Routes>
    </BrowserRouter>
  );
}