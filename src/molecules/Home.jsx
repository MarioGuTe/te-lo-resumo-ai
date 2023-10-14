import Header from "../atoms/Header/Header";
import Hero from "../atoms/Hero/Hero";
import SubmitArticle from "../atoms/SubmitArticle/SubmitArticle";
import SummarizedArticle from "../atoms/SummarizedArticle/SummarizedArticle";

const Home = () => {
  return (
    <div>
      This is the homepage
      <Header />
      <Hero />
      <SubmitArticle />
      <SummarizedArticle />
    </div>
  );
};

export default Home;
