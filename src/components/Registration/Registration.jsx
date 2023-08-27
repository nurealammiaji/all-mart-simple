import "./Registration.css";

const Registration = () => {
    return (
        <div>
            <br /><br />
            <div className="form-container">
                <h2>Registration</h2>
                <form>
                <div className="form-control">
                        <label htmlFor="email">Name</label>
                        <input type="text" name="name" required />
                    </div>
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
                    <button className="registration-btn" type="submit">Registration</button>
                    <p className="or">or</p>
                    <button className="google-btn" type="button">Continue with Google</button>
                </form>
            </div>
        </div>
    );
};

export default Registration;