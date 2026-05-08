/*
  Warnings:

  - You are about to drop the column `appName` on the `App` table. All the data in the column will be lost.
  - Added the required column `name` to the `App` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "App" DROP COLUMN "appName",
ADD COLUMN     "description" TEXT,
ADD COLUMN     "name" TEXT NOT NULL;
