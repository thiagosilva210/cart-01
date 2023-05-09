import { useSelector, useDispatch} from "react-redux";
import { addCart, delCart, remCart } from "../action";

function Cart() {
  const items = useSelector((state) => state.add);
  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  const removeItem = (product) => {
    dispatch(delCart(product));
  };

  const removeComp = (product) => {
    dispatch(remCart(product));
  };

  if (items.length === 0) {
    return <p>There are no items in the cart yet.</p>;
  }

  let subtotal = 0;
  let shipping = 60.0;
  let totalItems = 0;

  items.forEach((item) => {
    subtotal += item.price * item.qty;
    totalItems += item.qty;
  });

  return (
    <div className="container">
       <div className="table-responsive">
      <table className="table" style={{ overflowX: 'auto' }}>
        <thead>
          <tr>
          <th scope="col">Product image</th>
            <th scope="col">Product Name</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Total</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td><img style={{height: "5rem", width: "5rem"}} src={item.img} alt={item.imageAlt} /></td>
              <td>{item.name}</td>
              <td>${item.price}</td>
              <td><button
                  className="btn btn-sm btn-danger"
                  onClick={() => {
                    removeItem(item);
                  }}
                >
                  -
                </button> {item.qty} <button
                  className="btn btn-sm btn-success"
                  onClick={() => {
                    addProduct(item);
                  }}
                >
                  +
                </button></td>
                <td>${(item.price * item.qty).toFixed(2)}</td>
              <td>
                
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => {
                    removeComp(item);
                  }}
                >
                  Remove product
                </button>
                
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      <div className="card mb-5">
        <div className="card-body">
          <ul className="list-group list-group-flush">
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Products ({totalItems})
              <span className="badge bg-primary rounded-pill">
                ${Math.round(subtotal)}
              </span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Shipping
              <span className="badge bg-primary rounded-pill">${shipping}</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <strong>Total amount</strong>
              <span className="badge bg-primary rounded-pill">
                ${Math.round(subtotal + shipping)}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cart;
