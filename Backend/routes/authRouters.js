import { loginUser, registerUser } from "../controllers/Auth/authControllers.js"

const authRouters = (app) => {
    app.route('/auth/login')
        .post(loginUser)

    app.route('/auth/register')
        .post(registerUser)
}

export default authRouters