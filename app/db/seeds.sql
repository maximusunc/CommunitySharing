-- seeds file
USE stuffshare_db;
-- INSERT INTO Users (name, email, address1, address2, city, state, zip, createdAt, updatedAt)
-- VALUES ("John Doe", "test@123.com", "123 Main St", "", "Anytown", "NC", "27511", "2017-12-10T10:24:00","2017-12-10T10:24:00");

INSERT INTO Items (name, description, UserId, createdAt, updatedAt)
VALUES ("Chainsaw", "18 in. gas powered chain saw","1","2017-12-10T10:24:00","2017-12-10T10:24:00");

INSERT INTO Shares (shared_date, returned_date, createdAt