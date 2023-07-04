import logo from '../../assets/imgs/logo-2.png'
import { Link } from 'react-router-dom'

export default function Logo() {
    return (
        <div className="logo">
            <Link to="/">
                <img src={logo} alt="logo-imc" />
            </Link>
        </div>
    )
}