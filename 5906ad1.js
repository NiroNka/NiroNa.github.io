(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{1057:function(t,e,n){"use strict";n.r(e);n(23),n(53);var r=n(2),o=n(4),c=n(1090),l=(n(79),n(214)),f=n(217);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var d={name:"filterSortRating",components:{FilterSortMenuRating:n(1466).default,ChevronIcon:f.default,IconMain:l.default},data:function(){return{showMenu:!1}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(o.e)({filterSelected:function(t){return"default"!==t.ratings.filters.sort}})),methods:{clickHandler:function(){this.showMenu=!this.showMenu,this.sendGtmEvent({event:"ArticleClick",category:"Catalog_Rating",action:"Catalog_Rating_Sorting"})},missClickSort:function(t){var e=t.target;e.closest(".btn-show-filter-sort")||e.closest(".filter-sort-menu")||(this.showMenu=!1)}}},m=(n(1556),n(0)),component=Object(m.a)(d,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"filter-sort"},[e("button",{staticClass:"btn-main ring btn-show-filter-sort focus-btn",class:{"btn-show-filter-sort_active":this.filterSelected},attrs:{type:"button"},on:{click:this.clickHandler}},[e("div",{staticClass:"focus-btn__content",attrs:{tabindex:"-1"}},[e("icon-main",{staticClass:"icon-left",attrs:{id:"arrowsVertical",stroke:"black",width:"20",height:"20"}}),this._v("\n      Сортировка\n      "),e("chevron-icon",{staticClass:"icon-chevron",style:{transform:"rotate("+(this.showMenu?270:90)+"deg)"},attrs:{fill:"black"}})],1)]),this._v(" "),e("transition",{attrs:{name:"fade"}},[e("filter-sort-menu-rating",{directives:[{name:"show",rawName:"v-show",value:this.showMenu,expression:"showMenu"},{name:"miss-click",rawName:"v-miss-click",value:this.missClickSort,expression:"missClickSort"}]})],1)],1)}),[],!1,null,"0503ffd3",null),C=component.exports;installComponents(component,{IconMain:n(214).default,ChevronIcon:n(217).default,FilterSortMenuRating:n(1466).default});function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function y(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var O={name:"saleFilterRating",computed:y({},Object(o.e)({activeBtn:function(t){return t.ratings.filters.is_promo}})),methods:y(y({},Object(o.d)({setRatingsCatalogueFilter:"setRatingsCatalogueFilter"})),{},{toggleBtn:function(){this.setRatingsCatalogueFilter({is_promo:!this.activeBtn}),this.sendGtmEvent({event:"ArticleClick",category:"Catalog_Rating",action:"Catalog_Rating_Discounts"})}})};n(1557),Object(m.a)(O,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"btn-main filter-icon focus-btn ring",class:t.activeBtn?"red":"transparent",attrs:{type:"button"},on:{click:t.toggleBtn}},[n("div",{staticClass:"focus-btn__content focus-btn__content-no-padding",attrs:{tabindex:"-1"}},[[t.activeBtn?n("svg",{attrs:{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M6.57031 15.833L13.4275 4.16634",stroke:"white","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}}),t._v(" "),n("path",{attrs:{d:"M16.9978 13.5C16.9978 14.9003 15.8911 16 14.5692 16C13.2473 16 12.1406 14.9003 12.1406 13.5C12.1406 12.0997 13.2473 11 14.5692 11C15.8911 11 16.9978 12.0997 16.9978 13.5Z",stroke:"white","stroke-width":"2"}}),t._v(" "),n("path",{attrs:{d:"M7.85714 6.5C7.85714 7.90025 6.7505 9 5.42857 9C4.10665 9 3 7.90025 3 6.5C3 5.09975 4.10665 4 5.42857 4C6.7505 4 7.85714 5.09975 7.85714 6.5Z",stroke:"white","stroke-width":"2"}})]):n("svg",{attrs:{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M6.57031 15.833L13.4275 4.16634",stroke:"black","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}}),t._v(" "),n("path",{attrs:{d:"M16.9978 13.5C16.9978 14.9003 15.8911 16 14.5692 16C13.2473 16 12.1406 14.9003 12.1406 13.5C12.1406 12.0997 13.2473 11 14.5692 11C15.8911 11 16.9978 12.0997 16.9978 13.5Z",stroke:"black","stroke-width":"2"}}),t._v(" "),n("path",{attrs:{d:"M7.85714 6.5C7.85714 7.90025 6.7505 9 5.42857 9C4.10665 9 3 7.90025 3 6.5C3 5.09975 4.10665 4 5.42857 4C6.7505 4 7.85714 5.09975 7.85714 6.5Z",stroke:"black","stroke-width":"2"}})])],t._v("\n    Со скидкой\n  ")],2)])}),[],!1,null,"3ae36a9a",null).exports;function w(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function _(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?w(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):w(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var j={name:"ratingCatalogueFilters",components:{FilterSearchRating:n(1438).default,filterSort:C},props:{isRatingCompilationPage:Boolean},computed:_(_({},Object(o.e)({filters:function(t){return t.ratings.filters},search:function(t){return t.ratings.search}})),Object(o.c)({hideCategories:"HideCategoriesForSearchRatings"})),methods:{showCategories:function(){this.setSidebarProp({showSidebar:!0,fullSidebar:!0,closeIconColor:"#000",showClose:!0,component:c.a})}}},k=(n(1559),Object(m.a)(j,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"rating-catalogue-filters"},[t.hideCategories?t._e():n("button",{staticClass:"btn-categories d-none d-md-block",class:{"btn-categories_active":t.filters.category||t.filters.subcategory},attrs:{type:"button"},on:{click:t.showCategories}},[n("svg",{attrs:{width:"15",height:"13",viewBox:"0 0 15 13",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M1 9.74463H8.97289",stroke:"black","stroke-width":"1.77175","stroke-linecap":"round","stroke-linejoin":"round"}}),t._v(" "),n("path",{attrs:{d:"M11.6328 9.74463L13.4046 9.74463",stroke:"black","stroke-width":"1.77175","stroke-linecap":"round","stroke-linejoin":"round"}}),t._v(" "),n("rect",{attrs:{x:"7.20228",y:"7.97279",width:"3.54351",height:"3.54351",rx:"1.77175",fill:"white"}}),t._v(" "),n("rect",{attrs:{x:"7.20228",y:"7.97279",width:"3.54351",height:"3.54351",rx:"1.77175",fill:"url(#paint0_linear)"}}),t._v(" "),n("rect",{attrs:{x:"7.20228",y:"7.97279",width:"3.54351",height:"3.54351",rx:"1.77175",stroke:"black","stroke-width":"1.77175"}}),t._v(" "),n("path",{attrs:{d:"M8.08594 2.65771L13.4012 2.65772",stroke:"black","stroke-width":"1.77175","stroke-linecap":"round","stroke-linejoin":"round"}}),t._v(" "),n("path",{attrs:{d:"M1 2.65771H2.77175",stroke:"black","stroke-width":"1.77175","stroke-linecap":"round","stroke-linejoin":"round"}}),t._v(" "),n("rect",{attrs:{x:"3.65931",y:"0.885877",width:"3.54351",height:"3.54351",rx:"1.77175",fill:"white"}}),t._v(" "),n("rect",{attrs:{x:"3.65931",y:"0.885877",width:"3.54351",height:"3.54351",rx:"1.77175",fill:"url(#paint1_linear)"}}),t._v(" "),n("rect",{attrs:{x:"3.65931",y:"0.885877",width:"3.54351",height:"3.54351",rx:"1.77175",stroke:"black","stroke-width":"1.77175"}}),t._v(" "),n("defs",[n("linearGradient",{attrs:{id:"paint0_linear",x1:"8.97404",y1:"7.08691",x2:"8.97404",y2:"12.4022",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"white"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"white","stop-opacity":"0"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint1_linear",x1:"5.43107",y1:"0",x2:"5.43107",y2:"5.31526",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"white"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"white","stop-opacity":"0"}})],1)],1)])]),t._v(" "),t.search?t._e():n("filter-sort"),t._v(" "),t.isRatingCompilationPage?t._e():n("filter-search-rating")],1)}),[],!1,null,"0a4511a8",null));e.default=k.exports;installComponents(k,{FilterSort:n(1439).default,FilterSearchRating:n(1438).default})},1058:function(t,e,n){"use strict";n.r(e);n(1074),n(1084),n(22),n(12);var r=n(2),o=n(4);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={name:"ratingsCatalogueBanner",data:function(){return{bannerPattern:"".concat(this.$config.imgPath,"/special_offers/pattern.svg"),bannerImageDefault:"".concat(this.$config.imgPath,"/rating/compilations/catalogue_1280.png")}},methods:{goToMain:function(){this.$router.push("/rating")}},computed:l(l({},Object(o.c)({GetSelectionData:"GetSelectionData"})),{},{selectionParams:function(){return!!this.$route.params.compilation&&this.GetSelectionData(this.$route.params.compilation)},bannerTitle:function(){return this.selectionParams?this.selectionParams.name:"Рейтинг товаров в каталоге"},bannerSubtitle:function(){var t;return(null===(t=this.selectionParams)||void 0===t?void 0:t.description)||"Рейтинг товаров сформирован из оценок с января по март 2022 года"},bannerBackground:function(){return this.selectionParams?"url(".concat(this.bannerPattern,"), url(").concat(this.selectionParams.web_image_back,") repeat"):"#f3f3f3 url(".concat(this.bannerPattern,") repeat")},bannerImage:function(){return this.selectionParams?this.selectionParams.big_image_1280||this.selectionParams.big_image_768:this.bannerImageDefault},bannerColor:function(){var t;return(null===(t=this.selectionParams)||void 0===t?void 0:t.title_color)||"#000"}})},h=(n(1554),n(0)),component=Object(h.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"ratings-catalogue-banner ",class:{"ratings-catalogue-banner_selection":t.selectionParams},style:{background:t.bannerBackground}},[n("div",{staticClass:"page-container compilation-wrapper"},[n("div",{staticClass:"grid-wrap grid-wrap_visible"},[n("nuxt-link",{staticClass:"compilation__info__back col-12",style:"color:"+t.bannerColor,attrs:{to:"/rating"}},[n("svg",{attrs:{width:"18",height:"14",viewBox:"0 0 18 14",fill:t.bannerColor,xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M18 7C18 6.44772 17.5523 6 17 6H3.8L7.7 2.1C8.0866 1.7134 8.0866 1.0866 7.7 0.7C7.3134 0.313401 6.6866 0.313401 6.3 0.7L0 7L6.3 13.3C6.6866 13.6866 7.3134 13.6866 7.7 13.3C8.0866 12.9134 8.0866 12.2866 7.7 11.9L3.8 8H17C17.5523 8 18 7.55228 18 7Z",fill:t.bannerColor}})]),t._v("\n        вернуться назад\n      ")]),t._v(" "),n("div",{staticClass:"col-12"},[n("h1",{staticClass:"title",style:"color:"+t.bannerColor},[t._v("\n          "+t._s(t.bannerTitle)+"\n        ")]),t._v(" "),n("p",{staticClass:"desc",class:t.selectionParams?"":"desc_catalogue",domProps:{innerHTML:t._s(t.bannerSubtitle)}})])],1),t._v(" "),t.bannerImage?n("img",{class:t.selectionParams?"selection-img":"banner-img",attrs:{src:t.bannerImage,alt:t.bannerTitle}}):t._e()])])}),[],!1,null,"5917127f",null);e.default=component.exports},1090:function(t,e,n){"use strict";n(22),n(12);var r=n(2),o=n(4),c=n(8);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h={name:"categoriesListRatings",components:{ButtonMain:n(43).default},computed:f(f(f({},Object(o.e)({showAllCategories:function(t){return t.ratings.showAllCategoriesRatings},categoriesRatings:function(t){return t.ratings.categoriesRatingsCatalogue},categoryIsSelected:function(t){return t.ratings.filters.category},activeCategory:function(t){return t.ratings.filters.category},activeSubcategory:function(t){return t.ratings.filters.subcategory}})),Object(o.c)({ShownCategoriesRatings:"ShownCategoriesRatings",RemainingCategoriesLengthRatings:"RemainingCategoriesLengthRatings"})),{},{categories:function(){return this.$device.isMobileOrTablet?this.categoriesRatings:this.ShownCategoriesRatings},btnText:function(){return this.showAllCategories?"Скрыть":"Ещё ".concat(this.RemainingCategoriesLengthRatings," ").concat(Object(c.q)(this.RemainingCategoriesLengthRatings,["категорий","категория","категории"]))}}),methods:f(f({},Object(o.d)({setRatingsCatalogueProp:"setRatingsCatalogueProp",setRatingsCatalogueFilter:"setRatingsCatalogueFilter"})),{},{toggleCategoriesView:function(){this.setRatingsCatalogueProp({showAllCategoriesRatings:!this.showAllCategories}),this.showAllCategories?this.sendGtmEvent({event:"ArticleClick",category:"Catalog_Rating",action:"Catalog_Rating_Category_More"}):this.sendGtmEvent({event:"ArticleClick",category:"Catalog_Rating",action:"Catalog_Rating_Category_Hide"})},resetCategory:function(){this.setRatingsCatalogueFilter({category:"",subcategory:""})},setCategory:function(t){var e=t.id,n=t.name;this.setRatingsCatalogueFilter({category:e,subcategory:""}),this.sendGtmEvent({event:"ArticleClick",category:"Catalog_Rating",action:"Catalog_Rating_Category_First",label:n})},setSubcategory:function(t){var e=t.id,n=t.name;this.setRatingsCatalogueFilter({subcategory:e}),this.sendGtmEvent({event:"ArticleClick",category:"Catalog_Rating",action:"Catalog_Rating_Category_Second",label:n})}})},d=(n(1550),n(0)),component=Object(d.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("aside",{staticClass:"categories-list-ratings",class:{"categories-list-ratings_selected":t.categoryIsSelected}},[n("categories-catalogue",{attrs:{categories:t.categories,"active-category":t.activeCategory,"active-subcategory":t.activeSubcategory},on:{reset:t.resetCategory,category:t.setCategory,subcategory:t.setSubcategory}}),t._v(" "),t.RemainingCategoriesLengthRatings>0||t.showAllCategories?n("button-main",{staticClass:"more-btn d-md-none",attrs:{text:t.btnText,color:"gray"},on:{click:t.toggleCategoriesView}}):t._e(),t._v(" "),n("transition",{attrs:{name:"fade"}},[t.categoryIsSelected?n("button-main",{staticClass:"d-none d-md-block btn-mobile",attrs:{text:"Показать товары",color:"red"},on:{click:t.closeSidebarMain}}):t._e()],1)],1)}),[],!1,null,"516fd814",null);e.a=component.exports;installComponents(component,{CategoriesCatalogue:n(1437).default,ButtonMain:n(43).default})},1092:function(t,e,n){"use strict";n.r(e);n(38),n(23),n(53);var r=n(2),o=(n(11),n(1)),c=n(4),l=(n(224),n(54)),f=n(1067),h=n.n(f),d=n(1089),m=n(1158);function C(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?C(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):C(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var y={name:"ratingCatalogueItems",props:{fullWidth:Boolean,isRatingCompilationPage:{type:Boolean,default:!1}},mixins:[l.a],components:{InfiniteLoading:h.a,skeletonItem:d.default,emptyQueryCatalogue:m.default},data:function(){return{isPending:!1,sliceItems:10}},fetch:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=t,e.next=4,t.LoadMain("getRatingsCatalogueItems",{requestOptions:{timeout:1e4},mergeItems:!1,compilation:t.isRatingCompilationPage},!0);case 4:return e.t1=e.sent,e.t2={wait:!0,func:e.t1},e.t3=[e.t2],e.next=9,e.t0.loadPageContent.call(e.t0,e.t3);case 9:e.next=14;break;case 11:e.prev=11,e.t4=e.catch(0),t.$emit("error",e.t4);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))()},computed:v(v(v({},Object(c.e)({hideNextBtnState:function(t){return t.ratings.hideNextBtn},filters:function(t){return t.ratings.filters},ratingsItemsLoaded:function(t){return t.ratings.ratingCatalogueItemsLoaded},ratingsItemsLoading:function(t){return t.ratings.ratingCatalogueItemsLoading},items:function(t){return t.ratings.ratingsCatalogueItems.slice(0,100)},search:function(t){return t.ratings.search}})),Object(c.c)({HideCategoriesForSearch:"HideCategoriesForSearchRatings",ratingCatalogueEmptyItems:"RatingsEmptyItemsList"})),{},{skeletonLength:function(){return this.items.length<=16?16:this.items.length},hideNextBtn:function(){return!this.items.length||this.hideNextBtnState||this.HideCategoriesForSearch},showInfiniteLoading:function(){return!(!this.ratingsItemsLoaded||!this.items.length)&&(this.isMobile?!this.isEmptyItems&&!this.hideNextBtnState:this.HideCategoriesForSearch&&!this.isEmptyItems&&!this.hideNextBtnState)},showFromInCart:function(){return!this.filters.selectedStore},isEmptyItems:function(){return this.ratingsItemsLoaded&&!this.items.length},isMobile:function(){return this.viewport.width<768},itemsOverflow:function(){return this.isRatingCompilationPage&&this.items.length>=100}}),watch:{filters:{handler:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.search?t.searchInRatingCatalogue().catch((function(e){t.$emit("error",e)})):t.getRatingsCatalogueItems({mergeItems:!1,blockQuery:!1,compilation:t.isRatingCompilationPage}).catch((function(e){t.$emit("error",e)}));case 1:case"end":return e.stop()}}),e)})))()},deep:!0},search:function(t){var e=this;this.resetFiltersCategoryOnSearchRatings(),t||(this.setRatingsCatalogueProp({hideNextBtn:!1}),this.getRatingsCatalogueItems({mergeItems:!1,blockQuery:!1,compilation:this.isRatingCompilationPage}).catch((function(t){e.$emit("error",t)})))}},methods:v(v(v({},Object(c.d)({setRatingsCatalogueProp:"setRatingsCatalogueProp",resetFiltersCategoryOnSearchRatings:"resetFiltersCategoryOnSearchRatings"})),Object(c.b)({getRatingsCatalogueItems:"getRatingsCatalogueItems",getRatingLeaderItemIndexPage:"indexPage/getRatingLeaderItemIndexPage",searchInRatingCatalogue:"searchInRatingCatalogue"})),{},{openSidebar:function(t){return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return");case 6:case"end":return t.stop()}}),t)})))()},loadNextPage:function(){var t=this;this.getRatingsCatalogueItems({mergeItems:!0,compilation:this.isRatingCompilationPage}).catch((function(e){return t.$emit("error",e)})),this.sendGtmEvent({event:"ArticleClick",category:"Catalog_Rating",action:"Catalog_Rating_More"})},infiniteLoad:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!e.itemsOverflow){n.next=2;break}return n.abrupt("return");case 2:if(!e.isPending){n.next=4;break}return n.abrupt("return");case 4:if(e.isPending=!0,!e.isRatingCompilationPage){n.next=9;break}e.sliceItems<=e.items.length?(e.sliceItems=e.sliceItems+10,t.loaded()):t.complete(),n.next=26;break;case 9:if(n.prev=9,!e.search){n.next=16;break}return n.next=13,e.searchInRatingCatalogue();case 13:r=n.sent,n.next=19;break;case 16:return n.next=18,e.getRatingsCatalogueItems({mergeItems:!0,loading:!1});case 18:r=n.sent;case 19:r?t.loaded():t.complete(),n.next=26;break;case 22:n.prev=22,n.t0=n.catch(9),t.error(),e.$emit("error",n.t0);case 26:e.isPending=!1;case 27:case"end":return n.stop()}}),n,null,[[9,22]])})))()}})},O=(n(1563),n(0)),component=Object(O.a)(y,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"rating-catalogue-items",class:{"rating-catalogue-items_full":t.fullWidth}},[!t.ratingsItemsLoading&&!t.isEmptyItems&&t.ratingsItemsLoaded&&t.items.length?n("div",{staticClass:"items-list"},[t._l(t.items,(function(e,r){return n("product-card-main",{key:e.id,staticClass:"item",attrs:{item:e,"search-item":!!t.search,"show-scores":"",pageRatingSelection:t.isRatingCompilationPage,count:r+1},on:{click:function(n){return t.openSidebar(e)}}})})),t._v(" "),t.hideNextBtn||t.isMobile?t._e():n("div",{staticClass:"more-btn-cont"},[n("button",{staticClass:"add-more-btn",attrs:{type:"button"},on:{click:t.loadNextPage}},[t._v("\n        Загрузить"),n("br"),t._v("ещё\n      ")])])],2):t.isEmptyItems&&!t.ratingsItemsLoading?n("empty-query-catalogue",{attrs:{"full-width":t.fullWidth,items:t.ratingCatalogueEmptyItems},on:{mounted:function(e){return t.sendGtmEvent({event:"ArticleClick",category:"Catalog_Rating",action:"Catalog_Rating_Search_Empty"})},open:function(e){return t.openSidebar(e)}}}):t._e(),t._v(" "),!t.ratingsItemsLoading&&(t.isEmptyItems||t.ratingsItemsLoaded&&t.items.length)?t._e():n("div",{staticClass:"items-list"},t._l(t.skeletonLength,(function(t){return n("skeleton-item",{key:t})})),1),t._v(" "),n("client-only",[t.showInfiniteLoading&&!t.itemsOverflow?n("InfiniteLoading",{ref:"infiniteLoading",staticClass:"rating-items-loading",attrs:{"force-use-infinite-wrapper":"#referenceWindow"},on:{infinite:t.infiniteLoad},scopedSlots:t._u([{key:"no-more",fn:function(){return[n("p",{staticClass:"p-20"})]},proxy:!0},{key:"no-results",fn:function(){return[n("p",{staticClass:"p-20"})]},proxy:!0},{key:"error",fn:function(){return[n("p",{staticClass:"p-20"})]},proxy:!0},{key:"spinner",fn:function(){return[n("div",{staticClass:"news-list__spinner"},[n("loading-icon",{attrs:{size:t.isMobile?24:30}})],1)]},proxy:!0}],null,!1,3192897683)}):t._e()],1)],1)}),[],!1,null,"74360931",null);e.default=component.exports;installComponents(component,{ProductCardMain:n(654).default,EmptyQueryCatalogue:n(1158).default,SkeletonItem:n(1089).default,LoadingIcon:n(81).default})},1241:function(t,e,n){},1245:function(t,e,n){},1246:function(t,e,n){},1247:function(t,e,n){},1248:function(t,e,n){},1249:function(t,e,n){},1250:function(t,e,n){},1254:function(t,e,n){},1438:function(t,e,n){"use strict";n.r(e);n(83),n(23),n(42);var r=n(2),o=n(653),c=n(43),l=n(4),f=n(14);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m={name:"filterSearchRating",components:{ButtonMain:c.default,SearchField:o.default},data:function(){return{validationRegExp:new RegExp("^[0-9а-яА-Я .,-]+$"),isPending:!1,search:"",searchRegExp:f.g}},watch:{search:function(t,e){this.setRatingsCatalogueProp({search:t,ratingsCatalogueItems:[],ratingCatalogueItemsLoading:!0}),this.searchInRatingCatalogue(),this.sendGtmEvent({event:"ArticleClick",category:"Catalog_Rating",action:"Catalog_Rating_Search_Input"})}},methods:d(d(d({},Object(l.d)({setRatingsCatalogueFilter:"setRatingsCatalogueFilter",setRatingsCatalogueProp:"setRatingsCatalogueProp"})),Object(l.b)({getRatingsCatalogueItems:"searchInRatingCatalogue",searchInRatingCatalogue:"searchInRatingCatalogue"})),{},{searchItems:function(){this.getRatingsCatalogueItems({mergeItems:!1,blockQuery:!1}),this.sendGtmEvent({event:"ArticleClick",category:"Catalog_Rating",action:"Catalog_Rating_Search"})}})},C=(n(1558),n(0)),component=Object(C.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"filter-search"},[n("search-field",{staticClass:"search-field",attrs:{placeholder:t.$device.isMobileOrTablet?"Поиск":"Поиск по товарам","min-length":"2","max-length":"50","style-obj":{background:"white"},"is-small-bordered":"",delay:"","reg-exp":t.searchRegExp},on:{clear:function(e){t.search=""}},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),t._v(" "),n("button-main",{staticClass:"d-md-none",attrs:{text:"Найти",ring:""},on:{click:t.searchItems}})],1)}),[],!1,null,"a1148754",null);e.default=component.exports;installComponents(component,{SearchField:n(653).default,ButtonMain:n(43).default})},1466:function(t,e,n){"use strict";n.r(e);n(79),n(12);var r=n(2),o=n(4);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={name:"filterSortMenuRating",computed:l({},Object(o.e)({filters:function(t){return t.ratings.sortList},filterSort:function(t){return t.ratings.filters.sort}})),methods:l(l({},Object(o.d)({setRatingsCatalogueFilter:"setRatingsCatalogueFilter"})),{},{sortClick:function(t){var e=t.value;t.value===this.filterSort&&(e=this.filters[this.filters.length-1].value),this.setRatingsCatalogueFilter({sort:e}),this.sendGtmEvent({event:"ArticleClick",category:"Catalog_Rating",action:"Catalog_Rating_Sorting_Select",label:t.name})}})},h=(n(1555),n(0)),component=Object(h.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"filter-sort-menu"},[n("ul",{staticClass:"sort-list"},t._l(t.filters,(function(e){return n("li",{key:e.id,staticClass:"sort-item"},[n("label",{staticClass:"radio-wrap"},[n("input",{attrs:{type:"radio",name:"offers-sort"},domProps:{checked:t.filterSort===e.value,value:e.value},on:{click:function(n){return t.sortClick(e)}}}),t._v(" "),n("span",[t._v("\n          "+t._s(e.name)+"\n        ")])])])})),0)])}),[],!1,null,"72c99009",null);e.default=component.exports},1550:function(t,e,n){"use strict";n(1241)},1554:function(t,e,n){"use strict";n(1245)},1555:function(t,e,n){"use strict";n(1246)},1556:function(t,e,n){"use strict";n(1247)},1557:function(t,e,n){"use strict";n(1248)},1558:function(t,e,n){"use strict";n(1249)},1559:function(t,e,n){"use strict";n(1250)},1563:function(t,e,n){"use strict";n(1254)}}]);