import './App.css'
import {Route, Routes} from "react-router-dom";
import DefaultLayout from "./containers/default/DefaultLayout.tsx";
import CategoryList from "./category/list/CategoryList.tsx";
import CategoryCreate from "./category/create/CategoryCreate.tsx";
import CategoryEdit from './category/edit/CategoryEdit.tsx';
import GoodsList from './goods/create/list/GoodsList.tsx';
import GoodsCreate from './goods/create/GoodsCreate.tsx';

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
                <Route path={"goods"}>
                    <Route path={"list"} element={<GoodsList/>}/>
                    <Route path={"create"} element={<GoodsCreate/>}/>
                </Route>
            </Route>
        </Routes>
    </>
  )
}

export default App