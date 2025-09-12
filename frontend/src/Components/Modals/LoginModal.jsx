import { Formik, Form, Field, ErrorMessage } from "formik";
import { toFormikValidationSchema } from "zod-formik-adapter";
import useAuth from "../../Hooks/useAuth";
import { loginSchema } from "../../Schemas/AuthSchemas";
import { motion } from "framer-motion";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { FcGoogle } from "react-icons/fc";

const LoginModal = ({ isOpen, onClose, onSwitchToRegister }) => {
    const { login, googleLogin } = useAuth();
    const [showPassword, setShowPassword] = useState(false);
    const axiosPublic = useAxiosPublic();

    const handleLogin = async (values, { setSubmitting, setErrors }) => {
        try {
            const email = values.email;
            const password = values.password;
            await login(email, password);

            console.log("Logged in:", values);
            onClose();
        } catch (error) {
            console.error(error.message);
            setErrors({ email: "Invalid credentials" });
        }
        setSubmitting(false);
    };
    const handleGoogleLogin = async () => {
        try {
            const result = await googleLogin();
            const user = result.user;

            // Save user to MongoDB
            const userInfo = {
                name: user.displayName,
                email: user.email,
                photoURL: user.photoURL,
                createdAt: new Date(),
            };

            await axiosPublic.post("/api/auth/google", userInfo);

            Swal.fire({
                icon: "success",
                title: "Logged in with Google",
                showConfirmButton: false,
                timer: 1500,
            });
            onClose();
        } catch (err) {
            console.error(err);
            Swal.fire({
                icon: "error",
                title: "Google login failed",
                showConfirmButton: false,
                timer: 1500,
            });
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
            <motion.div
                initial={{ opacity: 0, scale: 0.9, y: -30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -30 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 relative"
            >
                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-gray-500 hover:text-red-500"
                >
                    ✖
                </button>

                {/* Heading */}
                <h2 className="text-2xl font-heading font-bold text-center text-gray-800 mb-6">
                    Welcome Back
                </h2>

                <Formik
                    initialValues={{ email: "", password: "" }}
                    validationSchema={toFormikValidationSchema(loginSchema)}
                    onSubmit={handleLogin}
                >
                    {({ isSubmitting, values, setFieldValue }) => (
                        <Form className="space-y-5">
                            {/* Email */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Email
                                </label>
                                <Field
                                    type="email"
                                    name="email"
                                    className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary outline-none"
                                />
                                <ErrorMessage
                                    name="email"
                                    component="div"
                                    className="text-red-500 text-xs mt-1"
                                />
                            </div>

                            {/* Password */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Password
                                </label>
                                <div className="relative">
                                    <Field
                                        type={showPassword ? "text" : "password"}
                                        name="password"
                                        value={values.password}
                                        onChange={(e) => setFieldValue("password", e.target.value)}
                                        className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary outline-none pr-10"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-2.5 text-gray-500 hover:text-gray-700"
                                    >
                                        {showPassword ? (
                                            <AiOutlineEyeInvisible size={20} />
                                        ) : (
                                            <AiOutlineEye size={20} />
                                        )}
                                    </button>
                                </div>
                                <ErrorMessage
                                    name="password"
                                    component="div"
                                    className="text-red-500 text-xs mt-1"
                                />
                            </div>

                            {/* Submit */}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-primary text-white py-3 rounded-lg font-medium hover:bg-accent transition transform hover:scale-[1.02]"
                            >
                                {isSubmitting ? "Logging in..." : "Login"}
                            </button>
                        </Form>
                    )}
                </Formik>

                <div className="mt-4">
                    <button
                        onClick={handleGoogleLogin}
                        className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-lg py-2 hover:bg-gray-100 transition"
                    >
                        <FcGoogle size={20} /> Continue with Google
                    </button>
                </div>

                {/* Switch to Register */}
                <p className="text-sm text-center mt-6 text-gray-600">
                    Don’t have an account?{" "}
                    <button
                        onClick={onSwitchToRegister}
                        className="text-primary font-semibold hover:underline"
                    >
                        Register here
                    </button>
                </p>
            </motion.div>
        </div>
    );
};

export default LoginModal;
