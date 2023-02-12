function e(e){return e&&e.__esModule?e.default:e}function t(e,t,a,n){Object.defineProperty(e,t,{get:a,set:n,enumerable:!0,configurable:!0})}var a="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},i=a.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},a.parcelRequired7c6=i),i("kyEFX").register(JSON.parse('{"5ZPII":"index.e63a0db9.js","3Hue4":"desktop-empty-poster.c37d8ef5.jpg","5UbS1":"index.432e5489.css","eM9ss":"library.6a81601c.js"}')),i("5rZAK"),i("ak03H"),i("6HA5D");var s=i("2Opyx"),o=i("faVjL");var l,c,d,u,g,h,_,p,f,y,m,v,S,w=async function(){try{const e=await fetch(`https://api.themoviedb.org/3/configuration?api_key=${o.default}`),t=await e.json(),{images:a}=t;return`${a.secure_base_url}${a.profile_sizes[a.profile_sizes.length-1]}`}catch(e){console.log(e)}},E={};t(E,"getPaginationModel",(function(){return l}),(function(e){return l=e})),t(E,"ITEM_TYPES",(function(){return c}),(function(e){return c=e})),t(E,"ITEM_KEYS",(function(){return d}),(function(e){return d=e})),u=function(e,t){for(var a=[],n=e;n<=t;n++)a.push(n);return a},g=function(e){return{type:v.ELLIPSIS,key:S.FIRST_ELLIPSIS,value:e,isActive:!1}},h=function(e){return{type:v.ELLIPSIS,key:S.SECOND_ELLIPSIS,value:e,isActive:!1}},_=function(e){var t=e.currentPage;return{type:v.FIRST_PAGE_LINK,key:S.FIRST_PAGE_LINK,value:1,isActive:1===t}},p=function(e){var t=e.currentPage;return{type:v.PREVIOUS_PAGE_LINK,key:S.PREVIOUS_PAGE_LINK,value:Math.max(1,t-1),isActive:1===t}},f=function(e){var t=e.currentPage,a=e.totalPages;return{type:v.NEXT_PAGE_LINK,key:S.NEXT_PAGE_LINK,value:Math.min(a,t+1),isActive:t===a}},y=function(e){var t=e.currentPage,a=e.totalPages;return{type:v.LAST_PAGE_LINK,key:S.LAST_PAGE_LINK,value:a,isActive:t===a}},m=function(e){var t=e.currentPage;return function(e){return{type:v.PAGE,key:e,value:e,isActive:e===t}}},l=function(e){if(null==e)throw new Error("getPaginationModel(): options object should be a passed");var t=Number(e.totalPages);if(isNaN(t))throw new Error("getPaginationModel(): totalPages should be a number");if(t<0)throw new Error("getPaginationModel(): totalPages shouldn't be a negative number");var a=Number(e.currentPage);if(isNaN(a))throw new Error("getPaginationModel(): currentPage should be a number");if(a<0)throw new Error("getPaginationModel(): currentPage shouldn't be a negative number");if(a>t)throw new Error("getPaginationModel(): currentPage shouldn't be greater than totalPages");var n=null==e.boundaryPagesRange?1:Number(e.boundaryPagesRange);if(isNaN(n))throw new Error("getPaginationModel(): boundaryPagesRange should be a number");if(n<0)throw new Error("getPaginationModel(): boundaryPagesRange shouldn't be a negative number");var r=null==e.siblingPagesRange?1:Number(e.siblingPagesRange);if(isNaN(r))throw new Error("getPaginationModel(): siblingPagesRange should be a number");if(r<0)throw new Error("getPaginationModel(): siblingPagesRange shouldn't be a negative number");var i=Boolean(e.hidePreviousAndNextPageLinks),s=Boolean(e.hideFirstAndLastPageLinks),o=Boolean(e.hideEllipsis),l=o?0:1,c=[],d=m(e);if(s||c.push(_(e)),i||c.push(p(e)),1+2*l+2*r+2*n>=t){var v=u(1,t).map(d);c.push.apply(c,v)}else{var S=n,w=u(1,S).map(d),E=t+1-n,P=u(E,t).map(d),L=Math.min(Math.max(a-r,S+l+1),E-l-2*r-1),b=L+2*r,I=u(L,b).map(d);if(c.push.apply(c,w),!o){var N=L-1,A=(N===S+1?d:g)(N);c.push(A)}if(c.push.apply(c,I),!o){var $=b+1,F=($===E-1?d:h)($);c.push(F)}c.push.apply(c,P)}return i||c.push(f(e)),s||c.push(y(e)),c},c=v={PAGE:"PAGE",ELLIPSIS:"ELLIPSIS",FIRST_PAGE_LINK:"FIRST_PAGE_LINK",PREVIOUS_PAGE_LINK:"PREVIOUS_PAGE_LINK",NEXT_PAGE_LINK:"NEXT_PAGE_LINK",LAST_PAGE_LINK:"LAST_PAGE_LINK"},d=S={FIRST_ELLIPSIS:-1,SECOND_ELLIPSIS:-2,FIRST_PAGE_LINK:-3,PREVIOUS_PAGE_LINK:-4,NEXT_PAGE_LINK:-5,LAST_PAGE_LINK:-6};var P,L=i("8ROYx");function b(e){if(!e||""===e)return"<a>Other</a>";const t=e.toLowerCase().indexOf("other");let a="";return-1!==t&&(e=e.slice(0,t),a="Other"),e.split(",").map((e=>`<a class='find-by-genre-js trending-gallery__genre-name'>${e}</a>`)).join(", ")+a}function I(t){let a=t.poster_path;a=t.poster_path;let n=`${L.default.IMG_BASE_URL}/original${t.poster_path}`;return a||function(e){let t=new Image;t.addEventListener("load",(()=>console.log("loaded"))),t.addEventListener("error",(()=>!1)),t.src=e}(n)?(a=t.poster_path,`\n\t<picture>\n\t\t<source srcset="${L.default.IMG_BASE_URL}/w185${t.poster_path} 185w, ${L.default.IMG_BASE_URL}/w342${t.poster_path} 342w, ${L.default.IMG_BASE_URL}/w500${t.poster_path} 500w" media="(max-width: 767px)" sizes="280px">\n\t\t<source srcset="${L.default.IMG_BASE_URL}/w342${t.poster_path} 342w, ${L.default.IMG_BASE_URL}/w500${t.poster_path} 500w" media="(min-width: 768px)" sizes="336px">\n\t\t<source srcset="${L.default.IMG_BASE_URL}/w500${t.poster_path} 500w, ${L.default.IMG_BASE_URL}/w780${t.poster_path} 780w" media="(min-width: 1280px)" sizes="395px">\n\n  \t<img src="${L.default.IMG_BASE_URL}/original${t.poster_path}" alt="The poster of ${t.title} film" class="trending-gallery__image" loading="lazy" data-id="${t.id}"/>\n\t</picture>`):`<picture>\n  \t<img src="${e(P)}" alt="The poster of ${t.title} film" class="trending-gallery__image" loading="lazy" data-id="${t.id}"/>\n\t</picture>`}function N({results:e}){return e.map((e=>(e.release_date&&""!==e.release_date?e.release_date=e.release_date.slice(0,4):e.release_date="No info",`\n\t<li class='trending-gallery__item' data-id=${e.id}>\n    ${I(e)}\n    <div class="trending-gallery__wrapper">\n    \t<h3 class='trending-gallery__title' ><span  class="title-modal-open" data-id=${e.id}>${e.title}</span>\n\t\t\t</h3>\n    \t<p class='trending-gallery__info'>${b(L.default.getGenresString(e.genre_ids))} | <span class='find-by-year-js'>${e.release_date}</span></p>\n    </div>\n  </li>\n\t`))).join("")}function A({results:e},t){return e.map((e=>(e.release_date&&""!==e.release_date?e.release_date=e.release_date.slice(0,4):e.release_date="No info",`\n\t<li class='trending-gallery__item'  data-id="${e.id}">\n    ${I(e)}\n    <div class="trending-gallery__wrapper">\n    \t<h3 class='trending-gallery__title'><span class="title-modal-open">${e.title}</span></h3>\n    \t<p class='trending-gallery__info'>${b(L.default.getGenresStringWithSearchedGenre(e.genre_ids,t))} | <span class='find-by-year-js'>${e.release_date.slice(0,4)}</span></p>\n    </div>\n  </li>\n\t`))).join("")}P=new URL(i("kyEFX").resolve("3Hue4"),import.meta.url).toString();var $=i("7Y9D8");L=i("8ROYx");const F=/^\s*$/,T=new(0,L.default);T.fetchGenres();const M={galleryEl:document.querySelector(".trending-gallery"),searchInputEl:document.querySelector(".search__input"),searchForm:document.querySelector(".search"),showAdvancedSearchEl:document.querySelector(".show-advanced-search-js"),hideAdvancedSearchEl:document.querySelector(".hide-advanced-search-js"),advancedSearchEl:document.querySelector(".search--advanced-js ")};function G(){window.scroll({top:0,left:0,behavior:"smooth"})}$=i("7Y9D8");const R={userQueryForPagination:"",userYearForPagination:"",userGenreForPagination:""};M.searchForm.addEventListener("submit",(async function(e){e.preventDefault(),z();const t=M.searchInputEl.value;if(R.userQueryForPagination=t,M.searchInputEl.value="",F.test(t))return;try{T.page=1;const e=await T.fetchFilmsByQuery(t),{data:a}=e;if(0===a.total_results)return $.Notify.failure("Search result not successful. Enter the correct movie name and try again!"),void Q(1);G(),M.galleryEl.innerHTML=N(a),D.isTrendingFilmsShown=!1,D.isFilmsByGenreShown=!1,D.isFilmsByYearShown=!1,D.isFilmsByAdvancedSearchShown=!1,D.isFilmsByQueryShown=!0,K.totalPages=a.total_pages,V(T.page,K.totalPages)}catch(e){console.error(e)}}));L=i("8ROYx"),$=i("7Y9D8");let x={primary_release_year:"",with_genres:"",sort_by:"",page:"",with_watch_monetization_types:"",without_genres:""},B=!1;function O(){M.advancedSearchEl.classList.toggle("visually-hidden"),M.showAdvancedSearchEl.parentNode.classList.toggle("visually-hidden"),M.hideAdvancedSearchEl.parentNode.classList.toggle("visually-hidden")}function k(e){T.fetchAdvancedMovieSearch(e).then((e=>{const{data:t}=e;G(),M.galleryEl.innerHTML=N(e.data),D.isTrendingFilmsShown=!1,D.isFilmsByQueryShown=!1,D.isFilmsByAdvancedSearchShown=!0,D.isFilmsByYearShown=!1,D.isFilmsByGenreShown=!1,t.total_pages>500?K.totalPages=500:K.totalPages=t.total_pages,V(T.page,K.totalPages)})).catch(console.error)}function j(){M.advancedSearchEl.reset()}M.searchForm.addEventListener("click",(function(e){if(!e.target.classList.value.includes("show-advanced-search-js"))return;if(setTimeout((()=>O()),100),B)return;!function(e){const t=Object.values(L.default.genres).map((e=>`<option value="${e}" class="advanced-search__option">${e}</option>`)).join(""),a=`\n\t\t<select name="genre" id="" class="advanced-search__genre advanced-search__select">\n\t\t\t<option value="" class="advanced-search__option--main">Choose genre to find</option>\n\t\t\t${t}\n\t\t</select>`,n=`\n\t\t<select name="excludeGenre" id=""\n\t\t\tclass="advanced-search__exlude-genre advanced-search__select">\n\t\t\t<option value="" class="advanced-search__option--main">Choose genre to exlude</option>\n\t\t\t${t}\n\t\t</select>`,r=`\n\t\t<select name="sortParams" id="" \t\tclass="advanced-search__sort-buy advanced-search__select">\n\t\t\t<option value="" class="advanced-search__option--main">Choose sorting parameter</option>\n\t\t\t${Object.keys(L.default.sort_by_types).map((e=>`<option value="${e}" class="advanced-search__option">${L.default.sort_by_types[e]}</option>`)).join("")}\n\t\t</select>`;e.insertAdjacentHTML("afterbegin",a+n+r),B=!0}(M.advancedSearchEl)})),M.searchForm.addEventListener("click",(function(e){if(!e.target.classList.value.includes("hide-advanced-search-js"))return;O()})),M.advancedSearchEl.addEventListener("submit",(function(e){e.preventDefault();const t={with_genres:L.default.genreIDs[M.advancedSearchEl.genre.value],without_genres:L.default.genreIDs[M.advancedSearchEl.excludeGenre.value],sort_by:L.default.sort_by_types[M.advancedSearchEl.sortParams.value],with_watch_monetization_types:L.default.watch_monetization_types[M.advancedSearchEl.monetization.value]},a=Object.keys(t).reduce(((e,a)=>e&&t[a]===x[a]),!0);if(!function(e){let t=!1;return""!==M.advancedSearchEl.year.value||(Object.values(e).forEach((e=>{void 0===e||F.test(e)||(t=!0)})),t)}(t))return void $.Notify.failure("Choose some parameters!");T.page=1,D.isFilmsByYearShown=!0;let n=M.advancedSearchEl.year.value;if(!function(e){return""===e||!!((e=Number.parseInt(e))&&e>1880&&e<=(new Date).getFullYear())}(n))return $.Notify.failure("The year chosen is ineligible!"),void j();if(t.primary_release_year=n,t.with_genres===t.without_genres&&void 0!==t.with_genres&&void 0!==t.without_genres)return $.Notify.failure("You can't choose and exclude the same genre!"),void j();if(t.page=T.page,x.with_genres=t.with_genres,x.without_genres=t.without_genres,x.sort_by=t.sort_by,x.primary_release_year=t.primary_release_year,x.with_watch_monetization_types=t.with_watch_monetization_types,x.page=t.page,a)return $.Notify.info("Please,make changes in search params and try again"),j(),void Q(1);z(),j(),k(t)}));var Y=i("gjiCh"),H=i("krGWQ");L=i("8ROYx"),L=i("8ROYx");const D={isTrendingFilmsShown:!0,isFilmsByQueryShown:!1,isFilmsByYearShown:!1,isFilmsByGenreShown:!1,isFilmsByAdvancedSearchShown:!1},K={currentPage:0,totalPages:0,boundaryPagesRange:1,siblingPagesRange:2,hideEllipsis:!1,hidePreviousAndNextPagebtns:!1,hideFirstAndLastPagebtns:!0};let U=window.matchMedia("(max-width: 767px)");X(U.matches),U.addEventListener("change",(function(){const{currentPage:e,totalPages:t}=K;X(U.matches),V(e,t)}));const q=document.querySelector(".trending-gallery");async function C(e){try{q.innerHTML="",(0,Y.spinnerStart)();const t=await(0,s.default)(e),a=await async function(e){try{const t=await w(),a=L.default.genres;return e.map((e=>{let n="";const r=function(e,t){const a=e.genre_ids.map((e=>t[e]));return a}(e,a);return n=r.length>2?`<a class='find-by-genre-js trending-gallery__genre-name'>${r[0]}</a>, <a class='find-by-genre-js trending-gallery__genre-name'>${r[1]}</a>, Other | `:2===r.length?`<a class='find-by-genre-js trending-gallery__genre-name'>${r[0]}</a>, <a class='find-by-genre-js trending-gallery__genre-name'>${r[1]}</a> | `:1===r.length?`<a class='find-by-genre-js trending-gallery__genre-name'>${r}</a> | `:r,`<li class="trending-gallery__item" data-id="${e.id}">\n                  \n                    <div>\n                        <img src="${t}${e.poster_path}"\n                            class="trending-gallery__image" data-id="${e.id}"\n                            alt="The poster of ${e.title} film " onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1616530940355-351fabd9524b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80';"\n                            />\n\n                    </div>            \n                    <div class="trending-gallery__wrapper">\n                        <h3 class="trending-gallery__title" ><span class="title-modal-open" data-id="${e.id}">${e.title}</span>\n                        </h3>\n                              <p class="trending-gallery__info">${n}\n                              <span class="find-by-year-js">${e.release_date.slice(0,4)}</span>\n                              </p>\n                    </div>\n                  \n                </li>`})).join("")}catch(e){console.log(e)}}(t.results);q.innerHTML=a,K.totalPages=t.total_pages,D.isTrendingFilmsShown=!0,t&&V(e,K.totalPages)}catch(e){console.dir(e)}finally{setTimeout((()=>{(0,Y.spinnerStop)()}),1e3)}}C(1);var Q=C;function z(){H.refs.paginationContainer.removeEventListener("click",W),H.refs.filmsPaginationContainer.innerHTML=""}function V(t,a){H.refs.filmsPaginationContainer.innerHTML=function(t,a){K.currentPage=t,K.totalPages=a;const n=e(E).getPaginationModel(K);return`<ul class="pagination__container">${n.map(J).join("")}</ul>`}(t,a),H.refs.paginationContainer=document.querySelector(".pagination__container"),H.refs.paginationContainer.addEventListener("click",W)}async function W(e){if("BUTTON"===e.target.nodeName)try{z();const t=e.target,a=Number(t.dataset.value);if(D.isTrendingFilmsShown)return await C(a),G(),void(0,Y.spinnerStart)();if(D.isFilmsByQueryShown){T.page=a;const e=await T.fetchFilmsByQuery(R.userQueryForPagination);G(),(0,Y.spinnerStart)();const{data:t}=e;return M.galleryEl.innerHTML=N(t),void V(T.page,K.totalPages)}if(D.isFilmsByYearShown){T.page=a;const e=await T.fetchMoviesByYear(R.userYearForPagination);G(),(0,Y.spinnerStart)();const{data:t}=e;return M.galleryEl.innerHTML=N(t),void V(T.page,K.totalPages)}if(D.isFilmsByGenreShown){T.page=a;const e=await T.fetchMoviesByGenre(R.userGenreForPagination);G(),(0,Y.spinnerStart)();const{data:t}=e;return M.galleryEl.innerHTML=N(t),void V(T.page,K.totalPages)}if(D.isFilmsByAdvancedSearchShown)return x.page=a,T.page=a,G(),(0,Y.spinnerStart)(),void(M.galleryEl.innerHTML=k(x))}catch(e){console.log(e)}finally{setTimeout(Y.spinnerStop,1e3)}}function J(e){const{type:t,value:a,isActive:n,key:r}=e;let i;switch(t){case"PREVIOUS_PAGE_LINK":return i="--prev",n?Z(i,a,"disabled"):Z(i,a);case"NEXT_PAGE_LINK":return i="--next",n?Z(i,a,"disabled"):Z(i,a);case"ELLIPSIS":return i="--ellipsis",Z(i,a);case"PAGE":return i="--active",function(e,t,a,n){return a?` <li class="pagination__element">\n          <button type="button" class="pagination__btn pagination__btn${e}" data-value=${t} ${n}>${t}</button>\n        </li>`:` <li class="pagination__element">\n       <button type="button" class="pagination__btn" data-value=${t}>${t}</button>\n     </li>`}(i,a,n,"disabled")}}function X(e){e?(K.boundaryPagesRange=0,K.hideEllipsis=!0):(K.boundaryPagesRange=1,K.hideEllipsis=!1)}function Z(e,t,a=""){return` <li class="pagination__element">\n          <button type="button" class="pagination__btn pagination__btn${e}" data-value=${t} ${a}></button>\n        </li>`}H=i("krGWQ"),$=i("7Y9D8");var ee=i("1jYKa"),te=i("37v9V");i("gCEU8"),i("8ROYx");const{allCardsSection:ae,modal:ne,overflow:re,closeBtn:ie,innerModal:se,body:oe,sectionLibrary:le}=H.refs;let ce=JSON.parse(localStorage.getItem("movieQueue"))||[],de=JSON.parse(localStorage.getItem("movieWatched"))||[];async function ue(e){document.querySelector(".title-modal-open");if("IMG"===e.target.nodeName||"title-modal-open"===e.target.className){ne.classList.remove("hidden-movie-modal"),re.classList.remove("hidden-movie-modal"),re.classList.add("overflow-height"),ae.removeEventListener("click",ue),document.addEventListener("keydown",he),ie.addEventListener("click",_e),re.addEventListener("click",ge);const t="IMG"===e.target.nodeName?e.target.dataset.id:e.target.closest("li").dataset.id;await async function(e){const t=function(){const e=localStorage.getItem("currentFilmList");return JSON.parse(e)}(),a=await(0,ee.renderModal)(t,e,de,ce);se.innerHTML=a}(t);const a=window.scrollY;oe.style.position="fixed",oe.style.top=`-${a}px`;const n=document.querySelector(".modal__btn-watched"),r=document.querySelector(".modal__btn-queue"),i=document.querySelector(".movie-modal__btn-watch-trailer");n.addEventListener("click",pe),r.addEventListener("click",fe),i.addEventListener("click",te.onTrailerBtnClick)}}function ge(e){e.currentTarget===e.target&&_e()}function he(e){"Escape"===e.code&&_e()}function _e(){ne.classList.add("hidden-movie-modal"),re.classList.add("hidden-movie-modal"),re.classList.remove("overflow-height"),ae.addEventListener("click",ue),document.removeEventListener("keydown",_e),ie.removeEventListener("click",_e),re.removeEventListener("click",ge);const e=oe.style.top;oe.style.position="",oe.style.top="",window.scrollTo(0,-1*parseInt(e||"0"))}async function pe(t){const a=document.querySelector(".movie-modal__main"),n={poster_path:a.dataset.poster,title:a.dataset.title,genre_ids:a.dataset.genres,release_date:a.dataset.date,vote_average:a.dataset.votes,id:a.dataset.id},r=de.some((e=>e.id===n.id));if("ADD TO WATCHED"===t.target.innerText){if(!r){de.push(n),localStorage.setItem("movieWatched",JSON.stringify(de)),t.target.innerText="Remove from watched";JSON.parse(localStorage.getItem("movieWatched"));e($).Notify.success("Added to watched!")}}else"REMOVE FROM WATCHED"===t.target.innerText&&(de=de.filter((e=>e.id!==n.id)),localStorage.setItem("movieWatched",JSON.stringify(de)),t.target.innerText="Add to watched",e($).Notify.success("Removed from watched!"))}async function fe(t){const a=document.querySelector(".movie-modal__main"),n={poster_path:a.dataset.poster,title:a.dataset.title,genre_ids:a.dataset.genres,release_date:a.dataset.date,vote_average:a.dataset.votes,id:a.dataset.id},r=ce.some((e=>e.id===n.id));"ADD TO QUEUE"===t.target.innerText?r||(ce.push(n),localStorage.setItem("movieQueue",JSON.stringify(ce)),t.target.innerText="Remove from queue",e($).Notify.success("Added to queue!")):"REMOVE FROM QUEUE"===t.target.innerText&&(ce=ce.filter((e=>e.id!==n.id)),localStorage.setItem("movieQueue",JSON.stringify(ce)),t.target.innerText="Add to queue",e($).Notify.success("Removed from queue!"))}ae.addEventListener("click",ue),i("9kkEh"),i("kMp2Z");$=i("7Y9D8");M.galleryEl.addEventListener("click",(function(e){if(![...e.target.classList].includes("find-by-year-js"))return;if(D.isFilmsByYearShown)return void $.Notify.info("Movies of this year are already shown");z(),G();let t=Number(e.target.innerText);R.userQueryForPagination="",R.userYearForPagination=t,T.page=1,T.fetchMoviesByYear(t).then((e=>{const{data:t}=e;0===t.total_results&&$.Notify.failure("Search result not successful."),G(),M.galleryEl.innerHTML=N(t),D.isTrendingFilmsShown=!1,D.isFilmsByQueryShown=!1,D.isFilmsByGenreShown=!1,D.isFilmsByAdvancedSearchShown=!1,D.isFilmsByYearShown=!0,console.log("обэкт що прийшов із сервера за результатом запиту за РОКОМ",t),t.total_pages>500?K.totalPages=500:K.totalPages=t.total_pages,V(T.page,K.totalPages)})).catch((e=>{console.error(e),$.Notify.failure("No films with such year found!")}))}));L=i("8ROYx"),$=i("7Y9D8");let ye;M.galleryEl.addEventListener("click",(function(e){D.isFilmsByAdvancedSearchShown&&M.advancedSearchEl.reset();if(![...e.target.classList].includes("find-by-genre-js"))return;let t=e.target.innerText.trim();","===t[t.length-1]&&(t=t.slice(0,-1));if(ye===L.default.genreIDs[t.toLowerCase()]&&!0===D.isFilmsByGenreShown)return void $.Notify.info("Movies of this genre are already shown");ye=L.default.genreIDs[t.toLowerCase()],z(),R.userGenreForPagination=ye,T.page=1,T.fetchMoviesByGenre(`${L.default.genreIDs[t.toLowerCase()]}`).then((e=>{const{data:a}=e;0===a.total_results&&$.Notify.failure("Search result not successful."),G(),M.galleryEl.innerHTML=A(a,t),D.isTrendingFilmsShown=!1,D.isFilmsByQueryShown=!1,D.isFilmsByAdvancedSearchShown=!1,D.isFilmsByYearShown=!1,D.isFilmsByGenreShown=!0,a.total_pages>500?K.totalPages=500:K.totalPages=a.total_pages,V(T.page,K.totalPages)})).catch((e=>{console.error(e),$.Notify.failure("No films with such genre found!")}))}));
//# sourceMappingURL=index.e63a0db9.js.map
