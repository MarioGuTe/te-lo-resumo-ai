import { useState } from "react";
import { linkIcon } from "../../assets";
import { useLazyGetSummaryQuery } from "../../services/article";
import s from "./particle/style.module.css";

const SubmitArticle = () => {
  const [article, setArticle] = useState({
    url: "",
    summary: "",
  });

  const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await getSummary({ articleUrl: article.url });

    if (data?.summary) {
      const newArticle = { ...article, summary: data.summary };
      setArticle(newArticle);
      console.log(newArticle);
    }
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
