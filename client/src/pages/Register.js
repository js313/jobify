import { useState, useEffect } from 'react'
import { Logo } from '../components'
import classes from '../assets/css-modules/RegisterPage.module.css'
import FormRow from '../components/FormRow'
import Alert from '../components/Alert'
import { useAppContext } from '../context/appContext'
import { SHOW_ALERT } from '../context/actions'

const initialState = {
    name: '',
    email: '',
    password: '',
    isMember: true
}

function Register() {
    const [values, setValues] = useState(initialState)
    const contextValues = useAppContext()

    function changeHandler(event) {
        setValues(state => { return { ...state, [event.target.name]: event.target.value } })
    }

    function submitHandler(event) {
        event.preventDefault()

        if (!values.email || !values.password || (!values.isMember && !values.name)) {
            contextValues.displayAlert({ type: SHOW_ALERT })
            return
        }
        contextValues.hideAlert()
        console.log(values)
    }

    function toggleMember() {
        setValues(state => { return { ...state, isMember: !state.isMember } })
    }

    return (
        <section className={`full-page ${classes.section}`}>
            <form className={`form ${classes.form}`} onSubmit={submitHandler}>
                <Logo className={classes.logo} />
                <h3 className={`${classes.h3}`}>{values.isMember ? 'Login' : 'Register'}</h3>

                {contextValues.showAlert && <Alert />}
                {values.isMember ? '' :
                    <FormRow type='text' name='name' labelName='name' value={values.name} changeHandler={changeHandler} />}

                <FormRow type='text' name='email' labelName='email' value={values.email} changeHandler={changeHandler} />
                <FormRow type='password' name='password' labelName='password' value={values.password} changeHandler={changeHandler} />

                <button className={`btn-block btn ${classes.btn}`} type='submit'>submit</button>
                <p className={`${classes.p}`}>
                    {values.isMember ? 'Not a member yet?' : 'Already a member?'}

                    <button type='button' onClick={toggleMember} className={classes['member-btn']}>
                        {values.isMember ? 'Register' : 'Login'}
                    </button>
                </p>
            </form>
        </section>
    )
}

export default Register