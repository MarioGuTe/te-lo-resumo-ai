// import { logo } from "../../assets/";
import spinner from "../../assets/purple-spinner.png";
import s from "./particle/style.module.css";

const Header = () => {
  return (
    <header>
      <div className={s.logo_container}>
        <img src={spinner} alt="logo" />
        <ul>
          <li className={s.list_text}>SINTESIS</li>
        </ul>
      </div>
      <button>Github</button>
    </header>
  );
};

export default Header;
