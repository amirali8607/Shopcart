/*
  Warnings:

  - Added the required column `authorId` to the `Card` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `card` ADD COLUMN `authorId` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `Shopcart` (
    `id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Card` ADD CONSTRAINT `Card_authorId_fkey` FOREIGN KEY (`authorId`) REFERENCES `Shopcart`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
