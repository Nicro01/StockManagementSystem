import {
  getDepartments,
  getDepartmentById,
  insertDepartment,
  updateDepartmentById,
  deleteDepartmentById
} from '../models/Departments.js'

export const showDepartments = (req, res) => {
  getDepartments((err, results) => {
    if (err) {
      res.send(err)
    } else {
      res.json(results)
    }
  })
}

export const showDepartmentById = (req, res) => {
  getDepartmentById(req.params.id, (err, results) => {
    if (err) {
      res.send(err)
    } else {
      res.json(results)
    }
  })
}

export const createDepartment = (req, res) => {
  const data = req.body
  insertDepartment(data, (err, results) => {
    if (err) {
      res.send(err)
    } else {
      res.json(results)
    }
  })
}

export const updateDepartment = (req, res) => {
  const data = req.body
  const id = req.params.id
  updateDepartmentById(data, id, (err, results) => {
    if (err) {
      res.send(err)
    } else {
      res.json(results)
    }
  })
}

export const deleteDepartment = (req, res) => {
  const id = req.params.id
  deleteDepartmentById(id, (err, results) => {
    if (err) {
      res.send(err)
    } else {
      res.json(results)
    }
  })
}
