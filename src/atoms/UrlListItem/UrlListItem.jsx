import PropTypes from "prop-types";
import { copy } from "../../assets";
import s from "./particle/style.module.css";

const UrlListItem = ({ articleUrl }) => {
  return (
    <>
      <div className={s.copy_button}>
        <img src={copy} alt="copy_icon" />
      </div>
      <p className={s.list_text}>{articleUrl}</p>
    </>
  );
};

export default UrlListItem;

UrlListItem.propTypes = {
  articleUrl: PropTypes.string,
};
