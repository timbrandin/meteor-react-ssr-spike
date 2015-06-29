/*global React, Layout, Home, About */
var { Route, DefaultRoute, } = Router;

var routes = (
  <Route path="/" handler={Layout}>

    <DefaultRoute name='home' handler={Home}/>
    <Route name='about' path="about" handler={About}/>

  </Route>
);


Meteor.startup(function () {
  Router.run(routes, Router.HistoryLocation, (Root) => {
    React.render(<Root/>, document.body);
  });
});

