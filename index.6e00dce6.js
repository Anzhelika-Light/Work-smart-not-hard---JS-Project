!function(){function e(e){return e&&e.__esModule?e.default:e}function t(e,t,n,a){Object.defineProperty(e,t,{get:n,set:a,enumerable:!0,configurable:!0})}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},r={},i=n.parcelRequired7c6;null==i&&((i=function(e){if(e in a)return a[e].exports;if(e in r){var t=r[e];delete r[e];var n={id:e,exports:{}};return a[e]=n,t.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},n.parcelRequired7c6=i),i("iE7OH").register(JSON.parse('{"EVgbq":"index.6e00dce6.js","cYuBg":"desktop-empty-poster.c37d8ef5.jpg","5UbS1":"index.432e5489.css","7nwxg":"library.934b70b3.js"}')),i("9t7bQ"),i("iSEZc"),i("4F07H");var s=i("bpxeT"),o=i("2TvXO"),c=i("asGRZ"),l=(s=i("bpxeT"),o=i("2TvXO"),i("2B9Fw"));function u(){return(u=e(s)(e(o).mark((function t(){var n,a,r,i;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.themoviedb.org/3/configuration?api_key=".concat(l.default));case 3:return n=e.sent,e.next=6,n.json();case 6:return a=e.sent,r=a.images,i="".concat(r.secure_base_url).concat(r.profile_sizes[r.profile_sizes.length-1]),e.abrupt("return",i);case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),t,null,[[0,12]])})))).apply(this,arguments)}var d,g,p,h,f,_,v,m,y,w,S,E,b,P=function(){return u.apply(this,arguments)},L={};t(L,"getPaginationModel",(function(){return d}),(function(e){return d=e})),t(L,"ITEM_TYPES",(function(){return g}),(function(e){return g=e})),t(L,"ITEM_KEYS",(function(){return p}),(function(e){return p=e})),h=function(e,t){for(var n=[],a=e;a<=t;a++)n.push(a);return n},f=function(e){return{type:E.ELLIPSIS,key:b.FIRST_ELLIPSIS,value:e,isActive:!1}},_=function(e){return{type:E.ELLIPSIS,key:b.SECOND_ELLIPSIS,value:e,isActive:!1}},v=function(e){var t=e.currentPage;return{type:E.FIRST_PAGE_LINK,key:b.FIRST_PAGE_LINK,value:1,isActive:1===t}},m=function(e){var t=e.currentPage;return{type:E.PREVIOUS_PAGE_LINK,key:b.PREVIOUS_PAGE_LINK,value:Math.max(1,t-1),isActive:1===t}},y=function(e){var t=e.currentPage,n=e.totalPages;return{type:E.NEXT_PAGE_LINK,key:b.NEXT_PAGE_LINK,value:Math.min(n,t+1),isActive:t===n}},w=function(e){var t=e.currentPage,n=e.totalPages;return{type:E.LAST_PAGE_LINK,key:b.LAST_PAGE_LINK,value:n,isActive:t===n}},S=function(e){var t=e.currentPage;return function(e){return{type:E.PAGE,key:e,value:e,isActive:e===t}}},d=function(e){if(null==e)throw new Error("getPaginationModel(): options object should be a passed");var t=Number(e.totalPages);if(isNaN(t))throw new Error("getPaginationModel(): totalPages should be a number");if(t<0)throw new Error("getPaginationModel(): totalPages shouldn't be a negative number");var n=Number(e.currentPage);if(isNaN(n))throw new Error("getPaginationModel(): currentPage should be a number");if(n<0)throw new Error("getPaginationModel(): currentPage shouldn't be a negative number");if(n>t)throw new Error("getPaginationModel(): currentPage shouldn't be greater than totalPages");var a=null==e.boundaryPagesRange?1:Number(e.boundaryPagesRange);if(isNaN(a))throw new Error("getPaginationModel(): boundaryPagesRange should be a number");if(a<0)throw new Error("getPaginationModel(): boundaryPagesRange shouldn't be a negative number");var r=null==e.siblingPagesRange?1:Number(e.siblingPagesRange);if(isNaN(r))throw new Error("getPaginationModel(): siblingPagesRange should be a number");if(r<0)throw new Error("getPaginationModel(): siblingPagesRange shouldn't be a negative number");var i=Boolean(e.hidePreviousAndNextPageLinks),s=Boolean(e.hideFirstAndLastPageLinks),o=Boolean(e.hideEllipsis),c=o?0:1,l=[],u=S(e);if(s||l.push(v(e)),i||l.push(m(e)),1+2*c+2*r+2*a>=t){var d=h(1,t).map(u);l.push.apply(l,d)}else{var g=a,p=h(1,g).map(u),E=t+1-a,b=h(E,t).map(u),P=Math.min(Math.max(n-r,g+c+1),E-c-2*r-1),L=P+2*r,N=h(P,L).map(u);if(l.push.apply(l,p),!o){var T=P-1,I=(T===g+1?u:f)(T);l.push(I)}if(l.push.apply(l,N),!o){var x=L+1,A=(x===E-1?u:_)(x);l.push(A)}l.push.apply(l,b)}return i||l.push(y(e)),s||l.push(w(e)),l},g=E={PAGE:"PAGE",ELLIPSIS:"ELLIPSIS",FIRST_PAGE_LINK:"FIRST_PAGE_LINK",PREVIOUS_PAGE_LINK:"PREVIOUS_PAGE_LINK",NEXT_PAGE_LINK:"NEXT_PAGE_LINK",LAST_PAGE_LINK:"LAST_PAGE_LINK"},p=b={FIRST_ELLIPSIS:-1,SECOND_ELLIPSIS:-2,FIRST_PAGE_LINK:-3,PREVIOUS_PAGE_LINK:-4,NEXT_PAGE_LINK:-5,LAST_PAGE_LINK:-6};s=i("bpxeT"),o=i("2TvXO");var N,T=i("dTK2M");function I(e){if(!e||""===e)return"<a>Other</a>";var t=e.toLowerCase().indexOf("other"),n="";return-1!==t&&(e=e.slice(0,t),n="Other"),e.split(",").map((function(e){return"<a class='find-by-genre-js trending-gallery__genre-name'>".concat(e,"</a>")})).join(", ")+n}function x(t){var n=t.poster_path;n=t.poster_path;var a="".concat(T.default.IMG_BASE_URL,"/original").concat(t.poster_path);return n||function(e){var t=new Image;t.addEventListener("load",(function(){return console.log("loaded")})),t.addEventListener("error",(function(){return!1})),t.src=e}(a)?(n=t.poster_path,'\n\t<picture>\n\t\t<source srcset="'.concat(T.default.IMG_BASE_URL,"/w185").concat(t.poster_path," 185w, ").concat(T.default.IMG_BASE_URL,"/w342").concat(t.poster_path," 342w, ").concat(T.default.IMG_BASE_URL,"/w500").concat(t.poster_path,' 500w" media="(max-width: 767px)" sizes="280px">\n\t\t<source srcset="').concat(T.default.IMG_BASE_URL,"/w342").concat(t.poster_path," 342w, ").concat(T.default.IMG_BASE_URL,"/w500").concat(t.poster_path,' 500w" media="(min-width: 768px)" sizes="336px">\n\t\t<source srcset="').concat(T.default.IMG_BASE_URL,"/w500").concat(t.poster_path," 500w, ").concat(T.default.IMG_BASE_URL,"/w780").concat(t.poster_path,' 780w" media="(min-width: 1280px)" sizes="395px">\n\n  \t<img src="').concat(T.default.IMG_BASE_URL,"/original").concat(t.poster_path,'" alt="The poster of ').concat(t.title,' film" class="trending-gallery__image" loading="lazy" data-id="').concat(t.id,'"/>\n\t</picture>')):'<picture>\n  \t<img src="'.concat(e(N),'" alt="The poster of ').concat(t.title,' film" class="trending-gallery__image" loading="lazy" data-id="').concat(t.id,'"/>\n\t</picture>')}function A(e){return e.results.map((function(e){return e.release_date&&""!==e.release_date?e.release_date=e.release_date.slice(0,4):e.release_date="No info","\n\t<li class='trending-gallery__item' data-id=".concat(e.id,">\n    ").concat(x(e),'\n    <div class="trending-gallery__wrapper">\n    \t<h3 class=\'trending-gallery__title\' ><span  class="title-modal-open" data-id=').concat(e.id,">").concat(e.title,"</span>\n\t\t\t</h3>\n    \t<p class='trending-gallery__info'>").concat(I(T.default.getGenresString(e.genre_ids))," | <span class='find-by-year-js'>").concat(e.release_date,"</span></p>\n    </div>\n  </li>\n\t")})).join("")}function F(e,t){return e.results.map((function(e){return e.release_date&&""!==e.release_date?e.release_date=e.release_date.slice(0,4):e.release_date="No info","\n\t<li class='trending-gallery__item'  data-id=\"".concat(e.id,'">\n    ').concat(x(e),'\n    <div class="trending-gallery__wrapper">\n    \t<h3 class=\'trending-gallery__title\'><span class="title-modal-open">').concat(e.title,"</span></h3>\n    \t<p class='trending-gallery__info'>").concat(I(T.default.getGenresStringWithSearchedGenre(e.genre_ids,t))," | <span class='find-by-year-js'>").concat(e.release_date.slice(0,4),"</span></p>\n    </div>\n  </li>\n\t")})).join("")}N=i("aNJCr").getBundleURL("EVgbq")+i("iE7OH").resolve("cYuBg");var M=i("6JpON"),G=(T=i("dTK2M"),/^\s*$/),k=new(0,T.default);k.fetchGenres();var B={galleryEl:document.querySelector(".trending-gallery"),searchInputEl:document.querySelector(".search__input"),searchForm:document.querySelector(".search"),showAdvancedSearchEl:document.querySelector(".show-advanced-search-js"),hideAdvancedSearchEl:document.querySelector(".hide-advanced-search-js"),advancedSearchEl:document.querySelector(".search--advanced-js ")};function R(){window.scroll({top:0,left:0,behavior:"smooth"})}M=i("6JpON");var O={userQueryForPagination:"",userYearForPagination:"",userGenreForPagination:""};function j(){return(j=e(s)(e(o).mark((function t(n){var a,r,i;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),ne(),a=B.searchInputEl.value,O.userQueryForPagination=a,B.searchInputEl.value="",!G.test(a)){e.next=7;break}return e.abrupt("return");case 7:return e.prev=7,k.page=1,e.next=11,k.fetchFilmsByQuery(a);case 11:if(r=e.sent,0!==(i=r.data).total_results){e.next=17;break}return M.Notify.failure("Search result not successful. Enter the correct movie name and try again!"),te(1),e.abrupt("return");case 17:R(),B.galleryEl.innerHTML=A(i),Q.isTrendingFilmsShown=!1,Q.isFilmsByGenreShown=!1,Q.isFilmsByYearShown=!1,Q.isFilmsByAdvancedSearchShown=!1,Q.isFilmsByQueryShown=!0,J.totalPages=i.total_pages,ae(k.page,J.totalPages),e.next=31;break;case 28:e.prev=28,e.t0=e.catch(7),console.error(e.t0);case 31:case"end":return e.stop()}}),t,null,[[7,28]])})))).apply(this,arguments)}B.searchForm.addEventListener("submit",(function(e){return j.apply(this,arguments)}));T=i("dTK2M"),M=i("6JpON");var H={primary_release_year:"",with_genres:"",sort_by:"",page:"",with_watch_monetization_types:"",without_genres:""},K=!1;function q(){B.advancedSearchEl.classList.toggle("visually-hidden"),B.showAdvancedSearchEl.parentNode.classList.toggle("visually-hidden"),B.hideAdvancedSearchEl.parentNode.classList.toggle("visually-hidden")}function U(e){k.fetchAdvancedMovieSearch(e).then((function(e){var t=e.data;R(),B.galleryEl.innerHTML=A(e.data),Q.isTrendingFilmsShown=!1,Q.isFilmsByQueryShown=!1,Q.isFilmsByAdvancedSearchShown=!0,Q.isFilmsByYearShown=!1,Q.isFilmsByGenreShown=!1,t.total_pages>500?J.totalPages=500:J.totalPages=t.total_pages,ae(k.page,J.totalPages)})).catch(console.error)}function C(){B.advancedSearchEl.reset()}B.searchForm.addEventListener("click",(function(e){if(!e.target.classList.value.includes("show-advanced-search-js"))return;if(setTimeout((function(){return q()}),100),K)return;t=B.advancedSearchEl,n=Object.values(T.default.genres).map((function(e){return'<option value="'.concat(e,'" class="advanced-search__option">').concat(e,"</option>")})).join(""),a='\n\t\t<select name="genre" id="" class="advanced-search__genre advanced-search__select">\n\t\t\t<option value="" class="advanced-search__option--main">Choose genre to find</option>\n\t\t\t'.concat(n,"\n\t\t</select>"),r='\n\t\t<select name="excludeGenre" id=""\n\t\t\tclass="advanced-search__exlude-genre advanced-search__select">\n\t\t\t<option value="" class="advanced-search__option--main">Choose genre to exlude</option>\n\t\t\t'.concat(n,"\n\t\t</select>"),i='\n\t\t<select name="sortParams" id="" \t\tclass="advanced-search__sort-buy advanced-search__select">\n\t\t\t<option value="" class="advanced-search__option--main">Choose sorting parameter</option>\n\t\t\t'.concat(Object.keys(T.default.sort_by_types).map((function(e){return'<option value="'.concat(e,'" class="advanced-search__option">').concat(T.default.sort_by_types[e],"</option>")})).join(""),"\n\t\t</select>"),t.insertAdjacentHTML("afterbegin",a+r+i),K=!0;var t,n,a,r,i})),B.searchForm.addEventListener("click",(function(e){if(!e.target.classList.value.includes("hide-advanced-search-js"))return;q()})),B.advancedSearchEl.addEventListener("submit",(function(e){e.preventDefault();var t={with_genres:T.default.genreIDs[B.advancedSearchEl.genre.value],without_genres:T.default.genreIDs[B.advancedSearchEl.excludeGenre.value],sort_by:T.default.sort_by_types[B.advancedSearchEl.sortParams.value],with_watch_monetization_types:T.default.watch_monetization_types[B.advancedSearchEl.monetization.value]},n=Object.keys(t).reduce((function(e,n){return e&&t[n]===H[n]}),!0);if(!function(e){var t=!1;return""!==B.advancedSearchEl.year.value||(Object.values(e).forEach((function(e){void 0===e||G.test(e)||(t=!0)})),t)}(t))return void M.Notify.failure("Choose some parameters!");k.page=1,Q.isFilmsByYearShown=!0;var a=B.advancedSearchEl.year.value;if(!function(e){return""===e||!!((e=Number.parseInt(e))&&e>1880&&e<=(new Date).getFullYear())}(a))return M.Notify.failure("The year chosen is ineligible!"),void C();if(t.primary_release_year=a,t.with_genres===t.without_genres&&void 0!==t.with_genres&&void 0!==t.without_genres)return M.Notify.failure("You can't choose and exclude the same genre!"),void C();if(t.page=k.page,H.with_genres=t.with_genres,H.without_genres=t.without_genres,H.sort_by=t.sort_by,H.primary_release_year=t.primary_release_year,H.with_watch_monetization_types=t.with_watch_monetization_types,H.page=t.page,n)return M.Notify.info("Please,make changes in search params and try again"),C(),void te(1);ne(),C(),U(t)}));var D=i("kvC6y"),Y=i("4Nugj"),Q=(T=i("dTK2M"),T=i("dTK2M"),{isTrendingFilmsShown:!0,isFilmsByQueryShown:!1,isFilmsByYearShown:!1,isFilmsByGenreShown:!1,isFilmsByAdvancedSearchShown:!1}),J={currentPage:0,totalPages:0,boundaryPagesRange:1,siblingPagesRange:2,hideEllipsis:!1,hidePreviousAndNextPagebtns:!1,hideFirstAndLastPagebtns:!0},z=window.matchMedia("(max-width: 767px)");oe(z.matches),z.addEventListener("change",(function(){var e=J.currentPage,t=J.totalPages;oe(z.matches),ae(e,t)}));var V=document.querySelector(".trending-gallery");function X(e){return W.apply(this,arguments)}function W(){return(W=e(s)(e(o).mark((function t(n){var a,r,i;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,P();case 3:return a=e.sent,r=T.default.genres,i=n.map((function(e){var t="",n=Z(e,r);return t=n.length>2?"<a class='find-by-genre-js trending-gallery__genre-name'>".concat(n[0],"</a>, <a class='find-by-genre-js trending-gallery__genre-name'>").concat(n[1],"</a>, Other | "):2===n.length?"<a class='find-by-genre-js trending-gallery__genre-name'>".concat(n[0],"</a>, <a class='find-by-genre-js trending-gallery__genre-name'>").concat(n[1],"</a> | "):1===n.length?"<a class='find-by-genre-js trending-gallery__genre-name'>".concat(n,"</a> | "):n,'<li class="trending-gallery__item" data-id="'.concat(e.id,'">\n                  \n                    <div>\n                        <img src="').concat(a).concat(e.poster_path,'"\n                            class="trending-gallery__image" data-id="').concat(e.id,'"\n                            alt="The poster of ').concat(e.title,' film " onerror="this.onerror=null;this.src=\'https://images.unsplash.com/photo-1616530940355-351fabd9524b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80\';"\n                            />\n\n                    </div>            \n                    <div class="trending-gallery__wrapper">\n                        <h3 class="trending-gallery__title" ><span class="title-modal-open" data-id="').concat(e.id,'">').concat(e.title,'</span>\n                        </h3>\n                              <p class="trending-gallery__info">').concat(t,'\n                              <span class="find-by-year-js">').concat(e.release_date.slice(0,4),"</span>\n                              </p>\n                    </div>\n                  \n                </li>")})).join(""),e.abrupt("return",i);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),t,null,[[0,9]])})))).apply(this,arguments)}function Z(e,t){return e.genre_ids.map((function(e){return t[e]}))}function $(e){return ee.apply(this,arguments)}function ee(){return(ee=e(s)(e(o).mark((function t(n){var a,r;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,V.innerHTML="",(0,D.spinnerStart)(),e.next=5,(0,c.default)(n);case 5:return a=e.sent,e.next=8,X(a.results);case 8:r=e.sent,V.innerHTML=r,J.totalPages=a.total_pages,Q.isTrendingFilmsShown=!0,a&&ae(n,J.totalPages),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),console.dir(e.t0);case 18:return e.prev=18,setTimeout((function(){(0,D.spinnerStop)()}),1e3),e.finish(18);case 21:case"end":return e.stop()}}),t,null,[[0,15,18,21]])})))).apply(this,arguments)}$(1);var te=$;function ne(){Y.refs.paginationContainer.removeEventListener("click",re),Y.refs.filmsPaginationContainer.innerHTML=""}function ae(t,n){Y.refs.filmsPaginationContainer.innerHTML=function(t,n){J.currentPage=t,J.totalPages=n;var a=e(L).getPaginationModel(J).map(se).join("");return'<ul class="pagination__container">'.concat(a,"</ul>")}(t,n),Y.refs.paginationContainer=document.querySelector(".pagination__container"),Y.refs.paginationContainer.addEventListener("click",re)}function re(e){return ie.apply(this,arguments)}function ie(){return(ie=e(s)(e(o).mark((function t(n){var a,r,i,s,c,l,u,d;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("BUTTON"===n.target.nodeName){e.next=2;break}return e.abrupt("return");case 2:if(e.prev=2,ne(),a=n.target,r=Number(a.dataset.value),!Q.isTrendingFilmsShown){e.next=14;break}return e.next=9,$(r);case 9:return R(),(0,D.spinnerStart)(),e.abrupt("return");case 14:if(!Q.isFilmsByQueryShown){e.next=27;break}return k.page=r,e.next=18,k.fetchFilmsByQuery(O.userQueryForPagination);case 18:return i=e.sent,R(),(0,D.spinnerStart)(),s=i.data,B.galleryEl.innerHTML=A(s),ae(k.page,J.totalPages),e.abrupt("return");case 27:if(!Q.isFilmsByYearShown){e.next=40;break}return k.page=r,e.next=31,k.fetchMoviesByYear(O.userYearForPagination);case 31:return c=e.sent,R(),(0,D.spinnerStart)(),l=c.data,B.galleryEl.innerHTML=A(l),ae(k.page,J.totalPages),e.abrupt("return");case 40:if(!Q.isFilmsByGenreShown){e.next=53;break}return k.page=r,e.next=44,k.fetchMoviesByGenre(O.userGenreForPagination);case 44:return u=e.sent,R(),(0,D.spinnerStart)(),d=u.data,B.galleryEl.innerHTML=A(d),ae(k.page,J.totalPages),e.abrupt("return");case 53:if(!Q.isFilmsByAdvancedSearchShown){e.next=60;break}return H.page=r,k.page=r,R(),(0,D.spinnerStart)(),B.galleryEl.innerHTML=U(H),e.abrupt("return");case 60:e.next=65;break;case 62:e.prev=62,e.t0=e.catch(2),console.log(e.t0);case 65:return e.prev=65,setTimeout(D.spinnerStop,1e3),e.finish(65);case 68:case"end":return e.stop()}}),t,null,[[2,62,65,68]])})))).apply(this,arguments)}function se(e){var t,n=e.type,a=e.value,r=e.isActive;e.key;switch(n){case"PREVIOUS_PAGE_LINK":return t="--prev",r?ce(t,a,"disabled"):ce(t,a);case"NEXT_PAGE_LINK":return t="--next",r?ce(t,a,"disabled"):ce(t,a);case"ELLIPSIS":return ce(t="--ellipsis",a);case"PAGE":return function(e,t,n,a){return n?' <li class="pagination__element">\n          <button type="button" class="pagination__btn pagination__btn'.concat(e,'" data-value=').concat(t," ").concat(a,">").concat(t,"</button>\n        </li>"):' <li class="pagination__element">\n       <button type="button" class="pagination__btn" data-value='.concat(t,">").concat(t,"</button>\n     </li>")}(t="--active",a,r,"disabled")}}function oe(e){e?(J.boundaryPagesRange=0,J.hideEllipsis=!0):(J.boundaryPagesRange=1,J.hideEllipsis=!1)}function ce(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return' <li class="pagination__element">\n          <button type="button" class="pagination__btn pagination__btn'.concat(e,'" data-value=').concat(t," ").concat(n,"></button>\n        </li>")}s=i("bpxeT"),o=i("2TvXO"),Y=i("4Nugj"),M=i("6JpON");var le=i("h9dm7"),ue=i("cDXQO");i("4VPdD"),i("dTK2M");var de=Y.refs.allCardsSection,ge=Y.refs.modal,pe=Y.refs.overflow,he=Y.refs.closeBtn,fe=Y.refs.innerModal,_e=Y.refs.body,ve=(Y.refs.sectionLibrary,JSON.parse(localStorage.getItem("movieQueue"))||[]),me=JSON.parse(localStorage.getItem("movieWatched"))||[];function ye(){var e=localStorage.getItem("currentFilmList");return JSON.parse(e)}function we(e){return Se.apply(this,arguments)}function Se(){return(Se=e(s)(e(o).mark((function t(n){var a,r,i,s,c;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(document.querySelector(".title-modal-open"),"IMG"!==n.target.nodeName&&"title-modal-open"!==n.target.className){e.next=21;break}return ge.classList.remove("hidden-movie-modal"),pe.classList.remove("hidden-movie-modal"),pe.classList.add("overflow-height"),de.removeEventListener("click",we),document.addEventListener("keydown",be),he.addEventListener("click",Pe),pe.addEventListener("click",Ee),a="IMG"===n.target.nodeName?n.target.dataset.id:n.target.closest("li").dataset.id,e.next=12,Le(a);case 12:r=window.scrollY,_e.style.position="fixed",_e.style.top="-".concat(r,"px"),i=document.querySelector(".modal__btn-watched"),s=document.querySelector(".modal__btn-queue"),c=document.querySelector(".movie-modal__btn-watch-trailer"),i.addEventListener("click",Te),s.addEventListener("click",xe),c.addEventListener("click",ue.onTrailerBtnClick);case 21:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Ee(e){e.currentTarget===e.target&&Pe()}function be(e){"Escape"===e.code&&Pe()}function Pe(){ge.classList.add("hidden-movie-modal"),pe.classList.add("hidden-movie-modal"),pe.classList.remove("overflow-height"),de.addEventListener("click",we),document.removeEventListener("keydown",Pe),he.removeEventListener("click",Pe),pe.removeEventListener("click",Ee);var e=_e.style.top;_e.style.position="",_e.style.top="",window.scrollTo(0,-1*parseInt(e||"0"))}function Le(e){return Ne.apply(this,arguments)}function Ne(){return(Ne=e(s)(e(o).mark((function t(n){var a,r;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=ye(),e.next=3,(0,le.renderModal)(a,n,me,ve);case 3:r=e.sent,fe.innerHTML=r;case 5:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Te(e){return Ie.apply(this,arguments)}function Ie(){return(Ie=e(s)(e(o).mark((function t(n){var a,r,i;return e(o).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a=document.querySelector(".movie-modal__main"),r={poster_path:a.dataset.poster,title:a.dataset.title,genre_ids:a.dataset.genres,release_date:a.dataset.date,vote_average:a.dataset.votes,id:a.dataset.id},i=me.some((function(e){return e.id===r.id})),"ADD TO WATCHED"===n.target.innerText?i||(me.push(r),localStorage.setItem("movieWatched",JSON.stringify(me)),n.target.innerText="Remove from watched",JSON.parse(localStorage.getItem("movieWatched")),e(M).Notify.success("Added to watched!")):"REMOVE FROM WATCHED"===n.target.innerText&&(me=me.filter((function(e){return e.id!==r.id})),localStorage.setItem("movieWatched",JSON.stringify(me)),n.target.innerText="Add to watched",e(M).Notify.success("Removed from watched!"));case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function xe(e){return Ae.apply(this,arguments)}function Ae(){return(Ae=e(s)(e(o).mark((function t(n){var a,r,i;return e(o).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a=document.querySelector(".movie-modal__main"),r={poster_path:a.dataset.poster,title:a.dataset.title,genre_ids:a.dataset.genres,release_date:a.dataset.date,vote_average:a.dataset.votes,id:a.dataset.id},i=ve.some((function(e){return e.id===r.id})),"ADD TO QUEUE"===n.target.innerText?i||(ve.push(r),localStorage.setItem("movieQueue",JSON.stringify(ve)),n.target.innerText="Remove from queue",e(M).Notify.success("Added to queue!")):"REMOVE FROM QUEUE"===n.target.innerText&&(ve=ve.filter((function(e){return e.id!==r.id})),localStorage.setItem("movieQueue",JSON.stringify(ve)),n.target.innerText="Add to queue",e(M).Notify.success("Removed from queue!"));case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}de.addEventListener("click",we),i("387si"),i("9S1Ph");var Fe=i("8nrFW");M=i("6JpON");B.galleryEl.addEventListener("click",(function(t){if(!e(Fe)(t.target.classList).includes("find-by-year-js"))return;if(Q.isFilmsByYearShown)return void M.Notify.info("Movies of this year are already shown");ne(),R();var n=Number(t.target.innerText);O.userQueryForPagination="",O.userYearForPagination=n,k.page=1,k.fetchMoviesByYear(n).then((function(e){var t=e.data;0===t.total_results&&M.Notify.failure("Search result not successful."),R(),B.galleryEl.innerHTML=A(t),Q.isTrendingFilmsShown=!1,Q.isFilmsByQueryShown=!1,Q.isFilmsByGenreShown=!1,Q.isFilmsByAdvancedSearchShown=!1,Q.isFilmsByYearShown=!0,console.log("обэкт що прийшов із сервера за результатом запиту за РОКОМ",t),t.total_pages>500?J.totalPages=500:J.totalPages=t.total_pages,ae(k.page,J.totalPages)})).catch((function(e){console.error(e),M.Notify.failure("No films with such year found!")}))}));var Me;Fe=i("8nrFW"),T=i("dTK2M"),M=i("6JpON");B.galleryEl.addEventListener("click",(function(t){Q.isFilmsByAdvancedSearchShown&&B.advancedSearchEl.reset();if(!e(Fe)(t.target.classList).includes("find-by-genre-js"))return;var n=t.target.innerText.trim();","===n[n.length-1]&&(n=n.slice(0,-1));if(Me===T.default.genreIDs[n.toLowerCase()]&&!0===Q.isFilmsByGenreShown)return void M.Notify.info("Movies of this genre are already shown");Me=T.default.genreIDs[n.toLowerCase()],ne(),O.userGenreForPagination=Me,k.page=1,k.fetchMoviesByGenre("".concat(T.default.genreIDs[n.toLowerCase()])).then((function(e){var t=e.data;0===t.total_results&&M.Notify.failure("Search result not successful."),R(),B.galleryEl.innerHTML=F(t,n),Q.isTrendingFilmsShown=!1,Q.isFilmsByQueryShown=!1,Q.isFilmsByAdvancedSearchShown=!1,Q.isFilmsByYearShown=!1,Q.isFilmsByGenreShown=!0,t.total_pages>500?J.totalPages=500:J.totalPages=t.total_pages,ae(k.page,J.totalPages)})).catch((function(e){console.error(e),M.Notify.failure("No films with such genre found!")}))}))}();
//# sourceMappingURL=index.6e00dce6.js.map
