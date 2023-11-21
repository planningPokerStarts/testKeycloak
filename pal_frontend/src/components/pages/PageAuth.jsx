import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { useKeycloak } from '@react-keycloak/web';
import ButtonClassic from "../UI/buttons/ButtonClassic";
//import { useEffect } from 'react';
//import keycloak from '../../keycloak.js'

const PageAuth = () => {
    const { keycloak } = useKeycloak()
    const navigate = useNavigate(); 
    function navToMain() {
        navigate("/");
    }
    const [answer, setAnswer] = useState([]);
    function testGetRequest() {
        console.log("анонимный запрос без токена")
    

        var URL = "http://localhost:8080/api/anonymous";
        

        const params = {
            method: "GET",
            headers: { "Content-Type": "application/json;charset=UTF-8" },
            mode: "no-cors" // same-origin, no-cors, cors
        }  
        getData(URL, params)
       // console.log(answer)
    }   

    function getData(URL, params) {
            fetch(URL, params)
                .then(response => response.text())
                .then(data => console.log(data))
                
                .catch(error => console.log(error))
        }
    

    return (     
            !keycloak.authenticated ? 
                <div>
                    <h1>Тест страница (выглядит по-разному для зарегистрированных и не зарегистрированных пользователей)</h1>
                    <ButtonClassic onClick={navToMain}>На главную</ButtonClassic>
                    <h3 style={{color: "red"}}>User is NOT authenticated</h3>
                    <ButtonClassic onClick={() => keycloak.login()}>Login</ButtonClassic>
                    <ButtonClassic onClick={testGetRequest}>
                        Получить данные с сервера для всех
                    </ButtonClassic>
                </div>
                :
                <div>
                    <h1>Тест страница (выглядит по-разному для зарегистрированных и не зарегистрированных пользователей)</h1>
                    <ButtonClassic onClick={navToMain}>На главную</ButtonClassic>
                    <h3 style={{color: "green"}}>User is authenticated</h3>
                    <ButtonClassic onClick={testGetRequest}>
                        Получить данные с сервера для всех
                    </ButtonClassic>
                    <ButtonClassic onClick={testGetRequest}>
                        Получить данные с сервера для user
                    </ButtonClassic>
                    <ButtonClassic onClick={testGetRequest}>
                        Получить данные с сервера для admin
                    </ButtonClassic>
                    <ButtonClassic onClick={() => keycloak.logout()}>Logout</ButtonClassic>
                    <textarea>{answer}</textarea>
                </div> 
    )      
};

export default PageAuth;
/**
 * return (
        <div>
            <h1>Тест страница (доступна только зарегистрированным)</h1>
            <button onClick={navToMain}>На главную</button>
        </div>
    );
 */
/**
 *             !!keycloak.authenticated ?
                <div>
                    <ButtonClassic onClick={() => keycloak.logout()}>
                        Logout
                    </ButtonClassic>
                    <ButtonClassic onClick={testGetRequest}>
                        Получить данные с сервера
                    </ButtonClassic>
                </div>
            :
           
                <ButtonClassic onClick={() => keycloak.login()}>Login</ButtonClassic>
 */
/**
 *     return (
        <div>
            <h1>Тест страница (выглядит по-разному для зарегистрированных и не зарегистрированных пользователей)</h1>
            <ButtonClassic onClick={navToMain}>На главную</ButtonClassic>
            <div>{`User is ${
                !keycloak.authenticated ? 'NOT ' : ''
            }authenticated`} 
            </div>
            <div style={{color: "red"}}>{`${
                !keycloak.authenticated ? 'Не видно :(' : 'Видно :)' 
            }`} 
            </div>
        
            {!!keycloak.authenticated && (
                <ButtonClassic onClick={() => keycloak.logout()}>
                    Logout
                </ButtonClassic>
                
            )}
            {!keycloak.authenticated && (
                <ButtonClassic onClick={() => keycloak.login()}>Login</ButtonClassic>
            )}
        </div>
    )      

 */
/**
 * var url = "http://localhost:8081/api/v1/rooms";
    const [name, setName] = useState ('')
    const SendRoom = () => {

//    const url = "http://158.160.12.143:8081/api/v1/rooms"
  
    const postBody = {
        name,
        owner: "Test author"
        
      };
    console.log(postBody)

    const param = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
        body: JSON.stringify(postBody)
    };
    
      fetch(url, param).
        then(response => response.json()).
        then(result => {console.log(result); alert("РљРѕРјРЅР°С‚Р° СЃРѕР·РґР°РЅР°!")}).
        catch(error => {alert("РЎРµСЂРІРµСЂ СЃРµР№С‡Р°СЃ РЅРµ РґРѕСЃС‚СѓРїРµРЅ, РїРѕРїСЂРѕР±СѓР№С‚Рµ СЃРѕР·РґР°С‚СЊ РєРѕРјРЅР°С‚Сѓ РїРѕР·Р¶Рµ!")});  		
      
 */

        /**
         * body: undefined, // string, FormData, Blob, BufferSource РёР»Рё URLSearchParams
        referrer: "about:client", // РёР»Рё "" РґР»СЏ С‚РѕРіРѕ, С‡С‚РѕР±С‹ РЅРµ РїРѕСЃР»Р°С‚СЊ Р·Р°РіРѕР»РѕРІРѕРє Referer,
        // РёР»Рё URL СЃ С‚РµРєСѓС‰РµРіРѕ РёСЃС‚РѕС‡РЅРёРєР°
        referrerPolicy: "strict-origin-when-cross-origin", // no-referrer-when-downgrade, no-referrer, origin, same-origin...
        mode: "cors", // same-origin, no-cors
        credentials: "same-origin", // omit, include
        cache: "default", // no-store, reload, no-cache, force-cache РёР»Рё only-if-cached
        redirect: "follow", // manual, error
        integrity: "", // РєРѕРЅС‚СЂРѕР»СЊРЅР°СЏ СЃСѓРјРјР°, РЅР°РїСЂРёРјРµСЂ "sha256-abcdef1234567890"
        keepalive: false, // true
        signal: undefined, // AbortController, С‡С‚РѕР±С‹ РїСЂРµСЂРІР°С‚СЊ Р·Р°РїСЂРѕСЃ
        window: window // null
         */