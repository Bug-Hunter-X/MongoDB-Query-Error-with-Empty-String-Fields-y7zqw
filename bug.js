```javascript
const query = { /* some query */ };

// This will cause an error if any field in the query is an empty string
db.collection.find(query).toArray((err, result) => {
  console.log(result);
});
```