import UrlListItem from "../UrlListItem/UrlListItem";

const UrlList = ({ articleList }) => {
  console.log(articleList, "este es");
  return (
    <div>
      {articleList?.map((articleItem, index) => (
        <div key={`link-${index}`}>
          <UrlListItem articleUrl={articleItem.url} />
        </div>
      ))}
    </div>
  );
};

export default UrlList;
