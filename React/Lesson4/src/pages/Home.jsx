import { useEffect, useState } from "react";
import Tab from "../components/Tab";
import Layout from "../layout/Layout";
import axios from "axios";

const Home = ({ setRoute }) => {
  const [text, setText] = useState("initial value");

  console.log({ text });

  useEffect(() => {
    (async () => {
      const env = "preprod";
      // const env = 'local';

      const token_preprod =
        "Bearer 891|BHcjedDv1afHt560Ao6MrTkKZRhHcSqK7n5P7M46"; // preprod
      const token_local = "Bearer 184|hZg4v7FhyMIxYmpyhfdO77ocoFl8dGZDIo6GPivm"; // local
      const headers = {
        Authorization: env === "preprod" ? token_preprod : token_local,
        "Content-Type": "application/json",
        "User-Agent": "PostmanRuntime/7.39.0",
        Accept: "*/*",
        "Cache-Control": "no-cache",
        "Postman-Token": "fcc52242-35fc-441b-a801-e95d7d23a277",
        Host: "preprod.epoint.az",
        "Accept-Encoding": "gzip, deflate, br",
        Connection: "keep-alive",
        "Content-Length": "1914",
      };

      const url_preprod = "https://preprod.epoint.az";
      const url_local = "https://epoint.test";

      const auth = await axios.post(
        (env === "preprod" ? url_preprod : url_local) +
          "/api/app/profile/asan-auth",
        {
          phone: "+994703487140",
          user_id: "060598",
          contract_id: env === "preprod" ? "1135" : "52",
        },
        { headers }
      );

      const { certificate, challenge, transactionId } = auth.data.data;

      const authCheck = await axios.post(
        url_preprod + "/api/app/profile/asan-check-auth",
        {
          certificate,
          challenge,
          transactionId,
          id: 1135,
        },
        { headers }
      );

      console.log({ auth, authCheck });
    })();
  }, []);

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
