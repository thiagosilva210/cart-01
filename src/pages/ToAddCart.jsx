import { useDispatch } from "react-redux";
import { addCart } from "../action";


const products = [
  {
    id: 1,
    name: 'Product 1',
    price: 10.99,
    img: "images/download.jpeg"

  },
  {
    id: 2,
    name: 'Product 2',
    price: 14.99,
    img: "images/control-sale.png"
  },
  {
    id: 3,
    name: 'Product 3',
    price: 24.99,
    img: "images/steering-wheel.jpg"
  },
];

function ToAddCart() {

  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product)); // dispatch the action to add the product to the cart
  };

  return (
    
    <div className="mb-5">
    <h1 className="ms-5">Product List</h1>
    <ul style={{listStyle: "none", display: "flex",flexWrap: "wrap", justifyContent: "space-around"}}>     
    {products.map((product) => (
    <li className="mt-5" key={product.id}>
    <div className="card" style={{width: "15rem"}}>
    <img className="card-img-top" style={{height: "18rem"}} src={product.img} alt="Card cap"/>
    <div className="card-body">    
    <h5 className="card-title">{product.name}</h5>    
    <p className="card-text">Price: ${product.price.toFixed(2)}</p>
    <button className="btn btn-outline-dark"
    onClick={() => addProduct(product)}>Add to Cart</button>
    </div>
    </div>
    </li>
    ))}
    </ul>
  </div>

  );
}

export default ToAddCart;


