import { RouterProvider } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { router } from './routes';
import { Toaster } from 'react-hot-toast';

const Providers = () => {
    return (
        <CartProvider>
            <RouterProvider router={router} />
            <Toaster />
        </CartProvider>
    );
};

export default Providers;
