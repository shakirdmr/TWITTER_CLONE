export const login = (req, res)=>{

    res.send("LOGIN")
    console.log("LOGIN ROUTE");
}


export const signup = (req,res)=>{

    res.send("SIGNUP");
}

export const logout = (req, res)=>{
    res.send("LOGOUT");
}