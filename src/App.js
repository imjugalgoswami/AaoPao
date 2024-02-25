import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Header from "./components/Header";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import Restaurant from "./components/Restaurant";
import Cart from "./components/Cart";
import { Provider } from "react-redux";
import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";
import UserContext from "./utils/UserContext";
import appStore from "./utils/appStore";
const AppLayout = ()=> {

    const [userName , setUserName] = useState();

    useEffect(()=>{

        const data = {
            userName : "Jugal Goswami",
        };
        
        setUserName(data.userName);
    },[]);

    return (
        <Provider store={appStore}>
            <UserContext.Provider value={{loggedInUser:userName,setUserName}}>
                <div className="app">
                    <Header/>
                    <Outlet/>
                </div>
            </UserContext.Provider>
        </Provider>
    );
};

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/contact",
                element:<Contact/>,
            },
            {
                path:"/restaurants/:resId",
                element:<Restaurant/>,
                // errorElement:<Error/>
            },
            {
                path:"/cart",
                element:<Cart/>,
            }

        ],
        errorElement:<Error/>
    },
]);



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);