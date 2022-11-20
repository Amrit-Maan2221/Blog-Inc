CREATE TABLE `pNBaHFAM2K`.`posts` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255) NOT NULL,
  `desc` VARCHAR(10000) NOT NULL,
  `img` VARCHAR(255) NULL,
  `date` DATETIME NOT NULL,
  `uid` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `uid_idx` (`uid` ASC) VISIBLE,
  CONSTRAINT `uid`
    FOREIGN KEY (`uid`)
    REFERENCES `pNBaHFAM2K`.`users` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE);