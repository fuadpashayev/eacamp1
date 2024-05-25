import React from "react";
// import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <img
          src="https://first-react-project-gilt.vercel.app/assets/footerIcon-PUYEE3Zb.svg"
          alt="logo"
          height={50}
          width={50}
        />
        <div className="footer-column">
          <h3>Want to recieve our awesome stories?</h3>
          <input type="text" placeholder="Your email" />
          <button>Subscribe</button>
          <p>info@test.com, All rights reserved.</p>
        </div>
        <div className="footer-links">
          <ul>
            <li>Email: </li>
            <li>
              <a href="mailto:info@test.com">info@test.com</a>
            </li>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">How it works</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <div className="footer-links">
            <ul>
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">FAQs</a>
              </li>
              <li>
                <a href="#">Lead generation</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-column">
          <div className="footer-links">
            <ul>
              <li>
                <a href="#">Customer engagement</a>
              </li>
              <li>
                <a href="#">Customer support</a>
              </li>
              <li>
                <a href="#">Help Center Articles</a>
              </li>
              <li>
                <a href="#">Outbound Messages</a>
              </li>
            </ul>
            <img src="../foto.png" alt="logo" width={150} />
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
