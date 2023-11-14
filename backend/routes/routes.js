// import express
import express from "express";

// import function from controller
import {
  showProducts,
  showProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  updateProductStatusController,
  updateProductQuantityController,
} from "../controllers/ProductController.js";

import {
  showCategories,
  showCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
} from "../controllers/CategoryController.js";

import {
  showUsers,
  createUser,
  updateUser,
  deleteUser,
  showUserByUsername,
  updateUserStatusController,
} from "../controllers/UserController.js";

const router = express.Router();

//Product Routes

router.get("/products", showProducts);

router.get("/products/:id", showProductById);

router.post("/products", createProduct);

router.put("/products/:id", updateProduct);

router.delete("/products/:id", deleteProduct);

router.put("/products/:id/status", updateProductStatusController);

router.put("/products/:id/quantity", updateProductQuantityController);

//Category Routes

router.get("/categories", showCategories);

router.get("/categorys/:id", showCategoryById);

router.post("/categories", createCategory);

router.put("/categorys/:id", updateCategory);

router.delete("/categorys/:id", deleteCategory);

//Users Routes

router.get("/users", showUsers);

router.post("/login", showUserByUsername);

router.put("/users/:id", updateUser);

router.delete("/users/:id", deleteUser);

router.put("/users/:id/status", updateUserStatusController);

export default router;
