import PropTypes from "prop-types";
import { copy, tick } from "../../assets";
import s from "./particle/style.module.css";

const UrlListItem = ({ articleUrl, onCopyIconClick, urlCopy }) => {
  return (
    <>
      <div className={s.copy_button}>
        <img
          src={urlCopy === articleUrl ? tick : copy}
          alt="copy_icon"
          onClick={(e) => {
            e.preventDefault();
            onCopyIconClick(articleUrl);
          }}
        />
      </div>
      <p className={s.list_text}>{articleUrl}</p>
    </>
  );
};

export default UrlListItem;

UrlListItem.propTypes = {
  articleUrl: PropTypes.string,
  onCopyIconClick: PropTypes.func,
  urlCopy: PropTypes.string,
};
