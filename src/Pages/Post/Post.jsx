import { useParams } from "react-router";

const Post = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <div>
      <h1>This is Post Page{id}</h1>
    </div>
  );
};

export default Post;
