import pic1 from '../../images/pic1.jpg';
import pic2 from '../../images/pic2.jpg';
import pic3 from '../../images/pic3.jpg';

const Goods = () => {
    return (
        <div className='Container'>
            <ul className='d-flex flex-row justify-content-center gap-5'>
                <li >
                    <div className="card bg-warning" style={{ width: '18rem' }}>
                        <img src={pic2} className="card-img-top" alt="..."style={{height: '300px'}} />
                        <div className="card-body">
                            <h5 className="card-title">Телефон</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Купити</a>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="card bg-warning" style={{ width: '18rem' }}>
                        <img src={pic1} className="card-img-top" alt="..."style={{height: '300px'}} />
                        <div className="card-body">
                            <h5 className="card-title">Телефон</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Купити</a>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="card bg-warning" style={{ width: '18rem' }}>
                        <img src={pic3} className="card-img-top" alt="..."style={{height: '300px'}} />
                        <div className="card-body">
                            <h5 className="card-title">Телефон</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Купити</a>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default Goods;
