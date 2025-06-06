-- CreateEnum
CREATE TYPE "Status" AS ENUM ('Active', 'Disabled');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'Active',
    "isAdmin" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Route" (
    "companyId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "containers" INTEGER NOT NULL DEFAULT 0,
    "hours" INTEGER NOT NULL DEFAULT 0,
    "miles" INTEGER NOT NULL DEFAULT 0,
    "scans" INTEGER NOT NULL DEFAULT 0,
    "stops" INTEGER NOT NULL DEFAULT 0,
    "creatorId" TEXT NOT NULL,

    CONSTRAINT "Route_pkey" PRIMARY KEY ("companyId")
);

-- CreateTable
CREATE TABLE "Ledger" (
    "ledgerId" TEXT NOT NULL,
    "containers" INTEGER NOT NULL DEFAULT 0,
    "hours" INTEGER NOT NULL DEFAULT 0,
    "miles" INTEGER NOT NULL DEFAULT 0,
    "scans" INTEGER NOT NULL DEFAULT 0,
    "stops" INTEGER NOT NULL DEFAULT 0,
    "total" DOUBLE PRECISION NOT NULL,
    "routeId" TEXT NOT NULL,
    "driverId" TEXT NOT NULL,
    "createdAt" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Ledger_pkey" PRIMARY KEY ("ledgerId")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Route" ADD CONSTRAINT "Route_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ledger" ADD CONSTRAINT "Ledger_routeId_fkey" FOREIGN KEY ("routeId") REFERENCES "Route"("companyId") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Ledger" ADD CONSTRAINT "Ledger_driverId_fkey" FOREIGN KEY ("driverId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
