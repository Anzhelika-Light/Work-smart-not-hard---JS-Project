!function(){function e(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},o=r.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in a){var t=a[e];delete a[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){a[e]=t},r.parcelRequired7c6=o),o.register("iE7OH",(function(t,r){var n,a;e(t.exports,"register",(function(){return n}),(function(e){return n=e})),e(t.exports,"resolve",(function(){return a}),(function(e){return a=e}));var o={};n=function(e){for(var t=Object.keys(e),r=0;r<t.length;r++)o[t[r]]=e[t[r]]},a=function(e){var t=o[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),o.register("aNJCr",(function(t,r){var n;e(t.exports,"getBundleURL",(function(){return n}),(function(e){return n=e}));var a={};function o(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}n=function(e){var t=a[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(e)return o(e[2])}return"/"}(),a[e]=t),t}})),o("iE7OH").register(JSON.parse('{"2Y0K8":"library.9e377172.js","g5Rti":"empty-poster.88e9f0bc.jpg","5UbS1":"index.9bd496b7.css","7nwxg":"library.c48d48fc.js"}')),o("fkNhc"),o("gQOBw"),o("6JpON"),o("cokon"),o("9t7bQ");o("387si");var i=o("bpxeT"),s=o("2TvXO");o("6JpON");var c;c=o("aNJCr").getBundleURL("2Y0K8")+o("iE7OH").resolve("g5Rti");var l="https://image.tmdb.org/t/p/original";function d(e){var r=e.poster_path,n=e.title,a=e.genre_ids,o=e.release_date,i=e.vote_average,s=e.id,d="".concat(l).concat(r),u="".concat(o.slice(0,4));d=r||function(e){var t=new Image;t.addEventListener("load",(function(){return!0})),t.addEventListener("error",(function(){return!1})),t.src=e}(d)?"".concat(l).concat(r):"".concat(t(c)),o||(u="-");var p=Number(i).toFixed(1);return"\n\t<li class='trending-gallery__item' data-id='".concat(s,"'>\n    <img src=\"").concat(d,'" alt="The poster of ').concat(n,' film" class="library-gallery__image" data-id=\'').concat(s,"'/>\n    <div class=\"trending-gallery__wrapper\">\n    \t<h3 class='trending-gallery__title' data-id='").concat(s,'\'><span class="title-modal-open">').concat(n,"</span></h3>\n    \t<p class='trending-gallery__info'>").concat(a," | <span class='movie-year'>").concat(u,"</span> <span class='movie-rating'>").concat(p,"</span></p>\n    </div>\n  </li>\n\t")}var u=o("kvC6y"),p=o("asGRZ"),v=document.querySelector(".js-library-btn--watched"),f=document.querySelector(".js-library-btn--queue"),m=document.querySelector(".movie-list");function g(){return(g=t(i)(t(s).mark((function e(){var r,n,a,o;return t(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return minPage=Math.ceil(1),maxPage=Math.floor(100),r=Math.floor(Math.random()*(maxPage-minPage+1)+minPage),e.prev=3,n="https://image.tmdb.org/t/p/original",m.innerHTML="",e.next=8,(0,p.default)(r);case 8:a=e.sent,o="<h3 class='library-gallery-recomend'>RECOMMENDATIONS</h3><div class='library-gallery__default'><img class='library-gallery__default-poster' src=".concat(n).concat(a.results[1].poster_path,">\n    <div><p class='library-gallery__default__title'>").concat(a.results[1].title,"</p>\n    <p class='library-gallery__default-overview'>").concat(a.results[1].overview,"</p></div>\n    </div>\n    \n    <div class='library-gallery__default'><img class='library-gallery__default-poster' src=").concat(n).concat(a.results[2].poster_path,">\n    <div><p class='library-gallery__default__title'>").concat(a.results[2].title,"</p>\n    <p class='library-gallery__default-overview'>").concat(a.results[2].overview,"</p></div>\n    </div>\n    \n    <div class='library-gallery__default'><img class='library-gallery__default-poster' src=").concat(n).concat(a.results[3].poster_path,">\n    <div><p class='library-gallery__default__title'>").concat(a.results[3].title,"</p>\n    <p class='library-gallery__default-overview'>").concat(a.results[3].overview,"</p></div>\n    </div>"),m.innerHTML=o,e.next=16;break;case 13:e.prev=13,e.t0=e.catch(3),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[3,13]])})))).apply(this,arguments)}function y(e){try{var t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.log("Everyone makes mistakes, this is yours:",e.message)}}!function(){g.apply(this,arguments)}(),v.addEventListener("click",(function(){(0,u.spinnerStart)();var e=y("movieWatched");if(0===e.length)return m.innerHTML="<p class='no-movies'>It seems you haven't watched any movie. You should try, it's fun🎭</p>",void setTimeout(u.spinnerStop,500);var t=e.map((function(e){return d(e)})).join("");m.innerHTML=t,setTimeout(u.spinnerStop,500)})),f.addEventListener("click",(function(){(0,u.spinnerStart)();var e=y("movieQueue");if(0===e.length)return m.innerHTML="<p class='no-movies'>The queue is empty. Add all Harry Potter movies - you won't regret this✨</p>",void setTimeout(u.spinnerStop,500);var t=e.map((function(e){return d(e)})).join("");m.innerHTML=t,setTimeout(u.spinnerStop,500)})),o("iSEZc"),o("4F07H");u=o("kvC6y");o("9S1Ph");i=o("bpxeT"),s=o("2TvXO");var h=o("4Nugj"),_=o("6JpON"),w=o("h9dm7"),b=o("cDXQO");o("4VPdD"),o("dTK2M");h.refs.allCardsSection;var S=h.refs.modal,E=h.refs.overflow,T=h.refs.closeBtn,x=h.refs.innerModal,L=h.refs.body,O=h.refs.sectionLibrary,k=JSON.parse(localStorage.getItem("movieQueue"))||[],N=JSON.parse(localStorage.getItem("movieWatched"))||[];function M(){var e=localStorage.getItem("currentFilmList");return JSON.parse(e)}function H(e){return R.apply(this,arguments)}function R(){return(R=t(i)(t(s).mark((function e(r){var n,a,o,i,c;return t(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("IMG"!==r.target.nodeName&&"SPAN"!==r.target.nodeName){e.next=20;break}return S.classList.remove("hidden-movie-modal"),E.classList.remove("hidden-movie-modal"),E.classList.add("overflow-height"),O.removeEventListener("click",H),document.addEventListener("keydown",I),T.addEventListener("click",A),E.addEventListener("click",q),n="IMG"===r.target.nodeName?r.target.dataset.id:r.target.closest("li").dataset.id,e.next=11,J(n);case 11:a=window.scrollY,L.style.position="fixed",L.style.top="-".concat(a,"px"),o=document.querySelector(".modal__btn-watched"),i=document.querySelector(".modal__btn-queue"),c=document.querySelector(".movie-modal__btn-watch-trailer"),o.addEventListener("click",D),i.addEventListener("click",F),c.addEventListener("click",b.onTrailerBtnClick);case 20:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function q(e){e.currentTarget===e.target&&A()}function I(e){"Escape"===e.code&&A()}function A(){S.classList.add("hidden-movie-modal"),E.classList.add("hidden-movie-modal"),E.classList.remove("overflow-height"),O.addEventListener("click",H),document.removeEventListener("keydown",A),T.removeEventListener("click",A),E.removeEventListener("click",q);var e=L.style.top;L.style.position="",L.style.top="",window.scrollTo(0,-1*parseInt(e||"0"))}function J(e){return C.apply(this,arguments)}function C(){return(C=t(i)(t(s).mark((function e(r){var n,a;return t(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=M(),e.next=3,(0,w.renderModal)(n,r,N,k);case 3:a=e.sent,x.innerHTML=a;case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function D(e){return j.apply(this,arguments)}function j(){return(j=t(i)(t(s).mark((function e(r){var n,a,o,i;return t(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=document.querySelector(".movie-modal__main"),console.log("modalEl",n.dataset),a={poster_path:n.dataset.poster,title:n.dataset.title,genre_ids:n.dataset.genres,release_date:n.dataset.date,vote_average:n.dataset.votes,id:n.dataset.id},console.log("movie",a),o=N.some((function(e){return e.id===a.id})),console.log("inInWatched",o),console.dir(r.target),"ADD TO WATCHED"===r.target.innerText?o||(N.push(a),localStorage.setItem("movieWatched",JSON.stringify(N)),r.target.innerText="Remove from watched",console.log("movie",a),console.log("watched",N),i=JSON.parse(localStorage.getItem("movieWatched")),console.log("saved",i),t(_).Notify.success("Added to watched!")):"REMOVE FROM WATCHED"===r.target.innerText&&(N=N.filter((function(e){return e.id!==a.id})),localStorage.setItem("movieWatched",JSON.stringify(N)),r.target.innerText="Add to watched",t(_).Notify.success("Removed from watched!"));case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function F(e){return P.apply(this,arguments)}function P(){return(P=t(i)(t(s).mark((function e(r){var n,a,o;return t(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=document.querySelector(".movie-modal__main"),console.log("modalEl",n.dataset),a={poster_path:n.dataset.poster,title:n.dataset.title,genre_ids:n.dataset.genres,release_date:n.dataset.date,vote_average:n.dataset.votes,id:n.dataset.id},console.log("movie",a),o=k.some((function(e){return e.id===a.id})),console.log(o),console.dir(r.target),"ADD TO QUEUE"===r.target.innerText?o||(k.push(a),localStorage.setItem("movieQueue",JSON.stringify(k)),r.target.innerText="Remove from queue",t(_).Notify.success("Added to queue!")):"REMOVE FROM QUEUE"===r.target.innerText&&(k=k.filter((function(e){return e.id!==a.id})),localStorage.setItem("movieQueue",JSON.stringify(k)),r.target.innerText="Add to queue",t(_).Notify.success("Removed from queue!"));case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}O.addEventListener("click",H),o("387si"),(0,u.spinnerStart)(),setTimeout(u.spinnerStop,1e3)}();
//# sourceMappingURL=library.9e377172.js.map
