import "./register.css"

export default function Register() {
  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">Devsocial</h3>
                <span className="loginDesc">Connect with Friends around the World with Devsocial</span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input placeholder="Username" className="loginInput"/>
                    <input placeholder="Email" className="loginInput"/>
                    <input placeholder="Password" className="loginInput"/>
                    <input placeholder="Repeat Password" className="loginInput"/>
                    <button className="loginButton">Sign Up</button>
                   
                    <button className="loginRegisterButton">Log in to your Account!</button>
                </div>
            </div>
        </div>

    </div>
  )
}
