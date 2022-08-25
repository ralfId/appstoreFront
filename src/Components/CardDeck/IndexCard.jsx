import React, { useState, useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
// import { appStoreApi } from "../../api/appStoreApi";
// import { setCategories } from "../../store/category/categorySlice";
import { getCategories } from "../../store/category/categoryThunks";
import { CardContainer } from "./CardContainer";


export const IndexCard = () => {
  const dispatch = useDispatch();
  const { data: CategoryList } = useSelector(state => state.category);

  const [categoryID, setCategoryID] = useState(0);

  useEffect(() => {
    dispatch(getCategories())

  },[dispatch]);

  const comboSelected = () => {
    const category = document.querySelector('#listCategories');
    setCategoryID(category.selectedIndex)
  }

  return (
    <>
      <div className="container bg-danger mt-3">
        <select className="col-md-12 mb-5" id="listCategories" onChange={comboSelected} style={{ height: "3rem", fontSize: '1.5rem' }} >
        <option key={0}>Todas las categorias</option>
          {
            CategoryList.map(({ id, name }) => (<option key={id}>{name}</option>))
          }
        </select>
          <CardContainer categoryId={ categoryID }/>

      </div>
    </>
  )
}
