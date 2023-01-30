-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `U_Id` VARCHAR(191) NOT NULL,
    `username` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `User_U_Id_key`(`U_Id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Questions` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `Q_Id` VARCHAR(191) NOT NULL,
    `question` VARCHAR(191) NOT NULL,
    `options` VARCHAR(191) NOT NULL,
    `answer` VARCHAR(191) NOT NULL,
    `UserId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Questions_Q_Id_key`(`Q_Id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Questions` ADD CONSTRAINT `Questions_UserId_fkey` FOREIGN KEY (`UserId`) REFERENCES `User`(`U_Id`) ON DELETE RESTRICT ON UPDATE CASCADE;
