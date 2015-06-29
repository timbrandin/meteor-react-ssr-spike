var { Link } = Router;

About = React.createClass({
  render: function () {
    return (
      <div>
        <h2>About</h2>
        <Link to='home'>Home</Link>
      </div>
    );
  }
});

