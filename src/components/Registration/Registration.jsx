import "./Registration.css";

const Registration = () => {

    const handleRegistration = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(name, email, password, confirm);
    }
    return (
        <div>
            <br /><br />
            <div className="form-container">
                <h2>Registration</h2>
                <form onSubmit={handleRegistration}>
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
                        <label htmlFor="confirm">Confirm Password</label>
                        <input type="password" name="confirm" required />
                    </div>
                    <button className="registration-btn" type="submit">Registration</button>
                    <p className="or">or</p>
                    <button className="google-btn" type="button">Continue with Google</button>
                </form>
            </div>
            <br /><br />
        </div>
    );
};

export default Registration;