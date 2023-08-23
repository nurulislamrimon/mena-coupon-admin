import { useParams } from "react-router";

const DynamicStore = () => {
  const { id } = useParams();
  return <div>Dynamic Store {id}</div>;
};

export default DynamicStore;
