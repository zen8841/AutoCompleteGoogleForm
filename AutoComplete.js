// ==UserScript==
// @name         AutoComplete
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Fill the form automatically
// @author       Zen Wen
// @match        https://docs.google.com/forms/*
// @exclude      https://docs.google.com/forms/*&?123
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    if(FB_PUBLIC_LOAD_DATA_[1][1][0][1] === "班級"){
        const userData = {
            Class : 217,
            Seat : 1,
            Name : /*"your name"*/,
            ID : /*Your ID last 5 Number*/
        };
        const entryPoint = {
            Class : FB_PUBLIC_LOAD_DATA_[1][1][0][4][0][0],
            Seat :  FB_PUBLIC_LOAD_DATA_[1][1][1][4][0][0],
            Name :  FB_PUBLIC_LOAD_DATA_[1][1][2][4][0][0],
            ID :    FB_PUBLIC_LOAD_DATA_[1][1][3][4][0][0]
        };
        var oldUrlPath = window.location.pathname;
        var newURL = oldUrlPath + `?entry.${entryPoint.Class}=${userData.Class}&entry.${entryPoint.Seat}=${userData.Seat}&entry.${entryPoint.Name}=${userData.Name}&entry.${entryPoint.ID}=${userData.ID}` + "&?123";
        window.location.replace (newURL);
    }
})();
// x = number of question
// FB_PUBLIC_LOAD_DATA_[1][1][x][1] = title
// FB_PUBLIC_LOAD_DATA_[1][1][x][4][0][0] = entrypoint of question x
