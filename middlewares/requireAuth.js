module.exports = (req, res, next) => {
  if (req.isAuthenticated()) {
    // 認証済
    return next();
  } else {
    // 未認証
    res.redirect('/login');
  }
};
