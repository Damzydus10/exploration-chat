import { UserAuth } from "../context/AuthContext"
const Navbar = () => {
    const {currentuser, logout} = UserAuth();

    const handleLogout = async () => {
        try {
            await logout();
        }catch (error){
            console.log(error)
        }
    }
    return (
        <div className="navbar fixed z-10 bg-primary text-neutral-content">
            <div className="containerWrap flex justify-between ">
                <a className="btn btn-ghost normal-case text-xl">EXPLORATION</a>
            {currentuser? <button onClick={handleLogout}>Logout</button> : ""}
            </div>
        </div>
    )
}

export default Navbar