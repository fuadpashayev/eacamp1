import { useEffect, useState } from "react";
import Tab from "../components/Tab";
import Layout from "../layout/Layout";

const Home = ({ setRoute }) => {
  const [text, setText] = useState("initial value");

  console.log({ text });

  return (
    <Layout>
      <Tab options={["Home", "Profile", "Settings"]}>
        <div>Home Content</div>
        <div>Profile Content</div>
        <div>Settings Content</div>
      </Tab>

      <input
        id="test"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <input
        id="test"
        type="text"
        value={"user_text: " + text}
        onChange={(e) => setText(e.target.value)}
      />
    </Layout>
  );
};

export default Home;
