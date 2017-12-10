
USE stuffshare_db;
INSERT INTO Users (name, email, password, address1, address2, city, state, zip, createdAt, updatedAt)
VALUES ("John Doe", "test@123.com","password", "123 Main St", "", "Anytown", "NC", "27511", "2017-12-10T10:24:00","2017-12-10T10:24:00");

INSERT INTO Items (name, description, category, UserId, createdAt, updatedAt)
VALUES ("Chainsaw", "18 in. gas powered chain saw", "Tools", "1","2017-12-10T10:24:00","2017-12-10T10:24:00");

INSERT INTO Shares (share_date, promise_date, createdAt, updatedAt, ItemId, UserId)
VALUES ("2017-12-10T10:24:00", "2017-12-20", "2017-12-10T10:24:00", "2017-12-10T10:24:00", "1", "1" )