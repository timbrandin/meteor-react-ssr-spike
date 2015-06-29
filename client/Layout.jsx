var { RouteHandler } = Router;

Layout = React.createClass({
  render () {
    return (
      <div>
        <div className="header">
          Header
        </div>

        <RouteHandler/>

        <div className="footer">
          Footer
        </div>
      </div>
    )
  }
});

