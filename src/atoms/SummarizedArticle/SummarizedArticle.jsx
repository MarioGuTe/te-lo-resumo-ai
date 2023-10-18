import { loader } from "../../assets";
import s from "./particle/style.module.css";

import PropTypes from "prop-types";

const SummarizedArticle = ({ isFetching, articleSummary, error }) => {
  return (
    <section className={s.summarized_section}>
      {isFetching ? (
        <img src={loader} alt="loader" />
      ) : error ? (
        <p>
          Well, that wasn supposed to happen...
          <br />
          <span></span>
        </p>
      ) : (
        articleSummary && (
          <div>
            <h2>
              Article <span>Summary</span>
            </h2>
            <div>
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
  error: PropTypes.any,
};
