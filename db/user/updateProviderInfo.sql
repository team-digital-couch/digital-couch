UPDATE user_info
SET first_name = $2,
    last_name = $3,
    pronouns = $4,
    avatar = $5,
    phone = $6,
    email = $7,
    address = $8,
    city = $9,
    zipcode = $10,
    hours = $11,
    bio = $12
WHERE user_id = $1;