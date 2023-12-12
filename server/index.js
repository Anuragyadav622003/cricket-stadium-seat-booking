
const express = require('express');
const mysql = require('mysql');
const bcrypt = require('bcrypt')
const cors = require('cors');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'events'
});

// Connect to MySQL
connection.connect((error) => {
  if (error) {
    console.error('Error connecting to MySQL:', error);
    return;
  }
  console.log('Connected to MySQL');
 
});
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors());
// Retrieve cricket players
app.get('/cricket', (req, res) => {
  const query = 'SELECT * FROM cricket';

  connection.query(query, (err, rows) => {
    if (err) {
      console.error('Error executing SQL query:', err);
      res.status(500).json({ error: 'Internal server error' });
    } else {
      console.log(rows)
      res.json(rows);
    }
  });
});


app.get('/seat_layout', (req, res) => {
  const query = 'SELECT * FROM seat_layout';

  connection.query(query, (err, rows) => {
    if (err) {
      console.error('Error executing SQL query:', err);
      res.status(500).json({ error: 'Internal server error' });
    } else {
    
      res.json(rows);
    }
  });
});

app.post('/register', async (req, res) => {
  const { username, email, password } = req.body;

  // Check if the user with the provided email already exists
  const userCount = await new Promise((resolve, reject) => {
    const countQuery = 'SELECT COUNT(*) AS userCount FROM user WHERE email = ?';
    connection.query(countQuery, [email], (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result[0].userCount);
      }
    });
  });

  if (userCount === 0) {
    // User does not exist, insert new user
    const saltRounds = 10;
    bcrypt.hash(password, saltRounds, (err, hash) => {
      if (err) {
        console.error('Error hashing password:', err);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        const insertQuery = 'INSERT INTO user (name, email, password) VALUES (?, ?, ?)';
        connection.query(insertQuery, [username, email, hash], (err, result) => {
          if (err) {
            console.error('Error inserting user:', err);
            res.status(500).json({ error: 'Internal Server Error' });
          } else {
            console.log('User inserted into the database');
            res.status(200).json({ status: 'register successfully' });
          }
        });
      }
    });
  } else {
    // User already exists, check password
    const getPasswordQuery = 'SELECT password FROM user WHERE email = ?';
    connection.query(getPasswordQuery, [email], (err, result) => {
      if (err) {
        console.error('Error fetching password:', err);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        const storedHash = result[0].password;
        bcrypt.compare(password, storedHash, (err, result) => {
          if (err) {
            console.error('Error comparing passwords:', err);
            res.status(500).json({ error: 'Internal Server Error' });
          } else if (!result) {
            res.status(401).json({ status: 'Incorrect Password' });
          } else {
            res.status(200).json({ status: 'Already register' });
          }
        });
      }
    });
  }
});
app.post('/login',(req,res)=>{
  try {
    const saltround = 10;
  
  
    bcrypt.genSalt(saltround, function (err, salt) {
      bcrypt.hash(req.body.password, salt, function (err, hash) {
        // Check if the user with the provided email exists
        connection.query('SELECT * FROM user WHERE email = ?', [req.body.email], async function (error, results, fields) {
          if (error) {
            console.error('Error checking user existence:', error);
            return res.status(500).json({ error: 'Internal Server Error' });
          }
  
          if (results.length === 0) {
        
            res.send({ status: 'you are not registered yet, get registered' });
          } else {
          
            bcrypt.compare(req.body.password, results[0].password, function (err, result) {
              if (result) {
            
                res.send({ status: 'Loign successfully' });
                
              } else {
            
                res.send({ status: 'Incorrect password' });
              }
            });
          }
        });
      });
    });
  } catch (error) {
    console.error('An error occurred:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
})
app.listen(5000,(error)=>{ 
  if(error) throw error
  console.log("server is listenning on port 5000")
});