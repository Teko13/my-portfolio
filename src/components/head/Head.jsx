import { SiAboutdotme } from "react-icons/si";
import { MdDesignServices } from "react-icons/md";
import { BsViewList } from "react-icons/bs";
import { MdOutlineContactPage } from "react-icons/md";
import "./head.css";
import LOGO_IMG_TEXT_BLEU from "../../assets/logo_img_text_bleu.svg";
import LOGO_IMG_BLEU from "../../assets/logo_img_bleu.svg";

const Head = () => {


    return (
        <header className='container head-container'>
            <nav className='head__nav'>
                <a href="http://metapressnet.com">
                    <span className="nav-logo largescreen">
                        <img src={LOGO_IMG_TEXT_BLEU} alt="Logo metapress" />
                    </span>
                    <span className="nav-logo smallscreen">
                        <img src={LOGO_IMG_BLEU} alt="Logo metapress" />
                    </span>
                </a>
                <div className="nav__links">
                    <ul className="nav__list">
                        <li><a href="#about"><span className='head-text'>Moi</span> <SiAboutdotme className='head-icon' /></a></li>
                        <li><a href="#competences"><span className="head-text">Compétence</span> <MdDesignServices className='head-icon' /></a></li>
                        <li><a href="#portfolio"><span className="head-text">Portfolio</span> <BsViewList className='head-icon' /></a></li>
                        <li><a href="#contact"><span className="head-text">Contact</span> <MdOutlineContactPage className='head-icon' /></a></li>
                    </ul>
                </div>
            </nav>
            {/* <div className='abs'>{current}, {height}, {document.documentElement.clientHeight} </div> */}
        </header>
    );
};

export default Head;
