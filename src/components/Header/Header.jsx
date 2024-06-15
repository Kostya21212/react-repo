import birdColorfulGradientDesignVector from '../../images/bird-colorful-gradient-design-vector.png';
import 'bootstrap-icons/font/bootstrap-icons.css';

function HeaderFunction() {
    return (
        <div>
            <div className="text-center p-3 text-primary-emphasis bg-transparent position-relative z-index-1 border border-primary-subtle rounded-3 flex column-gap-3">
                <img src={birdColorfulGradientDesignVector} alt="logo" style={{ width: '70px', height: '70px' }} />
                <button className="btn bg-transparent ms-5">Головна <i className="bi bi-house"></i></button>
                <button className="btn bg-transparent ms-5">Товари <i className="bi bi-credit-card-fill"></i></button>
                <button className="btn bg-transparent ms-5">Реєстрація <i className="bi bi-box-arrow-left"></i></button>
                <button className="btn bg-transparent ms-5">Контакти <i className="bi bi-person-lines-fill"></i></button>
                <button className="btn bg-transparent ms-5">Cмайлик <i className="bi bi-emoji-smile-fill"></i></button>
                <button className="btn bg-transparent ms-5">Todo-list <i className="bi bi-check2"></i></button>
                <button className="btn bg-transparent ms-5"><a href='https://github.com/Kostya21212/HomePageSite.git'>GitHub <i className="bi bi-github"></i></a></button>
            </div>
        </div>
    );
}

export default HeaderFunction;
