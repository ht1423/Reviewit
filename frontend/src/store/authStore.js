import { create } from 'zustand'
import axios from 'axios'
import { toast } from 'react-toastify'

const useAuthStore = create((set) => ({
    isAuthenticated: null,
    isLoading: true,

    fetchUser: async () => {
        try {
            const res = await axios.get('http://localhost:3001/api/user/me',{
                withCredentials: true
            })

            set({ isAuthenticated: res.data.isAuthenticated, isLoading: false})
        }

        catch (e){
            console.error('Not logged in', e)

            set({isAuthenticated: false, isLoading: false})
        }
    },

    signup: async (name, email, password, navigate) => {
        try {
            await axios.post('http://localhost:3001/api/user/signup', { name, email, password }, {
                withCredentials: true
            });
            set({ isAuthenticated: true });
            toast.success('Boom! You’re officially in the club. 🎊');
            navigate('/dashboard');
        } catch (error) {
            handleAuthError(error);
        }
    },

    signin: async (email, password, navigate) => {
        try {
            await axios.post('http://localhost:3001/api/user/signin', { email, password }, {
                withCredentials: true
            });
            set({ isAuthenticated: true });
            toast.success('Welcome back! We missed you... kinda. 😜');
            navigate('/dashboard');
        } catch (error) {
            handleAuthError(error);
        }
    },

    logout: async () => {
        try {
            await axios.post('http://localhost:3001/api/user/logout', {}, { withCredentials: true })
            set({ isAuthenticated: false })
        }
        catch (error){
            console.error('Logout failed',error)
        }
    }
})
)

const handleAuthError = (error) => {
    if (error.response?.status === 400 && error.response?.data?.errors) {
        error.response.data.errors.forEach((err) => toast.error(err.message));
    } else {
        toast.error(error.response?.data?.message || error.message);
    }
};

export default useAuthStore