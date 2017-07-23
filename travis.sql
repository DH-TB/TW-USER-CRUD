# Create DB
CREATE DATABASE IF NOT EXISTS `UserManage` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `UserManage`;

# Create Table
CREATE TABLE IF NOT EXISTS `userInfo` (
    id int auto_increment primary key not null,
    username varchar(20) CHARACTER SET utf8,
                                name varchar(20) CHARACTER SET utf8,
                                age int,
                                sex char(20) CHARACTER SET utf8,
                                phone char(20) CHARACTER SET utf8,
                                email char(20) CHARACTER SET utf8,
                                remark char(20) CHARACTER SET utf8)