import "./styles.css";

const Button = () => {
  return (
    <>
      <div className="button-container">
        <div className="button-content-container">
          <div className="button-card">
            <button className="btn btn-secondary btn-icon">
              <p>VER CATÁLOGO</p>
            </button>
          </div>
          <div className="button-text">
            <p>Comece agora a navegar</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Button;
