import { useState } from "react"
import Logo from "../../assets/Logo.svg"
import { MdSearch, MdShoppingCart } from "react-icons/md"
import styles from "./style.module.scss"
import { CartModal } from "../CartModal"

export const Header = ({setSearch , setIsOpen, cartList}) => {
  
   const [value, setValue] = useState("")
   
   const submit = (e) => {
      e.preventDefault()
      setSearch(value)
      setValue('')
   }

   return (
      <header className={styles.header}>
         <img src={Logo} alt="Logo Kenzie Burguer" />
         <div className={styles.cartInput}>
            <button className={styles.cart} onClick={() => setIsOpen(true)}>
                <MdShoppingCart size={21} className={styles.carr}/>
                <span className={styles.numberCart}>{cartList.length}</span>
            </button>
            
            <form onSubmit={submit} className={styles.form}>
               <input 
                  className={styles.inputname}
                  type="text"
                  value={value}
                  required
                  onChange={(e) => setValue(e.target.value)}
               />
               <button className={styles.submit} type="submit"   >
                 <MdSearch size={21} />
               </button>
            </form>
         </div>
         
      </header>
   );
};
