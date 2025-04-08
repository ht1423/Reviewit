import { create } from 'zustand'
import axios from 'axios'
import { toast } from 'react-toastify'
import workspaceStore from './workspaceStore'

const testimonialStore = create((set, get) => ({
  route: 'http://localhost:3001/api/testimonial',
  
  createTestimonial: async ({ data, workspaceId, navigate }) => {
    const route = get().route

    try {
      const res = await axios.post(`${route}/${workspaceId}/create`, data, { withCredentials: true })

      console.log("testionial", res.data.testimonial)
      toast.success("Testimonial created successfully")
      navigate(`/workspace/${workspaceId}`)
    }

    catch (err) {
      handleTestimonialError(err)
    }
  },

  likeUpdate: async ({testimonialId}) => {
    const route = get().route

    try {
      const res = await axios.put(`${route}/like/${testimonialId}`,{}, { withCredentials: true })
    }

    catch (err) {
      handleTestimonialError(err)
    }
  }
  
}))

const handleTestimonialError = (err) => {
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

export default testimonialStore