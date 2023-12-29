import { MdClose } from "react-icons/md"
import { CartItemCard } from "./CartItemCard"
import styles from "./styles.module.scss"
import { useEffect, useRef } from "react"

export const CartModal = ({ cartList , setIsOpen, setCartList}) => {
   const modalRef = useRef(null)

   useEffect (()=> {
      const handleOutClick = (event) =>{
         if(!modalRef.current?.contains(event.target)){
         
         }
         
      }
      window.addEventListener("mousedown" , handleOutClick )

      return() => {
         window.removeEventListener("mousedown", handleOutClick)
      }
   },[])

   const buttonRef = useRef(null) 
   useEffect(() =>{
      const handeKeydown = (event) =>{
         if(event.key === "Escape"){
            setIsOpen(false)
         }
      }

      window.addEventListener("keydown", handeKeydown )

      return () => {
         window.removeEventListener("keydown", handeKeydown)
      }
   }, [])

   const total = cartList.reduce((prevValue, product) => {
      return prevValue + product.price
   }, 0);

   const removeAll = () =>{
      setCartList([])
   }
   return (
      <div  role="dialog"  className={styles.modalOverlay}>
         <div ref={modalRef} className={styles.modalBox}>
            <h2>Carrinho de compras</h2>
            <button className={styles.closeButton} aria-label="close" title="Fechar" onClick={() => setIsOpen(false)} >
               <MdClose size={21} />
            </button>

         </div>
         <div ref={modalRef} className={styles.products}>
            <ul>
               {cartList.map((product) => (
                  <CartItemCard  setCartList={setCartList} key={product.id}  product={product} cartList={cartList} />
               ))}
            </ul>
         </div>
         <div ref={modalRef} className={styles.footer}>
            <div className={styles.footerText}>
               <span className={styles.footerTitle}>Total</span>
               <span>{total.toLocaleString('pt-BR', { style: "currency", currency: "BRL"})}</span>
            </div>
            <button onClick={() => removeAll()} className={styles.buttonRemoveAll}>Remover todos</button>
         </div>
      </div>
   );
};
