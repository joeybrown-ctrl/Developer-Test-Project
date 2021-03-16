import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Wrapper from './components/Wrapper';
import SearchCategories from './pages/SearchCategories';
import ProductPage from './pages/ProductPage';
import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {

  const styles = {
    gridContainer: {
      display: 'grid',
      gridTemplateAreas: 
      'main',
      gridTemplateColumns: '1fr',
      gridTemplateRows: '60px 1fr 60px',
      height: '100vh'
    },

    main: {
      gridArea: 'main',
      backgroundColor: '#ffff',
      padding: '10px'
    }
  }


  return (
    <Wrapper>
      <BrowserRouter>
      <Nav />
        <div style={styles.gridContainer}>
          <div style={styles.main}>
            <Switch>
              <Route path="/product/:id" component={ProductPage}></Route>
              <Route path="/" component={Home} exact></Route>
              <Route path="/category" component={SearchCategories}></Route>
            </Switch>
          </div>
        </div>
        <Footer />
      </BrowserRouter>
    </Wrapper>

  );
}

export default App;
