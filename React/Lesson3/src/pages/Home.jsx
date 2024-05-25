import Products from "../components/Products";

const Home = ({ setRoute }) => {
  return (
    <>
      <Products setRoute={setRoute} />
    </>
  );
};

export default Home;
