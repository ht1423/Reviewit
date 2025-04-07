import Workspace from "../../models/Workspace.js"

const getTestimonial = async (req, res) => {
  const { workspaceId } = req.params
  const { displayType } = req.query

  try {
    const workspace = await Workspace.findById(workspaceId).populate('testimonials')
    if (!workspace) {
      return res.status(404).json({ msg: "Workspace not found" })
    }

    let filteredTestimonials = workspace.testimonials

    if(filteredTestimonials.length === 0) {
        return null
    }

    if(displayType === 'All' || displayType === undefined) {
      return res.json({ filteredTestimonials })
    }

    if (displayType === 'Text') {
      filteredTestimonials = filteredTestimonials.filter(t => t.type === 'text')
    } 
    else if (displayType === 'Image') {
      filteredTestimonials = filteredTestimonials.filter(t => t.type === 'image')
    } 
    else if (displayType === 'Video') {
      filteredTestimonials = filteredTestimonials.filter(t => t.type === 'video')
    } 
    else if (displayType === 'Liked') {
      filteredTestimonials = filteredTestimonials.filter(t => t.liked === true)
    }
    else {
      return res.status(400).json({ msg: "Invalid display type" })
    }

    return res.json({ filteredTestimonials })
  } 
  catch (err) {
    console.error("Error fetching testimonials:", err)
    return res.status(500).json({ msg: "Internal server error" })
  }
}

export default getTestimonial
