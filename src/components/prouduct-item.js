import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ProductItem(props) {
    const { main_image, price, title, discount } = props;
    return (
        <Card className='product-item shadow-lg' style={{ width: '18rem' }}>
            <Card.Img variant="top" src={`https://api.office.promarket.besoft.kg/${main_image.path.original}`} />
            <Card.Body>
                <Card.Text>
                    {title}
                </Card.Text>
                <Card.Text>
                    {price} сом
                </Card.Text>
                {
                    discount !== null ?
                        <div
                            style={{ color: 'white' }}
                            className='bg-danger rounded-circle d-inline-block p-2'>
                            {discount} %
                        </div>
                        :
                        null
                }
            </Card.Body>
        </Card>
    );
}

export default ProductItem;