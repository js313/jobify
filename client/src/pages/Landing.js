import main from '../assets/images/main.svg'
import classes from '../assets/css-modules/LandingPage.module.css'
import { Logo } from '../components'
import { Link } from 'react-router-dom'

function Landing() {
    return (
        <main>
            <nav className={classes.nav}>
                <Logo />
            </nav>
            <div className={`container ${classes.page}`}>
                <div className='info'>
                    <h1 className={classes.h1}>
                        job <span className={classes.span}>tracking</span> app
                    </h1>
                    <p className={classes.p}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'.</p>
                    <Link to='/register' className='btn btn-hero'>Login/Register</Link>
                </div>
                <img src={main} alt='job hunt' className={`img ${classes['main-img']}`} />
            </div>
        </main>
    )
}

export default Landing