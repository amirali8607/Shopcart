/*
  Warnings:

  - You are about to drop the `shopcart` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `card` DROP FOREIGN KEY `Card_authorId_fkey`;

-- DropTable
DROP TABLE `shopcart`;

-- AddForeignKey
ALTER TABLE `Card` ADD CONSTRAINT `Card_authorId_fkey` FOREIGN KEY (`authorId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
