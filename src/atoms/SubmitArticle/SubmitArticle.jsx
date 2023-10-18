import { useEffect, useState } from "react";
import { linkIcon } from "../../assets";
import { useLazyGetSummaryQuery } from "../../services/article";
import UrlList from "../UrlList/UrlList";
import SummarizedArticle from "../SummarizedArticle/SummarizedArticle";
import s from "./particle/style.module.css";

const SubmitArticle = () => {
  const [article, setArticle] = useState({
    url: "",
    summary: "",
  });

  const [articleHistory, setArticleHistory] = useState([]);

  const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery();

  useEffect(() => {
    const articlesFromLocalStorage = JSON.parse(
      localStorage.getItem("articles")
    );

    if (articlesFromLocalStorage.length > 0) {
      setArticleHistory(articlesFromLocalStorage);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await getSummary({ articleUrl: article.url });

    if (data?.summary) {
      const newArticle = { ...article, summary: data.summary };
      const updatedArticleHistory = [newArticle, ...articleHistory];
      setArticle(newArticle);
      setArticleHistory(updatedArticleHistory);

      localStorage.setItem("articles", JSON.stringify(updatedArticleHistory));
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
      <UrlList articleList={articleHistory} />
      <div>
        <SummarizedArticle
          isFetching={isFetching}
          error={error}
          articleSummary={article.summary}
        />
      </div>
    </section>
  );
};

export default SubmitArticle;
