const bcrypt = require('bcrypt');

const register = async (req, res) => {
    const db = req.app.get('db');
    const { username, password, isProvider, email } = req.body;

    const existingUser = await db.user.checkForUser(username);

    if(existingUser[0]){
        res.status(409).json({message:'Username already taken, please choose another'});
    } else {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);

        const newUser = await db.user.registerUser(username, hash, isProvider);
        const result = await db.user.createInfoRow(newUser[0].user_id, email);

        req.session.user = {
            userId: newUser[0].user_id,
            username: newUser[0].username,
            email,
            isProvider: newUser[0].is_provider
        }
        res.status(200).json(req.session.user);
    }
}

const login = async (req, res) => {
    const db = req.app.get('db');
    const { username, password } = req.body;

    const existingUser = await db.user.checkForUser(username);

    if(!existingUser[0]){
        res.status(403).json({message:'Please create an account'})
    } else {
        const authUser = bcrypt.compareSync(password, existingUser[0].hash);

        if(!authUser){
            res.status(403).json({message:'Username or password incorrect, please try again'})
        } else {
            const userInfo = await db.user.getUserInfo(existingUser[0].user_id)
            req.session.user = {
                userId: existingUser[0].user_id,
                username: existingUser[0].username,
                email: userInfo[0].email,
                isProvider: existingUser[0].is_provider
            }
            res.status(200).json(req.session.user)
        }
    }
}

const logout = (req, res) => {
    req.session.destroy();
    res.status(200).json({message:'Logout successful'})
}

const me = (req, res) => {
    res.status(200).json(req.session.user)
}

module.exports = {
    register,
    login,
    logout,
    me
}