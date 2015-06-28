var {
  Route,
  NotFoundRoute,
  DefaultRoute
} = ReactRouter;

var routes = (
  <Route name="root" handler={Home} path="/">
    <Route name="todoList" path="/posts" handler={PostsIndex} />
  </Route>
)

var router = ReactRouter.create({
  routes: routes,
  location: ReactRouter.HistoryLocation
});


Meteor.startup(function () {
  router.run(function (Handler, state) {
    React.render(<Handler />, document.getElementById('app-container'));
  });
});

