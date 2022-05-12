import "./styles.css";

export const PostCard = ({ id, post, title, cover, body }) => {
  return (
    <div className="post">
      <img className="post-image" src={cover} alt={title} />
      <div className="post-content">
        <h1 className="post-title">
          {title.length > 20 ? title.slice(0, 20) + "..." : title}
        </h1>
        <p>{body.slice(0, 100)}...</p>
      </div>
    </div>
  );
};
