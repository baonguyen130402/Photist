const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const db = require("./config/db");

const app = express();
dotenv.config();

const PORT = process.env.PORT;
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

app.use(express.json());
// app.use(cookieParser());
app.use(cors({
  credentials: true,
  origin: "http://localhost:3000",
}));

const bcryptSalt = bcrypt.genSaltSync(10);

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Connect to MongoDB
db.connect();

// Routes
app.get("/", (_, res) => {
  res.send("Hello World");
});

// Post user's data to database
app.post("/join", async (req, res) => {
  const { name, email, username, password } = req.body;

  try {
    const userDoc = await db.User
      .create({
        name,
        email,
        username,
        password: bcrypt.hashSync(password, bcryptSalt),
      });

    res.json(userDoc);
  } catch (err) {
    res.status(422).json(err);
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const account = await db.User.findOne({ email });

  if (account) {
    const authPasswd = bcrypt.compareSync(password, account.password);

    if (authPasswd) {
      jwt.sign(
        {
          email: account.email,
          id: account._id,
          username: account.username,
        },
        JWT_SECRET_KEY,
        (err, asyncToken) => {
          if (err) throw err;
          res.cookie("token", asyncToken).json(account);
        },
      );
    } else {
      res.status(422).json("Wrong password");
    }
  } else {
    res.json("Not a member");
  }
});

app.listen(PORT, () => {
  console.log(`Online on http://localhost:${PORT}`);
});
