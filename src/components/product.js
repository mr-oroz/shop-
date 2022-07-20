import ProductItem from "./prouduct-item"

const Product = ({ product }) => {
    return (
        <div className="product">
            {
                product.map(elem => (
                    <ProductItem
                        key={elem.id}
                        {...elem} />
                ))
            }
        </div>
    )
}

export default Product