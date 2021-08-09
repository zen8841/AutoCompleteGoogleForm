// ==UserScript==
// @name         AutoComplete
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Fill the form automatically
// @author       Zen Wen
// @match        https://docs.google.com/forms/*
// @exclude      https://docs.google.com/forms/*&?123
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const userData = {
        Class : yourClass,
        Seat : yourSeatNum,
        Name : "yourName",
        ID : yourID,
        Food : "飯"
    };
    var oldUrlPath = window.location.pathname;
    var newURL = oldUrlPath + "&?123";
    if(FB_PUBLIC_LOAD_DATA_[1][1][0][1] === "班級"){
        const entryPoint = {
            Class : FB_PUBLIC_LOAD_DATA_[1][1][0][4][0][0],
            Seat :  FB_PUBLIC_LOAD_DATA_[1][1][1][4][0][0],
            Name :  FB_PUBLIC_LOAD_DATA_[1][1][2][4][0][0],
            ID :    FB_PUBLIC_LOAD_DATA_[1][1][3][4][0][0]
        };
        newURL = oldUrlPath + `?entry.${entryPoint.Class}=${userData.Class}&entry.${entryPoint.Seat}=${userData.Seat}&entry.${entryPoint.Name}=${userData.Name}&entry.${entryPoint.ID}=${userData.ID}` + "&?123";
    }
    else if(FB_PUBLIC_LOAD_DATA_[1][1][0][1] == "座號"){
        const entryPoint = {
            Seat : FB_PUBLIC_LOAD_DATA_[1][1][0][4][0][0],
            Name : FB_PUBLIC_LOAD_DATA_[1][1][1][4][0][0],
            Food : FB_PUBLIC_LOAD_DATA_[1][1][2][4][0][0],
        };
        newURL = oldUrlPath + `?entry.${entryPoint.Seat}=${userData.Seat}&entry.${entryPoint.Name}=${userData.Name}&entry.${entryPoint.Food}=${userData.Food}` + "&?123";
    }
    window.location.replace (newURL);
})();
// x = number of question
// FB_PUBLIC_LOAD_DATA_[1][1][x][1] = title of question x
// FB_PUBLIC_LOAD_DATA_[1][1][x][4][0][0] = entrypoint of question x
