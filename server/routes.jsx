var { Route, DefaultRoute } = Router;

// match all routes (.*)
Picker.route('/test', function(params, req, res, next) {

  var location = '/about';

  var routes = (
    <Route path="/" handler={Layout}>

      <DefaultRoute name='home' handler={Home}/>
      <Route name='about' path="about" handler={About}/>

    </Route>
  );

  // this works if you uncomment and go to /test
  //
  //var html = React.renderToString(<Home />);
  //return res.end(html);

  Router.run(routes, location, function(error, initialState, transition) {
    //var html = React.renderToString(React.createElement(Router, {}));
    var html = React.renderToString(<Router {...initialState}/>);
    res.end(html);
  });
});
