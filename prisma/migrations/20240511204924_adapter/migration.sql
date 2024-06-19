/*
  Warnings:

  - You are about to drop the column `Amount` on the `card` table. All the data in the column will be lost.
  - Added the required column `amount` to the `Card` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `card` DROP COLUMN `Amount`,
    ADD COLUMN `amount` INTEGER NOT NULL;
