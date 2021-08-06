const Express = require('express');

const app = Express();
const PORT = process.env.PORT || 3000;

const setCSPHandler = (req, res, next) => {
  res.set('Content-Security-Policy', "default-src 'self'");
  next();
};

function startServer() {
  app.use(setCSPHandler);
  app.use(Express.static('build'));
  app.use('*', (req, res) => res.redirect('/'));
  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
}

startServer();
