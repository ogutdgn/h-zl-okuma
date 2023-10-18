export const getPageTitleByRoute = (path) => {
  var title = "";
  
    routes.forEach(route => {
      if (route.subRoutes !== undefined){
        route.subRoutes.forEach(subRoute => {
          if(path === subRoute.path){
            title = subRoute.name;
          }
        });
      }

      else if(path === route.path){
        title = route.name;
      }
    });
    return title;
}

const routes = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/about",
    name: "About",
  },
  {
    path: "/contact",
    name: "Contact",
  },
  {
    path: "/services",
    name: "Services",
  },
  {
    path: "/exercise",
    name: "Exercise",
    subRoutes: [
      {
        path: "/exercise/reading-test",
        name: "Reading Test",
      },
      {
        path: "/exercise/reading-exercise",
        name: "Reading Exercise",
      },
      {
        path: "/exercise/reading-exercise2",
        name: "Reading Exercise 2",
      },
    ],
  },
];

export default routes;
