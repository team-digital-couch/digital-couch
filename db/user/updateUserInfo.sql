UPDATE user_info
SET first_name = $2,
    last_name = $3,
    pronouns = $4,
    avatar = $5,
    insurance_card = $6,
    phone = $7,
    email = $8,
    billing_address = $9,
    billing_city = $10,
    billing_zipcode = $11,
    address = $12,
    city = $13,
    zipcode = $14,
    hours = $15,
    bio = $16
WHERE id = $1;