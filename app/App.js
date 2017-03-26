import React, { Component } from 'react';
import { Router, Route, Link, IndexLink, IndexRoute, hashHistory, browserHistory } from 'react-router';

class App extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Container}>
          <IndexRoute component={Home} />
          <Route path='/address' component={Address}>
            <IndexRoute component={TwitterFeed} />
            <Route path='instagram' component={InstagramFeed} />
            <Route path='query' component={Query} />
          </Route>
          <Route path='/about(/:name)' component={About} />
          <Route path='/namedComponent' component={NamedComponents}>
            <IndexRoute components={{ title: Title, subTitle: SubTitle }} />
          </Route>
          <Route path='*' component={NotFound} />
        </Route>
      </Router>
    );
  }
}

const Nav = () =>
  <div>
    <IndexLink activeClassName='active' to='/'>Home</IndexLink>&nbsp;
    <IndexLink activeClassName='active' to='/address'>Address</IndexLink>&nbsp;
    <IndexLink activeClassName='active' to='/about'>About</IndexLink>&nbsp;
    <IndexLink activeClassName='active' to='/namedComponent'>Named Components</IndexLink>&nbsp;
    <IndexLink activeClassName='active' to={{
      pathname: '/address/query',
      query: {message: 'Hello from Route Query'}
    }}>Route Query</IndexLink>
  </div>;

const Container = props =>
  <div>
    <Nav />
    {props.children}
  </div>;

const Home = () => <h1>Hello World!</h1>;

const Address = props =>
  <div>
    <br />
    <Link to='/address'>Twitter Feed</Link>&nbsp;
    <Link to='/address/instagram'>Instagram Feed</Link>
    <h1>We are at Dulverton Avenue</h1>
    {props.children}
  </div>;

const InstagramFeed = () => <h3>Instagram Feed</h3>;

const TwitterFeed = () => <h3>Twitter Feed</h3>;

const About = props => 
  <div>
    <h3>About Us</h3>
    {props.params.name && <h2>Hello {props.params.name}</h2>}
  </div>;

const NamedComponents = props =>
  <div>
    {props.title}<br />
    {props.subTitle}
  </div>;

const Title = () => <h1>Hello from Title component!</h1>;

const SubTitle = () => <h1>Hello from SubTitle component!</h1>;

const Query = props => <h2>{props.location.query.message}</h2>;

const NotFound = () => <h1>404... Page not found!</h1>;

export default App;