
import "./style.css";
const Footer = () => {
  return (
    <footer>
      <a
        href="https://www.youtube.com/channel/UCVeruNKGW7nRL-h_O1hwy9w"
        target="_blank"
        rel="thhh"
      >
        <img
          src={`${process.env.PUBLIC_URL}/youtube.jpg`}
          alt="Youtube-icon"
          
        />
      </a>
      <a href="https://www.facebook.com/ayesiza" target="_blank"
      
      >
        <img
          src={`${process.env.PUBLIC_URL}/facebook.png`}
          alt="facebook-icon"
          
        />
      </a>
      <a
        href="https://www.linkedin.com/in/ayesiza-hawah-339700185/"
        target="_blank"
        
      >
        <img
          src={`${process.env.PUBLIC_URL}/linkedin.jpg`}
          alt="LinkIn-icon"
        />
      </a>
      <a href="https://twitter.com/hawayesiza" target="_blank">
        <img
          src={`${process.env.PUBLIC_URL}/tweeter.png`}
          alt="Twitter-icon"
        />
      </a>
    </footer>
  );
};

export default Footer;