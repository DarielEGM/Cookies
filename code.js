"use strict";

const newDateUTC = days =>{
    let date = new Date();
    date.setTime(date.getTime() + days*1000*60*60*24); 
    return date.toUTCString();
}

const creatCookie = (name, days)=>{
    let expires = newDateUTC(days);

    document.cookie = `${name};expires=${expires}`;
};

creatCookie("user=dalto","4");
creatCookie("name=jose","2");
creatCookie("language=english","5");

const getCookie = cookieName=>{
    let cookies = document.cookie;
    cookies = cookies.split(";");
    for(let i = 0; cookies.length > i; i++){
        let cookie = cookies[i].trim();
        if(cookie.startsWith(cookieName)){
            return cookie.split("=")[1];
        }
        if(i == (cookies.length-1)){
           return "No cookies with that value.";
        }
    }
}




