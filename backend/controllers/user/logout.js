
const logout = async (req,res) => {

    try {
        res.clearCookie('auth-token', {
            httpOnly: true,
            sameSite: 'none',
            secure: true,
          })

        return res.json({ msg: "Logged out" })
    }
    catch (err){
        console.error("Logout error: ", err)

        return res.status(500).json({ msg: "Internal server error" })
    }
}

export default logout