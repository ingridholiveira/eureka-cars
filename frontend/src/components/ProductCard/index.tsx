import ProductImg from "assets/images/product.png";
import ProductDescription from "components/ProductDescription";
import Button from "components/Button";
import "./style.css";

const ProductCard = () => {
  return (
    <>
      <div className="base-card product-card">
        <div className="card-top-container">
          <img src={ProductImg} alt="Nome do produto"></img>
        </div>
        <div className="card-bottom-container">
          <h6>Audi Supra TT</h6>
          <ProductDescription />
          <Button />
        </div>
      </div>
    </>
  );
};

export default ProductCard;
