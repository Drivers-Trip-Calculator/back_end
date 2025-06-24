/*
  Warnings:

  - A unique constraint covering the columns `[name,creatorId]` on the table `Route` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Route" DROP CONSTRAINT "Route_creatorId_fkey";

-- CreateIndex
CREATE UNIQUE INDEX "Route_name_creatorId_key" ON "Route"("name", "creatorId");

-- AddForeignKey
ALTER TABLE "Route" ADD CONSTRAINT "Route_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES "User"("email") ON DELETE RESTRICT ON UPDATE CASCADE;
