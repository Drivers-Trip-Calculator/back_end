const router = require("express").Router();
const {
  getLedgerEntry,
  getLedgerEntryByCreator,
  getLedgerEntryByDateRange,
  createLedgerEntry,
  updateLedgerEntry,
  deleteLedgerEntry,
} = require("./loadsDB");

function middleware(req, res, next) {
  const token = req.headers?.authorization?.split(" ")[1];
  if (token) {
    next();
  } else {
    res.send("Please log in again");
  }
}

router.post("/", middleware, createLedgerEntry);
router.put("/", middleware, updateLedgerEntry);
router.get("/", middleware, getLedgerEntry);
router.get("/:companyId", middleware, getLedgerEntryByCreator);
router.get("/:companyId", middleware, getLedgerEntryByDateRange);

module.exports = router;
