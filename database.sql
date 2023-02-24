CREATE TABLE Categories (
    CategoryId BIGINT IDENTITY(1,1) PRIMARY KEY,
    Name VARCHAR(255) NOT NULL,
    Description VARCHAR(255)
);

CREATE TABLE Products (
    ProductId BIGINT IDENTITY(1,1) PRIMARY KEY,
    ProductName VARCHAR(255) NOT NULL,
    Price MONEY NOT NULL,
    Description VARCHAR(255),
    Image VARCHAR(255),
    CategoryId BIGINT REFERENCES Categories(CategoryId) NOT NULL
);

CREATE TABLE Clients (
    ClientId BIGINT IDENTITY(1,1) PRIMARY KEY,
    FirstName VARCHAR(255),
    LastName VARCHAR(255),
    Email VARCHAR(255) NOT NULL,
    Phone VARCHAR(255),
    Address1 VARCHAR(255),
    Address2 VARCHAR(255),
    City VARCHAR(255),
    State VARCHAR(2),
    PostalCode VARCHAR(255),
    Country VARCHAR(255) DEFAULT 'USA'
);

CREATE TABLE Orders (
    OrderId BIGINT IDENTITY(1,1) PRIMARY KEY,
    ClientId BIGINT REFERENCES Clients(ClientId),
    SessionId BIGINT,
    Status VARCHAR(255),
    OrderDate DATETIME,
    PaymentMethod VARCHAR(255),
    CCNumber VARCHAR(255),
    ExpDate VARCHAR(255),
    CVV VARCHAR(255)
);



CREATE TABLE Sessions (
    SessionId BIGINT IDENTITY(1,1) PRIMARY KEY,
    IPAddress VARCHAR(255),
    TimeCreated DATETIME,
    TimeDestroyed DATETIME
);

CREATE TABLE OrderDetails (
    OrderDetailId BIGINT IDENTITY(1,1) PRIMARY KEY,
    OrderId BIGINT REFERENCES Orders(OrderId),
    ProductId BIGINT REFERENCES Products(ProductId),
    Quantity INT NOT Null
	);