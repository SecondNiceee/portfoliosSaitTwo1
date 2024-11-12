import { useAppSelector } from '../../../shared/models';
import UserSection from './UserSection';
import { PortfolioEfitor } from '../../../features/Portfolio/PortfolioEditor';

const CreateChecker = () => {
    const user = useAppSelector( state  => state.userSlice.user)
    return (
        <>
            {user ? <PortfolioEfitor determiner='create' /> : <UserSection />}
        </>
    );
};

export default CreateChecker;