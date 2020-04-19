// ==UserScript==
// @name         Posterdb Cache
// @version      0.1
// @description  replace posterdb links with cloudformation cache links
// @author       ghostserverd
// @include      https://theposterdb.com/*
// @include      https://dhrxpqdiqqa4u.cloudfront.net/*
// @grant        none
// @run-at       document-start
// @require  https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js
// ==/UserScript==

var $ = window.jQuery;

(function() {
    'use strict';
    var cache_domain = "dhrxpqdiqqa4u.cloudfront.net";

    // set all links to the cache domain
    var links = document.links;
    var link;
    for(var i=links.length-1; i >=0; i--){
        link = links[i];
        link.href = link.href.replace("images.theposterdb.com", cache_domain);
        link.href = link.href.replace("theposterdb.com", cache_domain);
    }

    // set the action variables to the cache domain
    Object.defineProperty(window, 'page_single', { value: "https://" + cache_domain + "/poster/_id_" });
    Object.defineProperty(window, 'page_all', { value: "https://" + cache_domain + "/posters/_id_" });
    Object.defineProperty(window, 'page_user', { value: "https://" + cache_domain + "/user/_username_" });

    // set the form search to the cache domain
    $("form").attr("action", "https://" + cache_domain + "/search")
})();
