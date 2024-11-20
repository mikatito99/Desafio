import s from "./footer.module.scss";
import icon6 from '../../assets/icon6.png'; 
import icon7 from '../../assets/icon7.png';
import icon8 from '../../assets/icon8.png';
import icon9 from '../../assets/icon9.png'

export default function Footer() {
  return (
    <>
      <footer className={s.footer}>
        <p className={s.infoFooter}>4002-8922</p>
        <section className={s.iconsSection}>
         
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={s.icons} >
          <i className="fab fa-facebook fa-2x"></i>
        </a>
   
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={s.icons}
        >
          <i className="fab fa-twitter fa-2x"></i>
        </a>
         
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className={s.icons}>
          <i className="fab fa-youtube fa-2x"></i>
        </a>
         
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={s.icons} >
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
          
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={s.icons} >
          <i className="fab fa-instagram fa-2x" ></i>
        </a>
        </section>
      </footer>
    </>
  );
}