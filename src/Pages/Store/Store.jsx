import useStore from "../../CustomHooks/useStore";

const Store = () => {
  const { store } = useStore();
  return (
    <div>
      <h1>Total Stores {store?.data?.length}</h1>
    </div>
  );
};

export default Store;
