import express from "express";
const app = express();

// route mặc định
app.get("/", (req, res) => {
  res.send("Hello");
});

// route greet
app.get("/api/posts/greet", (req, res) => {
  const name = req.query.name;
  if (!name) {
    return res.status(400).json({ error: "Thiếu tham số name" });
  }
  res.json({ message: `Xin chào ${name}!` });
});

// route sum
app.get("/api/posts/sum", (req, res) => {
  const a = parseFloat(req.query.a);
  const b = parseFloat(req.query.b);
  if (isNaN(a) || isNaN(b)) {
    return res.status(400).json({ error: "Tham số a và b phải là số" });
  }
  res.json({ sum: a + b });
});

app.listen(3000, () => {
  console.log("Server is running at http://localhost:3000");
});
