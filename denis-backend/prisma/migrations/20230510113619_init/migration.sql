-- CreateTable
CREATE TABLE "Game" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "genre" TEXT NOT NULL,
    "metaRaitng" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Game_name_key" ON "Game"("name");
