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
} from "../controllers/ProductController.js";

import {
  showDepartments,
  showDepartmentById,
  createDepartment,
  updateDepartment,
  deleteDepartment,
} from "../controllers/DepartmentController.js";

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

//Department Routes

router.get("/departments", showDepartments);

router.get("/departments/:id", showDepartmentById);

router.post("/departments", createDepartment);

router.put("/departments/:id", updateDepartment);

router.delete("/departments/:id", deleteDepartment);

//Users Routes

router.get("/users", showUsers);

router.post("/login", showUserByUsername);

router.put("/users/:id", updateUser);

router.delete("/users/:id", deleteUser);

router.put("/users/:id/status", updateUserStatusController);

export default router;
