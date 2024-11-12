import cl from "./Spinner.module.scss"
import RingLoader from "react-spinners/RingLoader";

const Spinner = () => {
    return (
        <div className={cl.spinnerContainer}>
            <RingLoader color='white' />
        </div>
    );
};

export default Spinner;