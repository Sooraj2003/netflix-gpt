import Login from "./Login"
import Browse from "./Browse"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import MoviePage from "./MoviePage"


const Body = () => {

  
    const appRouter = createBrowserRouter([
        {
            path:"/",
            element:<Login/>
        },
        {
            path:"/browse",
            element:<Browse/>
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
