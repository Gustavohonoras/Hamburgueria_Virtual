import styles from "./styles.module.scss"
import { useState } from "react"

export const ProductCard = ({ product , setCartList, cartList, productsList} ) => {
  
    const newID = (product) =>{
        
        const newList = { ...product, id: crypto.randomUUID() }
        setCartList([...cartList , newList])
        
    }
    return(
        <li className={styles.product}>
            <div className={styles.imgs}>
              <img src={product.img} alt={product.name} />  
            </div>
            
            <div className={styles.description}>
                <h3 className={styles.title}>{product.name}</h3>
                <span className={styles.spam}>{product.category}</span>
                <span className={styles.price}>{product.price.toLocaleString('pt-BR', { style: "currency", currency: "BRL"})}</span>
                <button onClick={() => newID(product) } className={styles.button}>Adicionar</button>
    
            </div>
        </li>
    )
}