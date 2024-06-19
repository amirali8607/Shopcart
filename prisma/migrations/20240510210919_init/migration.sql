/*
  Warnings:

  - You are about to drop the column `authorId` on the `card` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `card` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `card` table. All the data in the column will be lost.
  - Added the required column `Amount` to the `Card` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `Card` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `card` DROP FOREIGN KEY `Card_authorId_fkey`;

-- AlterTable
ALTER TABLE `card` DROP COLUMN `authorId`,
    DROP COLUMN `createdAt`,
    DROP COLUMN `updatedAt`,
    ADD COLUMN `Amount` INTEGER NOT NULL,
    ADD COLUMN `price` BIGINT NOT NULL;
