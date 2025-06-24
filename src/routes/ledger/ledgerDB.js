require("dotenv").config();
const { prisma, bcrypt, jwt } = require("../../utils/common");

//TODO:: Complete DB Functions
//TODO:: Test endpoints with Postman

const createLedgerEntry = async (req, res, next) => {
  //TODO:: Get Load and Trip information to calculate pay for container, hours, miles, scans, and stops.

};

const getLedgerEntry = async (req, res, next) => {
  //TODO:: Return requested ledger entry
};

const getLedgerEntryByDateRange = async (req, res, next) => {
  //TODO:: Return the ledger entries created in a specific date range sorted by DATE . Calculate a total for each data point.
};

const getLedgerEntryByCreator = async (req, res, next) => {
  //TODO:: Return all ledger entries created by user sort by DATE
}

const updateLedgerEntry = async (req, res, next) => {
  //TODO:: Update ledger entry
};

const deleteLedgerEntry = async (req, res, next) => {
  //TODO:: Remove ledger entry
};


module.exports = { getLedgerEntry, getLedgerEntryByCreator, getLedgerEntryByDateRange, createLedgerEntry, updateLedgerEntry, deleteLedgerEntry };
