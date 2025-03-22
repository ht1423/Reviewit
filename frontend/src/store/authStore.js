import { create } from 'zustand'
import axios from 'axios'
import { toast } from 'react-toastify'

const useAuthStore = create((set) => ({
    isAuthenticated: null,
    isLoading: true,
    route: 'http://localhost:3001/api',
    display : 'All',
    filterMode: 'default',
    setDisplay: (type) => set({ display : type, filterMode: 'default' }),
    setWallOfLoveMode: () => set({ filterMode: 'wall' }),

    fetchUser: async () => {
        const { route } = useAuthStore.getState()
        try {
            const res = await axios.get(`${route}/user/me`,{
                withCredentials: true
            })

            set({ isAuthenticated: res.data.isAuthenticated, isLoading: false, user: res.data.user})
        }

        catch (e){
            console.error('Not logged in', e)

            set({isAuthenticated: false, isLoading: false})
        }
    },

    signup: async (name, email, password, navigate) => {
        const { route } = useAuthStore.getState()

        try {
            await axios.post(`${route}/user/signup`, { name, email, password }, {
                withCredentials: true
            });
            await useAuthStore.getState().fetchUser();
            set({ isAuthenticated: true, isLoading: false});
            toast.success('Boom! You’re officially in the club. 🎊');
            navigate('/dashboard');
        } catch (error) {
            handleAuthError(error,navigate);
        }
    },

    signin: async (email, password, navigate) => {
        const { route } = useAuthStore.getState()

        try {
            await axios.post(`${route}/user/signin`, { email, password }, {
                withCredentials: true
            });
            await useAuthStore.getState().fetchUser();
            set({ isAuthenticated: true, isLoading: false});
            toast.success('Welcome back! We missed you... kinda. 😜');
            navigate('/dashboard');
        } catch (error) {
            handleAuthError(error,navigate);
        }
    },

    logout: async () => {
        const { route } = useAuthStore.getState()

        try {
            await axios.post(`${route}/user/logout`, {}, { withCredentials: true })
            set({ isAuthenticated: false })
        }
        catch (error){
            handleAuthError(error,navigate)
        }
    },

    create: async (name, description, navigate) => {
        const { route } = useAuthStore.getState()

        try {
            const response = await axios.post(`${route}/workspace/create`, { name, description },{
                withCredentials: true
            })

            toast.success('Workspace created successfully 🥳')
            navigate(`/get/${response.data.workspaceId}`)
            return response
        }
        catch (error){
            handleAuthError(error,navigate)
        }
    },

    get: async (workspaceId, navigate) => {
        const { route } = useAuthStore.getState()

        try {
            if(!workspaceId){
                throw new Error("Workspace ID is missing ☹️")
            }
            const response = await axios.get(`${route}/workspace/get/${workspaceId}`,{
                withCredentials: true
            })

            set({ workspace: response.data})
            navigate(`/get/${workspaceId}`)
            return
        }
        catch (error){
            handleAuthError(error,navigate)
        }
    },

    addTestimonial: async (requestBody,navigate, workspaceId, formType) => {        
        const { route } = useAuthStore.getState()

        try {
            const response = await axios.post(`${route}/testimonial/${workspaceId}/create?type=${formType}`, requestBody, {
                withCredentials: true,
            })

            toast.success('Testimonial added successfully 🎉')
            navigate(`/get/${workspaceId}`)

        }
        catch (e) {
            handleAuthError(e)
        }
    },

    updateTestimonial: (testimonialId, requestBody) => set((state) => {
        const updatedTestimonials = state.workspace.testimonials.map((t) => t._id === testimonialId ? { ...t, ...requestBody } : t)

        return {
            workspace: {
                ...state.workspace,
                testimonials: updatedTestimonials
            }
        }
    })
})
)

export const handleAuthError = (error, navigate) => {
    if (error.response?.status === 401){
        if(error.response?.data?.msg === 'Unauthorized'){
            toast.error('Oops! Access denied. Please log in to continue. 🚀');
        }
        else if(error.response?.data?.msg === 'Invalid password'){
            toast.error('Oops! Invalid password. Please try again. 😅');
        }
        else {
            toast.error('Authentication failed! Please check your credentials. 🤔');
        }
    }
    else if (error.response?.status === 409){
        setTimeout(() => {
            navigate('/signin')
        },1000) 
        toast.error('Looks like someone’s been here before 👀. Please log in to continue!');
    }
    else if (error.response?.status === 404){ 
        toast.error('User not found! 🚀 Looks like you’re new here—sign up and get started!');
    }
    else if (error.response?.status === 400  && error.response?.data?.errors) {
        error.response.data.errors.forEach((err) => toast.error(err.message));
    }
    else if (error.response?.status === 500) {
        toast.error('Oops! Something went wrong. Please try again. 😅');
    }
     else {
        toast.error(error.response?.data?.msg || error.msg);
    }
};

export default useAuthStore