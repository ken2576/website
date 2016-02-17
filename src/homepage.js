import React from 'react';

export default React.createClass({
  render: function() {
    return (
      <div className="homepage">
        <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
          <div className="container">
            <div className="navbar-header">
              <button className="navbar-toggle collapsed" aria-controls="navbar" aria-expanded="false" data-target="#navbar" data-toggle="collapse" type="buttom">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand">About me</a>
            </div>
            <div id="navbar" className="collapse navbar-collapse">
            </div>
          </div>
        </nav>
        <div className="container">
          <div className="jumbotron">
            <h1>{"Hi I'm Ken"}</h1>
            <p className="lead">{"I'm currently a student in NTUEE."}</p>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-10">
              <h2>Lorem Ipsum</h2>
              <p>{"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lacinia luctus laoreet. Nulla efficitur, enim non lacinia vestibulum, sapien nisi placerat nibh, at vestibulum lectus diam ac est. Pellentesque ultricies arcu enim, sed dictum massa facilisis ut. Ut sollicitudin, metus non euismod vestibulum, erat dolor faucibus nulla, eu tempor massa nunc at sapien."}</p>
            </div>
          </div>
          <footer>
          {"Email: b02901068@ntu.edu.tw"}
          </footer>  
        </div>
      </div>
    );
  },
});
