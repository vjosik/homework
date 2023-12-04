import Router from "@/plugins/router";
import Movies from "@/pages/movies";
import SignIn from "@/pages/sign-in/SignIn";
import SignUp from "@/pages/sign-up/SignUp";
import NotFound from "@/pages/not-found";


const routes = [
  {
    path: '/',
    component: Movies
  },
  {
    path: '/sign-in',
    component: SignIn
  },
  {
    path: '/sign-up',
    component: SignUp
  },
  {
    path: '*',
    component: NotFound
  }
];


export const router = new Router(routes);


const isAuth = true;

router.setGuardBefore(function (to, from, next) {

  if (to !== '/sign-in' && !isAuth) {
    next('/sign-in')
  } else {
    next()
  }
})



//
// router.subscribePageLoaded(function () {
//   console.log('--- hook page loaded ---')
//   // console.log(document.querySelector('#app .router-view').outerHTML)
// })