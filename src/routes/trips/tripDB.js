require("dotenv").config();
const { prisma, bcrypt, jwt } = require("../../utils/common");


//TODO:: Test endpoints with Postman

const createTrip = async (req, res, next) => {
  const { name, containers, hours, miles, scans, stops, email, companyId } = req.body;
  try {
    const response = await prisma.trip.create({
      data: {
        routeId: companyId,
        containers,
        hours,
        miles,
        scans,
        stops,
        creatorId: email,
        createdAt,
      },
    });

    if (response) {
      res.send(response);
    }
  } catch (e) {
    console.error(e);
    res.send(e);
  }
};

const updateTrip = async (req, res, next) => {
  try {
    const { name, containers, hours, miles, scans, stops, email, companyId } = req.body;
    const response = await prisma.trip.upsert({
      where: {
        name_creatorId: {
          name,
          creatorId: email,
        },
      },
      update: {
        containers,
        hours,
        miles,
        scans,
        stops,
        updatedAt,
      },
      create: {
        routeId: companyId,
        containers,
        hours,
        miles,
        scans,
        stops,
        creatorId: email,
        createdAt,
      },
    });
    res.send(response);
  } catch (e) {
    console.error(e);
    res.send(e);
  }
};

const getTrip = async (req, res, next) => {
  const { tripId } = req.params;
  try {
    const response = prisma.trip.findFirst({
      where: {
        tripId,
      },
    });

    res.send(response);
  } catch (e) {
    console.error(e);
    res.send(e);
  }
};

const getTripsByCreator = async (req, res, next) => {
  try {
    const { email } = req.body;
    const response = await prisma.trip.findMany({
      where: {
        creatorId: {
          equals: email,
        },
      },
    });

    res.send(response);
  } catch (e) {
    console.error(e);
    res.send(e);
  }
};

module.exports = { createTrip, updateTrip, getTrip, getTripsByCreator };
