const router = require("express").Router();
const {
  createTrip,
  updateTrip,
  getTrip,
  getTripsByCreator,
} = require("./tripDB");

function middleware(req, res, next) {
  const token = req.headers?.authorization?.split(" ")[1];
  if (token) {
    next();
  } else {
    res.send("Please log in again");
  }
}

router.post("/", middleware, createTrip);
router.put("/", middleware, updateTrip);
router.get("/", middleware, getTripsByCreator);
router.get("/:tripId", middleware, getTrip);

module.exports = router;
