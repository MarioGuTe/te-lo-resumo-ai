import { linkIcon } from "../../assets";
import s from "./particle/style.module.css";

const SubmitArticle = () => {
  return (
    <section className={s.input_section}>
      <form action="">
        <img src={linkIcon} alt="link_icon" />
        <input type="url" placeholder="ingresa una URL" value="" required />
      </form>
    </section>
  );
};

export default SubmitArticle;
