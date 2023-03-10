import reactLogo from "../../assets/img/react.png";
import reacteur from "../../assets/img/reacteur.png";

const Footer = () => {
  return (
    <footer>
      <div className="bottomLine">
        <div className="final">
          <div className="reactLogo">
            <p>Made with</p>
            <a href="https://fr.reactjs.org/">
              <img src={reactLogo} alt="" />
            </a>
            <p>at</p>{" "}
            <a href="https://www.lereacteur.io/">
              <img className="reactt" src={reacteur} alt="" />
            </a>
            <p>by Frank</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
