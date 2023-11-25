import db from '../config/database.js'

export const getUsers = (result) => {
  db.query('SELECT users.* FROM users', (err, results) => {
    if (err) {
      console.log(err)
      result(err, null)
    } else {
      result(null, results)
    }
  })
}

export const getUserById = (id, result) => {
  db.query('SELECT * FROM users WHERE id = ?', [id], (err, results) => {
    if (err) {
      console.log(err)
      result(err, null)
    } else {
      result(null, results[0])
    }
  })
}

export const getUserByUsername = (data, result) => {
  db.query(
    'SELECT * FROM users WHERE username = ? AND password = ?',
    [data.username, data.password],
    (err, results) => {
      if (err) {
        console.log(err)
        result(err, null)
      } else {
        console.log(results[0])
        result(null, results[0])
      }
    }
  )
}

export const insertUser = (data, result) => {
  db.query('INSERT INTO users SET ?', [data], (err, results) => {
    if (err) {
      console.log(err)
      result(err, null)
    } else {
      getUserById(results.insertId, (err, user) => {
        if (err) {
          console.log(err)
          result(err, null)
        } else {
          result(null, user)
        }
      })
    }
  })
}

export const getRoles = (result) => {
  db.query('SELECT DISTINCT role FROM users', (err, results) => {
    if (err) {
      console.log(err)
      result(err, null)
    } else {
      result(null, results)
    }
  })
}

export const updateUserById = (data, id, result) => {
  db.query('UPDATE users SET ? WHERE id = ?', [data, id], (err, results) => {
    if (err) {
      console.log(err)
      result(err, null)
    } else {
      result(null, results)
    }
  })
}

export const updateUserStatus = (id, status, result) => {
  db.query('UPDATE users SET status = ? WHERE id = ?', [status, id], (err, results) => {
    if (err) {
      console.log(err)
      result(err, null)
    } else {
      result(null, results)
    }
  })
}

export const deleteUserById = (id, result) => {
  db.query('DELETE FROM users WHERE id = ?', [id], (err, results) => {
    if (err) {
      console.log(err)
      result(err, null)
    } else {
      result(null, results)
    }
  })
}
