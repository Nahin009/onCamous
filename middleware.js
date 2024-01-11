const checkLoggedIn = (req) => {
    return req.headers.authorization === 'Bearer validToken';
};

const protectRoute = (req, res, next) => {
    if (checkLoggedIn(req)) {
        next();
    } else {
        req.session.redirectTo = req.originalUrl;
        res.redirect('/login');
    }
};

export { protectRoute };
