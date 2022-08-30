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

          <p>Comece agora a navegar</p>
        </div>
      </div>
    </>
  );
};

export default Button;
