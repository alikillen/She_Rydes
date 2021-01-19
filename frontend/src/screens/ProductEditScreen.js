import axios from "axios";
import dotenv from "dotenv"
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import FormContainer from "../components/FormContainer";
import { listProductDetails, updateProduct } from "../actions/productActions";
import { PRODUCT_UPDATE_RESET } from "../constants/productConstants";
import S3 from "react-aws-s3";
// import config from "../config/awsConfig"

const ProductEditScreen = ({ match, history }) => {
  const productId = match.params.id;

  // pass in different things in statre for color and size?

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [category, setCategory] = useState("");
  const [SKU, setSKU] = useState("");
  const [accessoryType, setaccessoryType] = useState("");
  const [countInStock, setCountInStock] = useState(0);
  const [description, setDescription] = useState("");
  // const [uploading, setUploading] = useState(false);

  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  const productUpdate = useSelector((state) => state.productUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = productUpdate;

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: PRODUCT_UPDATE_RESET });
      history.push("/admin/productlist");
    } else {
      if (!product.name || product._id !== productId) {
        dispatch(listProductDetails(productId));
      } else {
        setName(product.name);
        setPrice(product.price);
        setImage(product.image);
        setSize(product.size);
        setCategory(product.category);
        setSKU(product.SKU);
        setCountInStock(product.countInStock);
        setDescription(product.description);
        setColor(product.color);
        setaccessoryType(product.accessoryType);
      }
    }
  }, [dispatch, history, productId, product, successUpdate]);

  // use old code to set image into state?
  // check AWS policies + CORS config
  // chew AWS credential variables

  // const uploadFileHandler = async (e) => {
  //   const file = e.target.files[0];
  //   const formData = new FormData();
  //   formData.append("image", file);
  //   setUploading(true);

  //   try {
  //     const config = {
  //       headers: {
  //         "Content-Type": "multipart/form-data",
  //       },
  //     };

  //     const { data } = await axios.post("/api/upload", formData, config);

  //     setImage(data);
  //     setUploading(false);
  //   } catch (error) {
  //     console.error(error);
  //     setUploading(false);
  //   }
  // };

  const fileInput = React.useRef();

  const handleUpload = (file) => {

    const config = {
      bucketName: process.env.REACT_APP_AWS_BUCKET_NAME,
      region: process.env.REACT_APP_AWS_REGION,
      accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
    };

    let newFileName = file.name.replace(/\..+$/, "");
    console.log(`in handleupload - new file name is ${newFileName}`);

    const ReactS3Client = new S3(config);

    console.log("about to try uploadfile");

    ReactS3Client.uploadFile(file, newFileName).then((data) => {
      if (data.status === 204) {
        console.log("success");
      } else {
        console.log("fail");
      }
    });
  };


  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(
      updateProduct({
        _id: productId,
        name,
        price,
        image,
        category,
        SKU,
        size,
        color,
        accessoryType,
        description,
        countInStock,
      })
    );

    let newArr = fileInput.current.files;
    console.log(`this is newArr of files -- ${newArr}`)

    for (let i = 0; i < newArr.length; i++) {
      handleUpload(newArr[i]);
    }
  }


  return (
    <>
      <Link to="/admin/productlist" className="btn btn-light my-3">
        Go Back
      </Link>
      <FormContainer>
        <h1>Edit Product</h1>
        {loadingUpdate && <Loader />}
        {errorUpdate && <Message variant="danger">{errorUpdate}</Message>}
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <Form onSubmit={submitHandler}>

            <Form.Group controlId='name'>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="name"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="price">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              ></Form.Control>
            </Form.Group>

            

            <form className="upload-steps">
              <label>
                Image Upload:
                <input type="file" ref={fileInput} />
                </label>
              <br />
                </form>


            {/* <Upload /> */}

            {/* <Form.Group controlId="image">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter image url"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              ></Form.Control>
              <Form.File
                id="image-file"
                label="Choose File"
                custom
                onChange={uploadFileHandler}
              ></Form.File>
              {uploading && <Loader />}
            </Form.Group> */}

            {/* <Form.Group controlId='image'>
              <Form.Label>Image</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter image'
                value={image}
                onChange={(e) => setImage(e.target.value)}
              ></Form.Control>
            </Form.Group> */}

            <form className='upload-steps'>
              <label>
                Upload image file:
                <input type='file' multiple ref={fileInput} />
              </label>
            </form>

            <Form.Group controlId='countInStock'>
              <Form.Label>Count In Stock</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter count in stock of specific product"
                value={countInStock}
                onChange={(e) => setCountInStock(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="category">
              <Form.Label>Category</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter category from category list"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="SKU">
              <Form.Label>SKU</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter SKU from SKU list"
                value={SKU}
                onChange={(e) => setSKU(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="size">
              <Form.Label>Size</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter size"
                value={size}
                onChange={(e) => setSize(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="color">
              <Form.Label>Colour</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter colour"
                value={color}
                onChange={(e) => setColor(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="accessoryType">
              <Form.Label>Accessory Type(Sticker/Patch/None)</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter accessory type if accessory"
                value={accessoryType}
                onChange={(e) => setaccessoryType(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Button type="submit" variant="primary">
              Update
            </Button>
          </Form>

        )}
      </FormContainer>
    </>
  );
};

export default ProductEditScreen;
