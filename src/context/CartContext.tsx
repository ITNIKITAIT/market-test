import {
    createContext,
    useContext,
    useState,
    ReactNode,
    useEffect,
    useMemo,
} from 'react';
import { IProduct } from '../types/product';

export interface CartItem {
    product: IProduct;
    quantity: number;
}

interface CartContextType {
    cart: CartItem[];
    addToCart: (product: IProduct) => void;
    removeFromCart: (id: number) => void;
    total: number;
}

const getStoredCart = (): CartItem[] => {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
};

const CartContext = createContext<CartContextType | null>(null);

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [cart, setCart] = useState<CartItem[]>(getStoredCart);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (product: IProduct) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find(
                (item) => item.product.id === product.id
            );

            if (existingItem) {
                return prevCart.map((item) =>
                    item.product.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                return [...prevCart, { product, quantity: 1 }];
            }
        });
    };

    const removeFromCart = (id: number) => {
        setCart((prev) => prev.filter((item) => item.product.id !== id));
    };

    const total = useMemo(() => {
        return cart.reduce(
            (acc, item) => acc + item.product.price * item.quantity,
            0
        );
    }, [cart]);

    return (
        <CartContext.Provider
            value={{ cart, addToCart, removeFromCart, total }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) throw new Error('useCart must be used within a CartProvider');
    return context;
};
