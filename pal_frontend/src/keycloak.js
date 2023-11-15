import Keycloak from 'keycloak-js'

// Setup Keycloak instance as needed
// Pass initialization options as required or leave blank to load from 'keycloak.json'
const keycloak = new Keycloak(
{
        url: 'http://localhost:8080',
        realm: 'my_realm',
        clientId: 'my_client'
      }
);

export default keycloak
/*
        client_secret: 'chx6IrfZLuT4FuwELcS8El91Qq7JGVmF',
        grant_type: 'client_credentials'
*/
/**
 * {
        url: 'http://localhost:8282',
        realm: 'demo',
        clientId: 'planningPoker'
      }
 */
/**
 * url: 'http://localhost:8282',
        realm: 'myrealm',
        clientId: 'myclient'
 */
/**
 *  url: 'http://localhost:8080',
        realm: 'My_realm',
        clientId: 'My_client'
 */