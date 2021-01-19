import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
} from "react-bootstrap";
import Message from "../components/Message";
import { addToCart, removeFromCart } from "../actions/cartActions";

const CartScreen = ({ match, location, history }) => {
  const productId = match.params.id;

  const qty = location.search ? Number(location.search.split("=")[1]) : 1;
  // this will be the query params

  //   let search = new URLSearchParams(this.props.location.search);
  //   console.log(search)

  // const color = search.get("color");
  // console.log(color)

  // const color =

  // const size =

  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  console.log(cartItems);

  // we only want to add to cart if there is a product ID

  // we need to add size and color here too for users to add those attributes to cart?
  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  //   front end filtering products
  // set up a dropdown with only those values that are enums,
  // set the value to each option as one of those options,
  // aka build the dropdown from an array of strings that matches the enum

  // and then -  when the user selects an option in the dropdown,
  // set that into local state for that component,
  // when they press submit,
  // It will get the local state and inject it into the object I am going to send to the DB / local storage wherever

  //   const [attributesCartItems, setAtributesCartItems] = useState({
  //     color: [],
  //     size: [8, 10, 12, 14, 16],
  //     accessoryType: [None],
  // })

  // on change

  // function handleUserCustomizingAttributes(productArray, category) {
  //   setAttributesCartItems({
  //       ...attributesCartItems,
  //       [category]: productArray,
  //   })
  // }

  // on submit

  // let tempCartProducts = {
  //   ...cartItems,
  //   color: tempColor,
  //   size: tempSize,
  //   accessoryType: tempAccessoryType,
  // }
  // addToCart(tempCartProducts, dispatch)

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  // this checkoutHandler is causing issues with proceed to checkout button - redirrects to /api/products/login which causes 500
  // its supposed to check if logged in, but is redirecting incorrectly
  // because of history.push - we have previously been in /api/products, so it pushes /login onto /api/products
  // need to change it to redirect to shipping IF the user is logged in
  // might not be an issue if we have a fresh login everytime - if history is correct
  // i think the repair is to logout of all accounts before you stop your server - seems to only happen when left logged in and sever restarted

  const checkoutHandler = () => {
    history.push("./login?redirect=shipping");
  };

  return (
    <Row>
      <Col md={8}>
        <h1>Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <Message>
            Your cart is empty. <Link to='/'>Go Back</Link>
          </Message>
        ) : (
          <ListGroup variant='flush'>
            {cartItems.map((item) => (
              <ListGroup.Item key={item.product}>
                <Row>
                  <Col md={2}>
                    <Image src={item.image} alt={item.name} fluid rounded />
                  </Col>
                  <Col md={3}>
                    <Link to={`product/${item.product}`}>{item.name}</Link>
                  </Col>
                  <Col md={2}>${item.price}</Col>
                  <Col md={2}>
                    <br></br>

                    {/* add color and size selection here, and accessory type if neccessary */}

                    <p>Quantity</p>
                    <Form.Control
                      as='select'
                      value={item.qty}
                      onChange={(e) =>
                        dispatch(
                          addToCart(item.product, Number(e.target.value))
                        )
                      }
                    >
                      {[...Array(item.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </Form.Control>

                    {/* COLOR - if item has color attribute as available/req in db*/}
                    <p>Colour</p>

                    <Form.Control
                      as='select'
                      value={item.color}
                      // get this color from options in db
                      onChange={(e) =>
                        dispatch(
                          addToCart(item.product, Number(e.target.value))
                        )
                      }
                    >
                      {[...Array(item.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </Form.Control>

                    {/* SIZE  - if size*/}
                    <p>Size</p>
                    <Form.Control
                      as='select'
                      value={item.size}
                      onChange={(e) =>
                        dispatch(
                          addToCart(item.product, Number(e.target.value))
                        )
                      }
                    >
                      {[...Array(item.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </Form.Control>

                    {/* DO ACCESSORY TYPE CHOICE DROPDOWN IF ACCESSORYTYPE */}
                  </Col>
                  <Col md={2}>
                    <Button
                      type='button'
                      variant='light'
                      onClick={() => removeFromCartHandler(item.product)}
                    >
                      <i className='fas fa-trash'></i>
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Col>
      <Col md={4}>
        <Card>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h2>
                Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)})
                items
              </h2>
              $
              {cartItems
                .reduce((acc, item) => acc + item.qty * item.price, 0)
                .toFixed(2)}
            </ListGroup.Item>
            <ListGroup.Item>
              <Button
                type='button'
                className='btn-block'
                disabled={cartItems.length === 0}
                onClick={checkoutHandler}
              >
                Proceed To Checkout
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
    </Row>
  );
};

export default CartScreen;
