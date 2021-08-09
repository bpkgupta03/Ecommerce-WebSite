import express from 'express';
import { userSignup ,userLogin} from '../controller/user-controller.js';
import {getProducts,getProduct} from '../controller/product-controller.js';
import { addPaymentGateway ,addpaymentResponse} from '../controller/payment-controller.js';

const Router= express.Router();

Router.post('/signup',userSignup);
Router.post('/login',userLogin);

Router.get('/products',getProducts);
Router.get('/product/:id',getProduct);

Router.post('/payment',addPaymentGateway);
Router.post('/callback',addpaymentResponse);

export default Router;