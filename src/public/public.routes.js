!function(){"use strict";function e(e){e.state("public",{absract:!0,templateUrl:"src/public/public.html"}).state("public.home",{url:"/",templateUrl:"src/public/home/home.html"}).state("public.myinfo",{url:"/myinfo",templateUrl:"src/public/myinfo/myinfo.html",controller:"MyinfoController",controllerAs:"myctrl",resolve:{user:["MenuService",function(e){return e.getSignupinfo()}]}}).state("public.menu",{url:"/menu",templateUrl:"src/public/menu/menu.html",controller:"MenuController",controllerAs:"menuCtrl",resolve:{menuCategories:["MenuService",function(e){return e.getCategories()}]}}).state("public.menuitems",{url:"/menu/{category}",templateUrl:"src/public/menu-items/menu-items.html",controller:"MenuItemsController",controllerAs:"menuItemsCtrl",resolve:{menuItems:["$stateParams","MenuService",function(e,t){return t.getMenuItems(e.category)}]}}).state("public.signup",{url:"/signup",templateUrl:"src/public/signup/signup.html",controller:"signupController",controllerAs:"reg"}).state("public.ack",{url:"/ack",template:"<div><h3> Your information has been saved</h3></div>"}).state("public.ack1",{url:"/ack1",template:'<div><h3>Not Signed Up Yet</h3><a ui-sref="public.signup">Sign up Now!t</a></div>'})}angular.module("public").config(e),e.$inject=["$stateProvider"]}();