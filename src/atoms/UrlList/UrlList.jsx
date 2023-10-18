import PropTypes from "prop-types";
import UrlListItem from "../UrlListItem/UrlListItem";
import s from "./particle/style.module.css";

const UrlList = ({ articleList }) => {
  console.log(articleList, "este es");
  return (
    <div className={s.list_section}>
      {articleList?.map((articleItem, index) => (
        <div key={`link-${index}`} className={s.list}>
          <UrlListItem articleUrl={articleItem.url} />
        </div>
      ))}
    </div>
  );
};

export default UrlList;

UrlList.propTypes = {
  articleList: PropTypes.array,
};
