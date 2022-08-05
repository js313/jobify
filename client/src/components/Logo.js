import logo from '../assets/images/logo.svg'

function Logo(props) {
    return <img src={logo} alt='jobify' className={props.className} />
}

export default Logo