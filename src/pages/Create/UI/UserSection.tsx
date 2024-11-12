import { useNavigate } from 'react-router';
import LogButton from '../../../shared/ui/LogButton/LogButton';

const UserSection = () => {
    const navigate = useNavigate()
    const signIn = () => navigate("/login")
    const signUp = () => navigate("/registration")
    return (
        <div className='user-section'>
            <p className='user-section__text'>
                To create a portfolio, you need to register
            </p>
            <div className="user-section__buttons">
                <LogButton onClick={signIn}>Sign in</LogButton>
                <LogButton onClick={signUp}>Sign up</LogButton>
            </div>
        </div>
    );
};

export default UserSection;