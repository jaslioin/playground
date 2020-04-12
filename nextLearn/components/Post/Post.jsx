import PropTypes from "prop-types";
import ReactMarkdown from "react-markdown";

function Post({ contentfulEntry }) {
  return (
    <div className="container">
      <div className="text">
        <h1>{contentfulEntry.title}</h1>
      </div>
      <ReactMarkdown source={contentfulEntry.body} />
    </div>
  );
}
Post.propTypes = {
  title: PropTypes.string,
};
export default Post;
