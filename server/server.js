const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// Path to data.json
const dataPath = path.join(__dirname, 'data.json');

// Get items
app.get('/api/items', (req, res) => {
   fs.readFile(dataPath, 'utf-8', (err, data) => {
      if (err) {
         return res.status(500).json({ error: 'Failed to read data' });
      }
      res.json(JSON.parse(data));
   });
});

// Add item
app.post('/api/items', (req, res) => {
   const newItem = req.body;

   fs.readFile(dataPath, 'utf-8', (err, data) => {
      if (err) {
         return res.status(500).json({ error: 'Failed to read data' });
      }

      const items = JSON.parse(data);
      items.push(newItem);

      fs.writeFile(dataPath, JSON.stringify(items, null, 2), (err) => {
         if (err) {
            return res.status(500).json({ error: 'Failed to write data' });
         }
         res.status(201).json(newItem);
      });
   });
});

// Start the server
app.listen(PORT, () => {
   console.log(`Server is running on http://localhost:${PORT}`);
});
