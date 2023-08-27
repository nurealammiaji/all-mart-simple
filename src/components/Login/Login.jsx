import "./Login.css";

const Login = () => {
    return (
        <div>
            <br /><br />
            <div className="form-container">
                <h2>Login</h2>
                <form>
                    <div className="form-control">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" required />
                    </div>
                    <div className="form-control">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" required />
                    </div>
                    <div className="form-control">
                        <label htmlFor="password">Confirm Password</label>
                        <input type="password" name="confirm-password" required />
                    </div>
                    <button className="login-btn" type="submit">Login</button>
                    <p className="or">or</p>
                    <button className="google-btn" type="button">Continue with Google</button>
                </form>
            </div>
        </div>
    );
};

export default Login;