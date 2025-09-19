import "./book.css";

function Book({ image, price, url }) {
    return (
        <div className='container'>
            <img src={image} className='image' />
            <div className='author'>
                <h4>{price}</h4>
            </div>
            <a href={url} target='_blank' className='link'>
                Learn more
            </a>
        </div>
    );
}

export default Book;
