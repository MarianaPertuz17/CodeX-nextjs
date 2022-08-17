/*
  Warnings:

  - Added the required column `isFree` to the `Exercise` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Exercise" ADD COLUMN     "bigO" TEXT,
ADD COLUMN     "isFree" BOOLEAN NOT NULL,
ALTER COLUMN "category" DROP NOT NULL;
