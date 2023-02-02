/*
  Warnings:

  - You are about to drop the column `Q_Id` on the `Questions` table. All the data in the column will be lost.
  - You are about to drop the column `UserId` on the `Questions` table. All the data in the column will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `optionA` to the `Questions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `optionB` to the `Questions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `optionC` to the `Questions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `optionD` to the `Questions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `q_set` to the `Questions` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Questions` DROP FOREIGN KEY `Questions_UserId_fkey`;

-- DropIndex
DROP INDEX `Questions_Q_Id_key` ON `Questions`;

-- AlterTable
ALTER TABLE `Questions` DROP COLUMN `Q_Id`,
    DROP COLUMN `UserId`,
    ADD COLUMN `optionA` VARCHAR(191) NOT NULL,
    ADD COLUMN `optionB` VARCHAR(191) NOT NULL,
    ADD COLUMN `optionC` VARCHAR(191) NOT NULL,
    ADD COLUMN `optionD` VARCHAR(191) NOT NULL,
    ADD COLUMN `q_set` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `User`;
