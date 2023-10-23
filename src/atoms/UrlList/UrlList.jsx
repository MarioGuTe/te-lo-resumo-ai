import PropTypes from "prop-types";
import UrlListItem from "../UrlListItem/UrlListItem";
import s from "./particle/style.module.css";

const UrlList = ({ articleList, onItemClick, onCopyIconClick, urlCopy }) => {
  return (
    <div className={s.list_section}>
      {articleList?.map((articleItem, index) => (
        <div
          key={`link-${index}`}
          onClick={(e) => {
            e.preventDefault();
            onItemClick(articleItem);
          }}
          className={s.list}
        >
          <UrlListItem
            articleUrl={articleItem.url}
            onCopyIconClick={onCopyIconClick}
            urlCopy={urlCopy}
          />
        </div>
      ))}
    </div>
  );
};

export default UrlList;

UrlList.propTypes = {
  articleList: PropTypes.array,
  onItemClick: PropTypes.func,
  onCopyIconClick: PropTypes.func,
  urlCopy: PropTypes.string,
};
