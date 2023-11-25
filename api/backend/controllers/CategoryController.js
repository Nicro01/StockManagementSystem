import {
  getCategories,
  getCategoryById,
  insertCategory,
  updateCategoryById,
  deleteCategoryById,
} from "../models/Category.js";

export const showCategories = (req, res) => {
  getCategories((err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

export const showCategoryById = (req, res) => {
  getCategoryById(req.params.id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

export const createCategory = (req, res) => {
  const data = req.body;
  insertCategory(data, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

export const updateCategory = (req, res) => {
  const data = req.body;
  const id = req.params.id;
  updateCategoryById(data, id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

export const deleteCategory = (req, res) => {
  const id = req.params.id;
  deleteCategoryById(id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};
