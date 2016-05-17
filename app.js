var { Router, Route, IndexRoute, IndexLink, Link } = ReactRouter;
var destination = document.querySelector("#apps");
    
    var Home = React.createClass({
      render: function() {
          return (
            <div>
              <h2>HELLO</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <p>Duis a turpis sed lacus dapibus elementum sed eu lectus.</p>
            </div>
          );
        }
    });

    var Contact = React.createClass({
      render: function(){
      return (
        <div>
        <div>Contact</div>
        <h2>ardhanu bismo m p</h2>  
        </div>

      );
      }
    });

    var Stuff = React.createClass({
      render: function(){
        return (
          <div>
            <h2>Portofolio</h2>
            <div>lorem ipsum stuff </div>
          </div>
        );
      }
    });

    var App = React.createClass({
      render: function() {
        return (
          <div>
            <div className="ui pointing menu">
                <IndexLink to="/" className="item" activeClassName="active">Home</IndexLink>
                <Link to="/stuff" className="item" activeClassName="active">Stuff</Link>
                <Link to="/contact" className="item" activeClassName="active">Contact</Link>
              <div className="right menu">
                <div className="item">
                </div>
              </div>
            </div>
            <div className="content">
             {this.props.children}
            </div>
          </div>
        )
      }
    });

    ReactDOM.render(
      <Router>
          <Route path="/" component={App}>
            <IndexRoute component={Home} /> 
            <Route path="/contact" component={Contact} />
            <Route path="/stuff" component={Stuff}> 
            </Route>
          </Route> 
      </Router>,
      destination
    );