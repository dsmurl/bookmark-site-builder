-- CreateTable
CREATE TABLE "Article" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "createDate" DATETIME NOT NULL,
    "lastUpdate" DATETIME NOT NULL
);
