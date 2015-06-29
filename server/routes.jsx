// match all routes (.*)
Picker.route('/about', function(params, req, res, next) {

  var location = '/about';//new Location(req.path, req.query);
  res.end("Hello " + location);

});
