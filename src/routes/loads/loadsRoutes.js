const router = require("express").Router();
const {
  createLoad,
  updateLoad,
  getLoad,
  getLoadByCreator,
} = require("./loadsDB");

function middleware(req, res, next) {
  const token = req.headers?.authorization?.split(" ")[1];
  if (token) {
    next();
  } else {
    res.send("Please log in again");
  }
}

router.post("/", createLoad);
router.put("/", middleware, updateLoad)
router.get("/", middleware, getLoadByCreator);
router.get("/:companyId", middleware, getLoad);

module.exports = router;
