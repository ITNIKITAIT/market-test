import axios from 'axios';

const API_URL = 'https://fakestoreapi.com/products';

export const fetchProducts = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Error when loading products:', error);
        throw error;
    }
};

export const fetchProductsByCategory = async (category: string) => {
    try {
        const response = await axios.get(`${API_URL}/category/${category}`);
        return response.data;
    } catch (error) {
        console.error('Error when loading a category:', error);
        throw error;
    }
};

export const fetchCategories = async () => {
    try {
        const response = await axios.get(`${API_URL}/categories`);
        return response.data;
    } catch (error) {
        console.error('Error when loading a categories:', error);
        throw error;
    }
};
