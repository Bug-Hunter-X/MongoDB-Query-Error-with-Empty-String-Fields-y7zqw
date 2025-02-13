```javascript
const query = { /* some query */ };

// Handle empty strings before constructing the query
const sanitizedQuery = Object.entries(query).reduce((acc, [key, value]) => {
  if (value !== "") {
    acc[key] = value;
  }
  return acc;
}, {});

// Use sanitizedQuery in the MongoDB query.  This ensures no empty strings are passed to MongoDB.
db.collection.find(sanitizedQuery).toArray((err, result) => {
  if (err) {
    console.error("Error:", err);
  } else {
    console.log(result);
  }
});
```