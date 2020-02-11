module.exports = {
    usersOnly: (req, res, next) => {
        if(!req.session.user) {
            return res.status(401).send({message:'Please log in'});
        }
        next();
    },
    providersOnly: (req, res, next) => {
        if(!req.session.user.isProvider) {
            return res.status(403).send({message:'You are not a provider'});
        }
        next();
    }
}