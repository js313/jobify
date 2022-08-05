import { Link } from 'react-router-dom'
import classes from '../assets/css-modules/ErrorPage.module.css'
import img from '../assets/images/not-found.svg'

function Error() {
    return (
        <main className={`${classes.main} full-page`}>
            <div>
                <img src={img} className={`${classes.img}`} alt='Not Found' />
                <h3 className={`${classes.h3}`}>Ohh! page not found</h3>
                <p className={`${classes.p}`}>We can't seem to find the page you're looking for.</p>
                <Link to='/' className={`${classes.a}`}>Back home</Link>
            </div>
        </main>
    )
}

export default Error