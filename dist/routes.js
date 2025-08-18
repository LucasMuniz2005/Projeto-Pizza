"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const multer_1 = __importDefault(require("multer"));
const CreateUserController_1 = require("./controllers/User/CreateUserController");
const AuthUserController_1 = require("./controllers/User/AuthUserController");
const DetailUserController_1 = require("./controllers/User/DetailUserController");
const CreateCategoryController_1 = require("./controllers/category/CreateCategoryController");
const ListCategoryController_1 = require("./controllers/category/ListCategoryController");
const CreateProductController_1 = require("./controllers/product/CreateProductController");
const ListByCategoryController_1 = require("./controllers/product/ListByCategoryController"); // ✅ Correção aqui
const CreateOrderController_1 = require("./controllers/order/CreateOrderController");
const RemoveOrderController_1 = require("./controllers/order/RemoveOrderController");
const AddItemController_1 = require("./controllers/order/AddItemController");
const RemoveItemController_1 = require("./controllers/order/RemoveItemController");
const SendOrderController_1 = require("./controllers/order/SendOrderController");
const ListOrdersController_1 = require("./controllers/order/ListOrdersController");
const DetailOrdersController_1 = require("./controllers/order/DetailOrdersController");
const FinishOrderController_1 = require("./controllers/order/FinishOrderController");
const IsAuthenticated_1 = require("./middlewares/IsAuthenticated");
const multer_2 = __importDefault(require("./config/multer"));
const router = (0, express_1.Router)();
const upload = (0, multer_1.default)(multer_2.default.upload("./tmp"));
// Rotas User
router.post('/users', new CreateUserController_1.CreateUserController().handle);
router.post('/session', new AuthUserController_1.AuthUserController().handle);
router.get('/me', IsAuthenticated_1.IsAuthenticated, new DetailUserController_1.DetailUserController().handle);
// Rotas Category
router.post('/category', IsAuthenticated_1.IsAuthenticated, new CreateCategoryController_1.CreateCategoryController().handle);
router.get('/category', IsAuthenticated_1.IsAuthenticated, new ListCategoryController_1.ListCategoryController().handle);
// Rotas Product
//router.post('/product', IsAuthenticated, upload.single('file'), new CreateProductController().handle);
router.post('/product', IsAuthenticated_1.IsAuthenticated, new CreateProductController_1.CreateProductController().handle);
router.get('/category/product', IsAuthenticated_1.IsAuthenticated, new ListByCategoryController_1.ListByCategoryController().handle); // ✅ Essa rota agora funciona
//Rotas Order
router.post('/order', IsAuthenticated_1.IsAuthenticated, new CreateOrderController_1.CreateOrderController().handle);
router.delete('/order', IsAuthenticated_1.IsAuthenticated, new RemoveOrderController_1.RemoveOrderController().handle);
router.post('/order/add', IsAuthenticated_1.IsAuthenticated, new AddItemController_1.AddItemController().handle);
router.delete('/order/remove', IsAuthenticated_1.IsAuthenticated, new RemoveItemController_1.RemoveItemController().handle);
router.put('/order/send', IsAuthenticated_1.IsAuthenticated, new SendOrderController_1.SendOrderController().handle);
router.get('/orders', IsAuthenticated_1.IsAuthenticated, new ListOrdersController_1.ListOrdersController().handle);
router.get('/order/detail', IsAuthenticated_1.IsAuthenticated, new DetailOrdersController_1.DetailOrdersController().handle);
router.put('/order/finish', IsAuthenticated_1.IsAuthenticated, new FinishOrderController_1.FinishOrderController().handle);
exports.default = router;
