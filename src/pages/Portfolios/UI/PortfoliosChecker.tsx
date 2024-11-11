import { useAppSelector } from '../../../shared/models';
import UserSection from './UserSection';
import PortfoliosSection from './PortfoliosSection';

const PortfoliosChecker = () => {
    const user = useAppSelector(state => state.userSlice.user)
    return (
        <div className='portfolio__checker'>
            {user ? <PortfoliosSection/> : <UserSection />}
        </div>
    );
};

export default PortfoliosChecker;