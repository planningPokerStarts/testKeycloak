import './App.css';
//import PokTileTestKeyCloak from './PokTileTestKeyCloak';
//import Protected from './components/Protected';
//import Public from './components/Public';
//import useAuth from './hooks/useAuth';
import AppRouter from "./components/AppRouter/AppRouter"
import { BrowserRouter} from "react-router-dom";
import { ReactKeycloakProvider } from '@react-keycloak/web'
import keycloak from './keycloak.js'

function App() {
  //const isLogin = useAuth();
  return (
    <div className="App">
      <ReactKeycloakProvider authClient={keycloak}>
        <BrowserRouter >
            <AppRouter />
        </BrowserRouter>
      </ReactKeycloakProvider>
    </div>
  );
}

export default App;
/**
 return (
    <div className="App">
      <PokTileTestKeyCloak />
    </div>
  );
 */
/**
 * const isLogin = useAuth();
  return isLogin ? <Protected/> : <Public/>;
 */

  /**
   *    <BrowserRouter >
          <AppRouter />
        </BrowserRouter>
   */