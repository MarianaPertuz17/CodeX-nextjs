/*
  Warnings:

  - Added the required column `explanation` to the `Solution` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Solution` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Solution" ADD COLUMN     "explanation" TEXT NOT NULL,
ADD COLUMN     "title" TEXT NOT NULL;
