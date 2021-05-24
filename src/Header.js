import "./Header.css";
import { Button } from 'react-bootstrap';
const Header = ({ cartCount, calCart }) => {
  return (
    <div className="row">
      <div className="col-12 bg-primary p-5 justify-content">
        <div class="d-flex justify-content-between">
          <span className="h1">Shop to React</span>
          <Button className="" onClick={calCart}>
            <img className="cart" src="shopping-cart.svg" alt="" />
            <p className="">{cartCount} items</p>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
