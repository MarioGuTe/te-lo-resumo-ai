import PropTypes from "prop-types";
import { loader } from "../../assets";
import s from "./particle/style.module.css";

const SummarizedArticle = ({ isFetching, articleSummary, error }) => {
  return (
    <section className={s.summarized_section}>
      {isFetching ? (
        <img src={loader} alt="loader" />
      ) : error ? (
        <p className={s.error_text}>
          Well, that wasn supposed to happen...
          <br />
          <span>{error?.data?.error}</span>
        </p>
      ) : (
        articleSummary && (
          <div className={s.summarized_text_container}>
            <h2>
              <span>Artículo Sintetizado</span>
            </h2>
            <div className={s.summary_box}>
              <p>{articleSummary}</p>
            </div>
          </div>
        )
      )}
    </section>
  );
};

export default SummarizedArticle;

SummarizedArticle.propTypes = {
  articleSummary: PropTypes.string,
  isFetching: PropTypes.bool,
  error: PropTypes.object,
};
