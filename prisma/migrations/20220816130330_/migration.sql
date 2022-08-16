/*
  Warnings:

  - You are about to drop the column `userId` on the `Exercise` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `username` on the `User` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Exercise" DROP CONSTRAINT "Exercise_userId_fkey";

-- AlterTable
ALTER TABLE "Exercise" DROP COLUMN "userId";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "password",
DROP COLUMN "username",
ADD COLUMN     "solved" INTEGER[];

-- CreateTable
CREATE TABLE "Test" (
    "id" SERIAL NOT NULL,
    "testInput" TEXT[],
    "testOutput" TEXT[],
    "exerciseId" INTEGER NOT NULL,

    CONSTRAINT "Test_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Test_exerciseId_key" ON "Test"("exerciseId");

-- AddForeignKey
ALTER TABLE "Test" ADD CONSTRAINT "Test_exerciseId_fkey" FOREIGN KEY ("exerciseId") REFERENCES "Exercise"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
