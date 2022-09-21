//import Button from "components/Button";
import "./styles.css";

const SearchButton = () => {
  return (
    <>
      <div className="search-button">
        <div className="search-button-content">
          <input
            type="text"
            placeholder="Digite sua busca"
            className="search-input-button"
            aria-label="Digite sua busca"
            aria-describedby="button-addon2"
          />
          <div className="">
            <button
              className="btn btn-secondary btn-search-icon"
              type="button"
              id="button-addon2"
            >
              <p>BUSCAR</p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchButton;
