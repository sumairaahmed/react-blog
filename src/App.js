import Navigation from "./components/Navigation"
import {Route, Switch} from 'react-router-dom'
import Addblog from "./pages/Addblog"
import Viewblog from "./pages/Viewblog"
import Favourites from "./pages/Favourites"

function App() {
  return (
    <div>
    <Navigation />
    <Switch>
    <Route path='/' exact>
      <Viewblog />
    </Route>
    <Route path='/addblog'>
      <Addblog />
    </Route>
    <Route path='/favourites'>
      <Favourites />
    </Route>
    </Switch>
    </div>
  );
}

export default App;
