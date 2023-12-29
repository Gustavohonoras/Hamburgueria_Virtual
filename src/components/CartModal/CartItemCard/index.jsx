import { MdDelete } from "react-icons/md"
import styles from "../styles.module.scss"


export const CartItemCard = ({ product ,  setCartList, cartList}) => {
  const removeProduct = (product, cartList) => {
      const newList = cartList.filter((cart) => cart.id !== product.id)
      setCartList(newList)
  }; 

   
   return (
      <li  className={styles.productsAll}>
         <div className={styles.productList}>
            <img src={product.img} alt={product.name} className={styles.img} />
            <div className={styles.description}>
             <h3 className={styles.name}>{product.name}</h3>
            <span className={styles.price}>{product.price.toLocaleString('pt-BR', { style: "currency", currency: "BRL"})}</span>  
            </div>
            
         </div>
         <button onClick={() => removeProduct(product,cartList)} className={styles.delete} aria-label="delete" title="Remover item">
            <MdDelete size={21} />
         </button>
      </li>
   );
};
