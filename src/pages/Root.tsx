import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import Container from '../shared/ui/Container/Container';

const Root = () => {
    return (
        <>
            <Header />
            <Container>
                <Outlet />
            </Container>
        </>
    );
};

export default Root;
