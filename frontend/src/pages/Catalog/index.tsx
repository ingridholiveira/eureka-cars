import Button from "components/Button";
import ProductCard from "components/ProductCard";

const Catalog = () => {
  return (
    <>
      <div className="button-container">
        <div className="button-content-container">
          <div className="input-group mb-5">
            <input
              type="text"
              className="form-control"
              placeholder="Digite sua busca"
              aria-label="Digite sua busca"
              aria-describedby="button-addon2"
            />
            <div className="input-group-append" id="button-addon2">
              <Button label="BUSCAR" />
            </div>
          </div>
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
    </>
  );
};

export default Catalog;
