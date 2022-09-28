//import Button from "components/Button";
import ProductCard from "components/ProductCard";
import SearchButton from "components/SearchButton";
import "./styles.css";

const Catalog = () => {
  return (
    <>
      <div className="catalog-container">
        <div className="first-container container">
          <div className="first-content-container">
            <SearchButton />
          </div>
        </div>

        <div className="container my-4">
          <div className="row">
            <div className="col-sm-6 col-lg-4">
              <ProductCard />
            </div>
            <div className="col-sm-6 col-lg-4">
              <ProductCard />
            </div>
            <div className="col-sm-6 col-lg-4">
              <ProductCard />
            </div>
            <div className="col-sm-6 col-lg-4">
              <ProductCard />
            </div>
            <div className="col-sm-6 col-lg-4">
              <ProductCard />
            </div>
            <div className="col-sm-6 col-lg-4">
              <ProductCard />
            </div>
            <div className="col-sm-6 col-lg-4">
              <ProductCard />
            </div>
            <div className="col-sm-6 col-lg-4">
              <ProductCard />
            </div>
            <div className="col-sm-6 col-lg-4">
              <ProductCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Catalog;
