import db from "../config/database.js";

export const getLogs = (result) => {
  db.query("SELECT * FROM logs", (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};

export const insertLog = (data, result) => {
  db.query("INSERT INTO logs SET ?", [data], (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results[0]);
    }
  });
};
