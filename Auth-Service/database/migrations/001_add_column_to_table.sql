CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    phone_number VARCHAR(50) NOT NULL,
    email VARCHAR(50) UNIQUE,
    username VARCHAR(50),
    phone_number_verified BOOLEAN NOT NULL DEFAULT false,
    email_verified BOOLEAN NOT NULL DEFAULT false,
    mfa_id VARCHAR(50),
    password VARCHAR(50),
    createdAt DATE,
    updatedAt DATE
)
