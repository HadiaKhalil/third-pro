import Section from "./threesection";
import Hero from "./Hero";
import Three from "./Cards"
import Layout from "@/components/Layout"
import Pic from "./Pic";
import Othercards from "./Othercards";
import Sec from "./Sec";

const Home = () => {
  return (
    <Layout>
      <Hero />
      <Sec />
       <Pic />
      <Othercards />
     
   <Section />
  <Three />
    </Layout>
  );
};

export default Home;
