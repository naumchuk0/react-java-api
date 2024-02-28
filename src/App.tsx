import './App.css'
import {Route, Routes} from "react-router-dom";
import DefaultLayout from "./containers/default/DefaultLayout.tsx";
import CategoryList from "./category/list/CategoryList.tsx";
import CategoryCreate from "./category/create/CategoryCreate.tsx";
import CategoryEdit from './category/edit/CategoryEdit.tsx';

function App() {
  return (
    <>
        <Routes>
            <Route path={"/"} element={<DefaultLayout/>}>
                <Route index element={<CategoryList/>}/>
                <Route path={"category"}>
                    <Route path={"create"} element={<CategoryCreate/>}/>
                    <Route path={"edit/:id"} element={<CategoryEdit/>}/>
                </Route>
            </Route>
        </Routes>
    </>
  )
}

export default App