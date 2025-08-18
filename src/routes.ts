import { Router } from 'express';
import multer from 'multer';

import { CreateUserController } from './controllers/User/CreateUserController';
import { AuthUserController } from './controllers/User/AuthUserController';
import { DetailUserController } from './controllers/User/DetailUserController';

import { CreateCategoryController } from './controllers/category/CreateCategoryController';
import { ListCategoryController } from './controllers/category/ListCategoryController';

import { CreateProductController } from './controllers/product/CreateProductController';
import { ListByCategoryController } from './controllers/product/ListByCategoryController'; // ✅ Correção aqui

import {CreateOrderController} from './controllers/order/CreateOrderController'
import {RemoveOrderController} from './controllers/order/RemoveOrderController'

import{AddItemController}from'./controllers/order/AddItemController'
import {RemoveItemController} from './controllers/order/RemoveItemController'

import{SendOrderController}from './controllers/order/SendOrderController'

import {ListOrdersController} from './controllers/order/ListOrdersController'

import{DetailOrdersController}from'./controllers/order/DetailOrdersController'

import{FinishOrderController}from './controllers/order/FinishOrderController'

import { IsAuthenticated } from './middlewares/IsAuthenticated';

import uploadConfig from './config/multer';

const router = Router();
const upload = multer(uploadConfig.upload("./tmp"));

// Rotas User
router.post('/users', new CreateUserController().handle);
router.post('/session', new AuthUserController().handle);
router.get('/me', IsAuthenticated, new DetailUserController().handle);

// Rotas Category
router.post('/category', IsAuthenticated, new CreateCategoryController().handle);
router.get('/category', IsAuthenticated, new ListCategoryController().handle);

// Rotas Product
//router.post('/product', IsAuthenticated, upload.single('file'), new CreateProductController().handle);
router.post('/product', IsAuthenticated, new CreateProductController().handle);
router.get('/category/product', IsAuthenticated, new ListByCategoryController().handle); // ✅ Essa rota agora funciona


//Rotas Order
router.post('/order', IsAuthenticated, new CreateOrderController().handle)
router.delete('/order',IsAuthenticated,new RemoveOrderController().handle)

router.post('/order/add',IsAuthenticated,new AddItemController().handle)

router.delete('/order/remove',IsAuthenticated, new RemoveItemController().handle)

router.put('/order/send',IsAuthenticated,new SendOrderController().handle)

router.get('/orders',IsAuthenticated,new ListOrdersController().handle)

router.get('/order/detail',IsAuthenticated,new DetailOrdersController().handle)

router.put('/order/finish',IsAuthenticated,new FinishOrderController().handle)

export default router;


