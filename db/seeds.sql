
USE stuffshare_db;
INSERT INTO Users (name, email, password, address1, address2, city, state, zip, createdAt, updatedAt)
VALUES ("John Doe", "test@123.com","password", "123 Main St", "", "Anytown", "NC", "27511", "2017-12-10T10:24:00","2017-12-10T10:24:00"),("Jane Doe", "456@email.com","password", "456 End St", "", "Anytown", "NC", "27511", "2017-12-25T10:24:00","2017-12-25T10:24:00"
);

INSERT INTO Items (name, description, category, UserId, createdAt, updatedAt)
VALUES ("Chainsaw", "18 in. gas powered chain saw", "Tools", "1","2017-12-10T10:24:00","2017-12-10T10:24:00"),("Router", "electric table router", "Tools", "1","2017-12-25T10:24:00","2017-12-25T10:24:00"
);

INSERT INTO Shares (share_date, promise_date, createdAt, updatedAt, ItemId, UserId, borrowerId)
VALUES ("2017-12-10T10:24:00", "2017-12-20", "2017-12-10T10:24:00", "2017-12-10T10:24:00", "1", "1", "1" ),("2017-12-25T10:24:00", "2018-01-02", "2017-12-10T10:24:00", "2017-12-10T10:24:00", "2", "1", "2"
)