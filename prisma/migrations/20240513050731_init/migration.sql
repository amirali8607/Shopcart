/*
  Warnings:

  - You are about to drop the column `authorId` on the `card` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `card` DROP FOREIGN KEY `Card_authorId_fkey`;

-- AlterTable
ALTER TABLE `card` DROP COLUMN `authorId`;

-- CreateTable
CREATE TABLE `Shopitem` (
    `id` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `cardId` VARCHAR(191) NOT NULL,
    `amount` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Shopitem` ADD CONSTRAINT `Shopitem_cardId_fkey` FOREIGN KEY (`cardId`) REFERENCES `Card`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Shopitem` ADD CONSTRAINT `Shopitem_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
