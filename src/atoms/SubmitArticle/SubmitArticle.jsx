import PropTypes from "prop-types";
import { linkIcon } from "../../assets";
import s from "./particle/style.module.css";

const SubmitArticle = ({ onFormSubmit, article, onFormChange }) => {
  return (
    <section className={s.input_section}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onFormSubmit();
        }}
      >
        <img src={linkIcon} alt="link_icon" />
        <input
          type="url"
          placeholder="Ingresa una URL"
          onChange={(e) => onFormChange({ ...article, url: e.target.value })}
          onClick={(e) => e.target.select()}
          value={article.url}
          required
        />
        <button type="submit" className={s.submit_button}>
          <p>↵</p>
        </button>
      </form>
    </section>
  );
};

export default SubmitArticle;

SubmitArticle.propTypes = {
  onFormSubmit: PropTypes.func,
  onFormChange: PropTypes.func,
  article: PropTypes.any,
};
