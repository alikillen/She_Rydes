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
import AdminScreen from "./screens/AdminScreen"
import UserListScreen from './screens/UserListScreen'
import UserEditScreen from './screens/UserEditScreen'
import NotFoundPage from './screens/404'
import ProductListScreen from "./screens/ProductListScreen";



function App() {
  return (
    <Router>
      
      <Header />

        <Switch>
        <Route path = "/login" component={LoginScreen} />
        <Route path = "/register" component={RegisterScreen} />
        <Route path = "/profile" component={ProfileScreen} />
        <Route path = "/product/:id" component={ProductScreen} />
        <Route path = "/cart/:id?" component={CartScreen} />
        <Route path = "/" component={HomeScreen} exact />
        <Route path = "/About" component={AboutScreen} />
        <Route path = "/AdminScreen" component={AdminScreen} />
        <Route path = "/admin/userlist" component={UserListScreen} />
        <Route path = "/admin/user/:id/edit" component={UserEditScreen} />
        <Route path = "/admin/productlist" component={ProductListScreen} />

        <Route exact path = "/404" component={NotFoundPage} />
        <Redirect to="404" />
        </Switch>
        
      <Footer />
     
    </Router>
  );
}

export default App;
