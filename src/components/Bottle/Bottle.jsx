import PropTypes from "prop-types";
import "./Bottle.css";

const Bottle = ({ bottle, handleAddToCart }) => {
  const { name, img, seller, ratings, price } = bottle;
  return (
    <div className="bottle">
      <img src={img} alt="" />
      <h3>{name}</h3>
      <h4>Seller: {seller}</h4>
      <p>Price: ${price}</p>
      <p>Ratings: {ratings}</p>
      <button onClick={() => handleAddToCart(bottle)}>Purchase</button>
    </div>
  );
};

Bottle.propTypes = {
  bottle: PropTypes.object.isRequired,
  handleAddToCart: PropTypes.func.isRequired,
};
export default Bottle;
