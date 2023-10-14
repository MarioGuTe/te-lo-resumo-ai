import Header from "../atoms/Header/Header";
import Hero from "../atoms/Hero/Hero";
import SubmitArticle from "../atoms/SubmitArticle/SubmitArticle";
import SummarizedArticle from "../atoms/SummarizedArticle/SummarizedArticle";
import s from "./particle/style.module.css";

const Home = () => {
  return (
    <main>
      <div className={s.gradient_container}>
        <div className={s.gradient} />
      </div>
      <div className={s.app}>
        <Header />
        <Hero />
        <SubmitArticle />
        <SummarizedArticle />
      </div>
    </main>
  );
};

export default Home;
