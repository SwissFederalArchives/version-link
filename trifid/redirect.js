function factory () {
  return (req, res, next) => {
    // ignore health request from the cluster
    if (req.path === '/health') {
      return next()
    }

    if (req.path.match(/^\/[^/]+$/)) {
      return res.redirect('/')
    }

    next()
  }
}

module.exports = factory
