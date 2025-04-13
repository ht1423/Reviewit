import { create } from 'zustand'
import axios from 'axios'
import { toast } from 'react-toastify' 

const authStore = create((set,get) => ({
    route: 'https://reviewit-backend-6yxt.onrender.com/api/user',
    authenticated: false,
    user: null,

    signup: async ({ name, email, password, navigate }) => {
        const route = get().route

        try {
            await axios.post(`${route}/signup`, { name, email, password}, { withCredentials: true })

            toast.success("Account created successfully")
            navigate('/dashboard')
        }
        catch (err){
            handleAuthError(err)
        }
    },

    signin: async ({ email, password, navigate }) => {
        const route = get().route

        try {
            await axios.post(`${route}/signin`, { email, password}, { withCredentials: true })

            toast.success("Signed in successfully")
            navigate('/dashboard')
        }
        catch (err){
            handleAuthError(err)
        }
    },

    me: async () => {
        const route = get().route

        try {
            const response = await axios.get(`${route}/me`, { withCredentials: true })
            set({ authenticated: response.data.authenticated, user: response.data.user })
        }
        catch (err){
            handleAuthError(err)
            set({ authenticated: false, user: null })
        }
    },

    logout: async (navigate) => {
        const route = get().route

        try {
            await axios.post(`${route}/logout`, {}, { withCredentials: true })

            set({ authenticated: false })
            toast.success("Log out successfully")
            navigate('/')
        }

        catch (err){
            handleAuthError(err)
        }
    }
}))

const handleAuthError = (err) => {
    const errorData = err?.response?.data

    if(Array.isArray(errorData?.errors)){
        errorData.errors.forEach((error) => {
            toast.error(error.msg)
        })
    }
    else {
        toast.error(errorData?.msg)
    }
}

export default authStore 