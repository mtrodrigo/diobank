import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Account from "./pages/Account";
import InfoAcoount from "./pages/InfoAccount";
import { useContext } from "react";
import { AppContext } from "./components/AppContext/AppContext";
import { Page404 } from "./pages/Page404";

export function MainRoutes() {

    const { isLoggedIn } = useContext(AppContext)

    return (
        <Routes>
            <Route path='/' element={<Home />} />
            {isLoggedIn && (
                <>
                    <Route path='/account/:id' element={<Account />} />
                    <Route path='/infoaccount' element={<InfoAcoount />} />
                </>
            )}
                <Route path='*' element={<Page404 />} />
            
        </Routes>
    )
}