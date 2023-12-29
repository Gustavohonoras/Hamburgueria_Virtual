import { ProductCard } from "./ProductCard"
import styles from "./styles.module.scss"
export const ProductList = ({ productsList , setCartList , cartList}) => {
   return (
      <ul className={styles.list}>
         {productsList.map((product) => (
            <ProductCard key={product.id} product={product} setCartList={setCartList} cartList={cartList}/>
         ))}
      </ul>
   );
};
