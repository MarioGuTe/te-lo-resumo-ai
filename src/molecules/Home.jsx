import { useState, useEffect } from "react";
import { useLazyGetSummaryQuery } from "../services/article";
import Header from "../atoms/Header/Header";
import Hero from "../atoms/Hero/Hero";
import SubmitArticle from "../atoms/SubmitArticle/SubmitArticle";
import SummarizedArticle from "../atoms/SummarizedArticle/SummarizedArticle";
import UrlList from "../atoms/UrlList/UrlList";
import s from "./particle/style.module.css";

const Home = () => {
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

  const onFormSubmit = async () => {
    const { data } = await getSummary({ articleUrl: article.url });

    if (data?.summary) {
      const newArticle = { ...article, summary: data.summary };
      const updatedArticleHistory = [newArticle, ...articleHistory];
      setArticle(newArticle);
      setArticleHistory(updatedArticleHistory);

      localStorage.setItem("articles", JSON.stringify(updatedArticleHistory));
    }
  };

  function onFormChange(props) {
    setArticle(props);
  }

  function updateArticleByList(articleSummary) {
    setArticle(articleSummary);
  }

  return (
    <main>
      <div className={s.gradient_container}>
        <div className={s.gradient} />
      </div>
      <div className={s.app}>
        <Header />
        <Hero />
        <SubmitArticle
          article={article}
          onFormChange={onFormChange}
          onFormSubmit={onFormSubmit}
        />
        <UrlList
          articleList={articleHistory}
          onItemClick={updateArticleByList}
        />
        <SummarizedArticle
          isFetching={isFetching}
          error={error}
          articleSummary={article.summary}
        />
      </div>
    </main>
  );
};

export default Home;
