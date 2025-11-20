import React from "react";
import Layout from "./components/Layout";
import PokemonList from "./components/PokemonList";

const App: React.FC = () => {
  return (
    <Layout>
      <PokemonList />
    </Layout>
  );
};

export default App;
