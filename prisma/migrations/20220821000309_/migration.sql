/*
  Warnings:

  - Added the required column `ourSolution` to the `Exercise` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Exercise" ADD COLUMN     "ourSolution" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Solution" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
