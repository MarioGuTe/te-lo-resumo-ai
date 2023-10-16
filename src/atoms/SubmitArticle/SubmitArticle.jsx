import { useState } from "react";
import { linkIcon } from "../../assets";
import s from "./particle/style.module.css";

const SubmitArticle = () => {
  const [article, setArticle] = useState({
    url: "",
    summary: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    alert("submitted");
  };

  return (
    <section className={s.input_section}>
      <form onSubmit={handleSubmit}>
        <img src={linkIcon} alt="link_icon" />
        <input
          type="url"
          placeholder="ingresa una URL"
          onChange={(e) => setArticle({ ...article, url: e.target.value })}
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
