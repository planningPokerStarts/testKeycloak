import React, {useEffect, useState} from "react";
import Keycloack from "keycloak-js";

const useAuth = () => {
        const [isLogin, setLogin] = useState(false);
        useEffect(() => {
            const client = new Keycloack({
                url: 'http://localhost:8282',
                realm:'myrealm',
                clientId: 'myclient',
            })
            
            client.init({ onLoad: "login-required"}).then((res) => setLogin(res));
        }, [])
    return isLogin;
};
export default useAuth;
/**
 *                 url: 'http://localhost:8282',
                realm:import.meta.env.VITE_KEYCLOAC_REALM,
                clientID: import.meta.env.VITE_KEYCLOAC_CLIENT,
 */
//client.init({ onLoad: "login-required"}).then((res) => setLogin(res));