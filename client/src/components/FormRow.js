function FormRow(props) {
    return (
        <div className='form-row'>
            <label htmlFor={props.name} className='form-label'>
                {props.labelName}
            </label>
            <input type={props.type} value={props.value} name={props.name} onChange={props.changeHandler} className='form-input' />
        </div>
    )
}

export default FormRow