require("dotenv").config();
const { prisma, bcrypt, jwt } = require("../../utils/common");


//TODO:: Test endpoints with Postman

const createLoad = async (req, res, next) => {
  const { name, containers, hours, miles, scans, stops, email } = req.body;
  try {   
    const response = await prisma.route.create({
      data: {
        name,
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
      res.send(response)
    }
  } catch (e) {
    console.error(e);
    res.send(e);
  }
};

const updateLoad = async (req, res, next) => {
  try {
    const { name, containers, hours, miles, scans, stops, email } = req.body;
    const response = await prisma.route.upsert({
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
        name,
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

const getLoad = async (req, res, next) => {
  const { companyId } = req.params;
  try {
    const response = prisma.route.findFirst({
      where: {
        companyId,
      },
    });

    res.send(response);
  } catch (e) {
    console.error(e)
    res.send(e);
  }
};

const getLoadByCreator = async (req, res, next) => {
  try {
    const { email } = req.body;
    const response = await prisma.route.findMany({
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
}

module.exports = { createLoad, updateLoad, getLoad, getLoadByCreator};