import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import SearchCategory from '../pages/SearchCategory';
import CategoryCards from '../components/Category';

function SearchCategories() {
    return(
        <BrowserRouter>
        <Switch>
            <Route path='/category' component={CategoryCards}></Route>
            <Route path='/category/:category' component={SearchCategory}></Route>
        </Switch>
        </BrowserRouter>
    )
}

export default SearchCategories;