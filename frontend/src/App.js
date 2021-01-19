import React from "react"
// import {BrowserRouter as Router, Route} from "react-router-dom"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Header from "./components/Header"
import Footer from "./components/Footer"
import HomeScreen from "./screens/HomeScreen"
import AboutScreen from "./screens/AboutScreen"
import ProductScreen from "./screens/ProductScreen"
import CartScreen from "./screens/CartScreen"
import LoginScreen from "./screens/LoginScreen"
import RegisterScreen from "./screens/RegisterScreen"
import ProfileScreen from "./screens/ProfileScreen"
import ShippingScreen from './screens/ShippingScreen'
import PaymentScreen from './screens/PaymentScreen'
import PlaceOrderScreen from './screens/PlaceOrderScreen'
import AdminScreen from "./screens/AdminScreen"
import UserListScreen from './screens/UserListScreen'
import UserEditScreen from './screens/UserEditScreen'
import NotFoundPage from './screens/404'
import AllProductsScreen from "./screens/AllProductsScreen";
import JacketsScreen from "./screens/JacketsScreen";
import PantsScreen from "./screens/PantsScreen";
import GlovesScreen from "./screens/GlovesScreen";
import StickersandPatchesScreen from "./screens/StickersandPatchesScreen";
import ContactScreen from "./screens/ContactScreen";
import ProductListScreen from "./screens/ProductListScreen"
import ProductEditScreen from "./screens/ProductEditScreen"
import OrderScreen from "./screens/OrderScreen"
import OrderListScreen from "./screens/OrderListScreen"
import PrivacyPolicyScreen from "./screens/PrivacyPolicyScreen"
import ShippingandReturnsScreen from "./screens/ShippingandReturnsScreen"
import TermsandConditionsScreen from "./screens/TermsandConditionsScreen"
import SizingChartsScreen from "./screens/SizingChartsScreen"
import Upload from "./components/Upload"

require('dotenv').config()


function App() {
  return (
    <Router>
      
      <Header />

        <Switch>
        <Route path = "/order/:id" component={OrderScreen} />
        <Route path='/shipping' component={ShippingScreen} />
        <Route path='/payment' component={PaymentScreen} />
        <Route path='/placeorder' component={PlaceOrderScreen} />
        <Route path = "/login" component={LoginScreen} /> 
        <Route path = "/register" component={RegisterScreen} />
        <Route path = "/profile" component={ProfileScreen} />
        <Route path = "/product/:id" component={ProductScreen} />
        <Route path = "/cart/:id?" component={CartScreen} />
        <Route path = "/" component={HomeScreen} exact />
        <Route path = "/About" component={AboutScreen} />
        <Route path = "/AllProducts" component={AllProductsScreen} />
        <Route path = "/Jacket" component={JacketsScreen} />
        <Route path = "/Pants" component={PantsScreen} />
        <Route path = "/Gloves" component={GlovesScreen} />
        <Route path = "/StickersandPatches" component={StickersandPatchesScreen} />
        <Route path = "/Contact" component={ContactScreen} />
        <Route path = "/AdminScreen" component={AdminScreen} />
        <Route path = "/admin/userlist" component={UserListScreen} />
        <Route path = "/admin/user/:id/edit" component={UserEditScreen} />
        <Route path = "/admin/productlist" component={ProductListScreen} />
        <Route path = "/admin/product/:id/edit" component={ProductEditScreen} />
        <Route path = "/admin/orderList" component={OrderListScreen} />

        <Route path = "/TermsandConditions" component={TermsandConditionsScreen} />
        <Route path = "/PrivacyPolicy" component={PrivacyPolicyScreen} />
        <Route path = "/ShippingandReturns" component={ShippingandReturnsScreen} />
        <Route path = "/SizingCharts" component={SizingChartsScreen} />

        <Route path = "/Upload" component={Upload} />


        <Route exact path = "/404" component={NotFoundPage} />
        <Redirect to="404" />
        </Switch>
        
      <Footer />
     
    </Router>
  );
}

export default App;