import { Link } from "react-router-dom";


const Header = () => {
    return (
        <div className="text-3xl text-center">
            <h1>Header </h1>
            <Link to='/login'>
                <button>Login</button>
            </Link>
        </div>
    );
};

export default Header;