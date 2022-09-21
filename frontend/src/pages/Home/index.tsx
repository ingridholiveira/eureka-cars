//import Navbar from "components/Navbar";
import { ReactComponent as MainImage } from "assets/images/main-image.svg";
import "./styles.css";
import Button from "components/Button";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="home-card">
          <div className="home-content-container">
            <div>
              <h1>O carro perfeito para você</h1>
              <p>
                Conheça nossos carros e dê mais um passo na realização do seu
                sonho
              </p>
            </div>
          </div>
          <div className="home-image-container">
            <MainImage />
          </div>
        </div>
      </div>
      <div className="second-container">
        <div className="second-content-container">
          <div className="second-card">
            <Link to="/products">
              <Button label="VER CATÁLOGO" />
            </Link>
          </div>
          <div className="second-container-text">
            <p>Comece agora a navegar</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
