import db from "../config/database.js";

export const getProducts = (result) => {
  db.query(
    'SELECT products.*, departments.name AS department_name, DATE_FORMAT(products.created_at, "%Y-%m-%d") AS formatted_created_at, DATE_FORMAT(products.updated_at, "%Y-%m-%d") AS formatted_updated_at FROM products JOIN departments ON products.department_id = departments.id;',
    (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        result(null, results);
      }
    }
  );
};

export const getProductById = (id, result) => {
  db.query("SELECT * FROM products WHERE id = ?", [id], (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results[0]);
    }
  });
};

export const insertProduct = (data, result) => {
  db.query("INSERT INTO products SET ?", [data], (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};

export const updateProductById = (data, id, result) => {
  db.query("UPDATE products SET ? WHERE id = ?", [data, id], (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};

export const updateProductStatus = (id, status, result) => {
  db.query(
    "UPDATE products SET status = ? WHERE id = ?",
    [status, id],
    (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        result(null, results);
      }
    }
  );
};

export const deleteProductById = (id, result) => {
  db.query("DELETE FROM products WHERE id = ?", [id], (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};
