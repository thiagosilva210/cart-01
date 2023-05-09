import { useSelector } from "react-redux";
import { FaHome, FaShoppingCart } from "react-icons/fa";
import { Badge } from "react-bootstrap";
import {Link} from "react-router-dom"

function Header() {
    
    let totalItems = 0;

    const items = useSelector((state) => state.add);

    items.forEach((item) => {
      totalItems += item.qty;
    });  
  
  return (
    <nav className="navbar navbar-expand-lg navbar-light mb-5 px-4" style={{backgroundColor: "#1E90FF"}}>
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <FaHome  size={25}/>
        </Link>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
        <Link to="/cart" className="navbar-brand">
          <FaShoppingCart size={25} />
          {totalItems > 0 && <Badge style={{position: "absolute", top: "1px", right:"18px"}} bg="secondary">{totalItems}</Badge>}
        </Link>
      </div>
    </nav>
  );
}

export default Header;
