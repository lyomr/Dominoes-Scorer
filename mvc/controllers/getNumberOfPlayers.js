// Controller that handles the post for number of players from quickPlayMode.html and arcadePlayMode.html and recursive sends that data back to both pages (recursive).
module.exports = function(app) {
  app.post('/arcadePlayMode', function(req, res) {
    var model = require('models/global')(req, res);
    model.numberOfPlayers = req.body.numberOfPlayers;
    model.pageDescription = "Select the number of players below, login below and start playing.";
    res.render('arcadePlayMode', model);
  });
  app.post('/quickPlayMode', function(req, res) {
    var model = require('models/global')(req, res);
    model.numberOfPlayers = req.body.numberOfPlayers;
    model.pageDescription = "Select the number of players below, login below and start playing.";
    res.render('quickPlayMode', model);
  });
};