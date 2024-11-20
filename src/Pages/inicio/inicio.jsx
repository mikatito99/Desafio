import React from 'react';
import icon1 from '../../assets/icon1.png'; 
import icon2 from '../../assets/icon2.png';
 import icon3 from '../../assets/icon3.png'; 
 import icon4 from '../../assets/icon4.png'
import banner from '../../assets/banner.png';
import s from './inicio.module.scss'; 



export default function Inicio() {
  return (
    <div>
      <section className={s.banner}>
        <img src={banner} alt="Banner de doações" className={s.imagemBanner} />
        <h1 className={s.bannerText}>VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO</h1>
      </section>

      <section className={s.whyDonate}>
        <h2>Por que devo doar?</h2>
        <div className={s.reasons}>
          <div className={s.reason}>
            <img src={icon1} alt="Ícone 1" className={s.icon} />
            <p>Oferece livros a quem não tem acesso, ajudando a reduzir a exclusão social.</p>
          </div>
          <div className={s.reason}>
            <img src={icon2} alt="Ícone 2" className={s.icon} />
            <p>Estimula o hábito da leitura e o aprendizado contínuo.</p>
          </div>
          <div className={s.reason}>
            <img src={icon3} alt="Ícone 3" className={s.icon} />
            <p>Fornece conhecimento e inspiração, permitindo que indivíduos transformem suas vidas.</p>
          </div>
          <div className={s.reason}>
            <img src={icon4} alt="Ícone 4" className={s.icon} />
            <p>Garante que todos, independentemente de sua condição, tenham oportunidades de aprendizado.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
