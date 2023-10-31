import db from '../config/database.js'

export const getDepartments = (result) => {
  db.query('SELECT * FROM departments', (err, results) => {
    if (err) {
      console.log(err)
      result(err, null)
    } else {
      result(null, results)
    }
  })
}

export const getDepartmentById = (id, result) => {
  db.query('SELECT * FROM departments WHERE id = ?', [id], (err, results) => {
    if (err) {
      console.log(err)
      result(err, null)
    } else {
      result(null, results[0])
    }
  })
}

export const insertDepartment = (data, result) => {
  db.query('INSERT INTO departments SET ?', [data], (err, results) => {
    if (err) {
      console.log(err)
      result(err, null)
    } else {
      result(null, results)
    }
  })
}

export const updateDepartmentById = (data, id, result) => {
  db.query('UPDATE departments SET ? WHERE id = ?', [data, id], (err, results) => {
    if (err) {
      console.log(err)
      result(err, null)
    } else {
      result(null, results)
    }
  })
}

export const deleteDepartmentById = (id, result) => {
  db.query('DELETE FROM departments WHERE id = ?', [id], (err, results) => {
    if (err) {
      console.log(err)
      result(err, null)
    } else {
      result(null, results)
    }
  })
}
