import { NextPage, GetStaticProps } from "next";
import { Layout } from "../components/layouts";

const HomePage: NextPage = (props) => {
  return (
    <Layout title="Listado de pokemons">
      <ul></ul>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  return {
    props: {},
  };
};

export default HomePage;
