-- CreateTable
CREATE TABLE "Test" (
    "id" SERIAL NOT NULL,
    "testInput" TEXT[],
    "testOutput" TEXT[],
    "exerciseId" INTEGER NOT NULL,

    CONSTRAINT "Test_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Exercise" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "difficulty" INTEGER NOT NULL,
    "category" TEXT NOT NULL,
    "description" TEXT,
    "hints" TEXT[],
    "functionName" TEXT,
    "paramNames" TEXT[],
    "input" TEXT,
    "output" TEXT,

    CONSTRAINT "Exercise_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "authId" TEXT NOT NULL,
    "solved" INTEGER[],

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Test_exerciseId_key" ON "Test"("exerciseId");

-- CreateIndex
CREATE UNIQUE INDEX "User_authId_key" ON "User"("authId");

-- AddForeignKey
ALTER TABLE "Test" ADD CONSTRAINT "Test_exerciseId_fkey" FOREIGN KEY ("exerciseId") REFERENCES "Exercise"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
