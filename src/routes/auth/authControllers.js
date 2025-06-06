require("dotenv").config();
const { prisma, bcrypt, jwt } = require("../../utils/common");

const login = async (req, res) => {
  console.log('req.body', req.body);

  const { email, password } = req.body;
  const user = await prisma.user.findFirst({
    where: {
      email,
    },
  });

  const match = await bcrypt.compare(password, user?.password);

  if (match) {
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);
    res.send({ token });
  } else {
    res.send("Try to logon again...");
  }
};

const register = async (req, res) => {
  const {
    email,
    password,
    firstName,
    lastName,
    phone,
    isAdmin,
  } = req.body;
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  const user = await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
      firstName,
      lastName,
      phone,
      isAdmin,
    },
  });

  if (user) {
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);
    res.json({ user, token });
  } else {
    res.send("Something didn't work");
  }
};

const aboutMe = async (req, res, next) => {
  const token = req.headers?.authorization.split(" ")[1];
  const id = jwt.verify(token, process.env.JWT_SECRET).id;
 const response = await prisma.user.findFirst({
   where: {
    id: {equals: id,},
    },
  });

  res.send(response);
};


module.exports = { login, register, aboutMe };
