import styles from "./product.module.css";

const ProductItem = ({ item: { id, title, price, image }, setRoute }) => {
  const onClickItem = () => {
    window.location.hash = id;
    setRoute("productDetail");
  };

  return (
    <div className={styles.card} onClick={onClickItem}>
      <img className={styles.image} src={image} />
      <span className={styles.title}>{title}</span>
      <span className={styles.price}>${price}</span>
    </div>
  );
};

export default ProductItem;
