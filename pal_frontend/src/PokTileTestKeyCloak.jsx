import styles from './PokTileTestKeyCloak.module.css';
import { ReactKeycloakProvider } from '@react-keycloak/web'
import keycloak from './keycloak.js'


const PokTileTestKeyCloak = () => {
    return (
        <ReactKeycloakProvider authClient={keycloak}>
            <div id={styles["PokTileTestKeyCloak"]}>
                <h1>Тестируем подключение к Keycloak</h1>            
                <button onClick={() => keycloak.login()}>Login</button>
                <button onClick={() => keycloak.logout()}>Logot</button>                                
            </div>
        </ReactKeycloakProvider>
    )
};

export default PokTileTestKeyCloak;
//<button onClick={() => keycloak.authClient()}>authClient</button>
//<button onClick={() => test(arr)}>test</button>