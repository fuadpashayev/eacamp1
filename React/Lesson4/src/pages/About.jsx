import Tab from "../components/Tab";
import Layout from "../layout/Layout";

const About = () => {
  return (
    <Layout>
      <h1>About page content</h1>

      <Tab options={["About us", "Contact us", "Blog"]}>
        <div>about us Content</div>
        <div>contact us Content</div>
        <div>blog Content</div>
      </Tab>
    </Layout>
  );
};

export default About;
