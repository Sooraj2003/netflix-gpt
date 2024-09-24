import Login from "./Login"
import Browse from "./Browse"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import MoviePage from "./MoviePage"
import BrowseErrorPage from "./BrowseErrorPage"


const Body = () => {

  
    const appRouter = createBrowserRouter([
        {
            path:"/",
            element:<Login/>
        },
        {
            path:"/browse",
            element:<Browse/>,
            errorElement:<BrowseErrorPage/>
            
        },{
          path:"/movie/:movieId",
          element:<MoviePage/>
        }
    ])
  return (
    <div>
      <RouterProvider className="" router={appRouter}/>
    </div>
  )
}

export default Body;
