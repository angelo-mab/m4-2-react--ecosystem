import React from 'react';
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import Header from './Header';
import Home from './Home';
import About from './About';
import ItemDetails from './ItemDetails';

function App(props) {
  return (
    <Router>
      <Wrapper>
        <Header />
        <Main>
          <Switch>
            <Route path="/items/:itemId">
              <ItemDetails />
            </Route>
            <Route path='/about'>
              <About />
            </Route>
            <Route path='/'>
              <Home />
            </Route>
          </Switch>
        </Main>
      </Wrapper>
      <GlobalStyle />
    </Router>
  )
}

const Wrapper = styled.div`
max-width:800px;
margin: auto;
`;

const Main = styled.main`
padding-top: 32px;
padding-bottom: 32px;
`;

const GlobalStyle = createGlobalStyle`
  * {
  font-family: 'Raleway', sans-serif;
box-sizing: border-box;
    }

h1, h2, h3, h4, h5, h6, p, ul, li {
  margin: 0;
  padding: 0;
}

p {
  font-size: 16px;
}

a {
  color: hsl(259deg, 100%, 44%);
}
`;
export default App;
