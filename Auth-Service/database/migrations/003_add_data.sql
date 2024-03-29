INSERT INTO users (phone_number, email, username, phone_number_verified, email_verified, mfa_id, password, createdAt, updatedAt)
VALUES
('1234567890', 'user1@example.com', 'user1', true, true, 'mfa_id_1', 'password1', NOW(), NOW()),
('9876543210', 'user2@example.com', 'user2', false, true, 'mfa_id_2', 'password2', NOW(), NOW()),
('5555555555', 'user3@example.com', 'user3', true, false, 'mfa_id_3', 'password3', NOW(), NOW());
