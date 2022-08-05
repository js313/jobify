import { useAppContext } from "../context/appContext"

function Alert() {
    const contextValues = useAppContext()

    return (
        <div className={`alert alert-${contextValues.alertType}`}>
            {contextValues.alertText}
        </div>
    )
}

export default Alert