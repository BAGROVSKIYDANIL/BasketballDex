import PageError from '../../../../assets/images/PageError.svg'

import './Error404.scss'

const Error404 = () => {
    return (
        <div className="container">
                <div className="error">
            <div className="error__img">
                <img src={PageError} alt="" />
            </div>
            <div className="error__title">Page not found</div>
            <div className="error__subtitle">Sorry, we can`t find what you`re looking for</div>
        </div>

        </div>
    );
};

export default Error404;