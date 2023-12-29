import { useEffect, useState } from "react"
import { CartModal } from "../../components/CartModal"
import { Header } from "../../components/Header"
import { ProductList } from "../../components/ProductList"
import {api} from "../../api.js"

export const HomePage = () => {
   
   const [productList, setProductList] = useState([])
   
   const localCartList = localStorage.getItem("@CART")
   const [cartList, setCartList] = useState(
      localCartList ? JSON.parse(localCartList) : [])
      useEffect(() => {
         localStorage.setItem("@CART", JSON.stringify(cartList))
      })
   const [isOpen, setIsOpen] = useState(false)
   

   useEffect(() => {
      const products = async() => {
        const { data } = await api.get("/products");
        setProductList(data)
        localStorage.setItem("products", JSON.stringify(data))
      }
      products()
    }, [])

    const [search, setSearch] = useState("")
    const productsResult = productList.filter(product => product.name.toLowerCase().includes(search.toLowerCase()) ||product.category.toLowerCase().includes(search.toLowerCase()))
    const productsList = search ? productsResult : productList

   // renderizações condições e o estado para exibir ou não o carrinho  
   // filtro de busca
   // estilizar tudo com sass de forma responsiva

   return (
      <>
         <Header setSearch={setSearch} setIsOpen={setIsOpen} cartList={cartList} />
         <main>

            <ProductList productsList={productsList}  setCartList={setCartList} cartList={cartList} />
            {isOpen ? <CartModal setCartList={setCartList} cartList={cartList} setIsOpen={setIsOpen}/> : null}  
         </main>
      </>
   );
};
