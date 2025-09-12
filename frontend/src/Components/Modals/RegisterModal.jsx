import { Formik, Form, Field, ErrorMessage } from "formik";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { registerSchema } from "../../Schemas/AuthSchemas";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { FaEye, FaEyeSlash, FaUser, FaEnvelope, FaLock, FaTimes, FaCheck, FaUpload, FaSpinner } from "react-icons/fa";

const VITE_IMAGE_HOSTING_KEY = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${VITE_IMAGE_HOSTING_KEY}`;

const RegisterModal = ({ isOpen, onClose, onSwitchToLogin }) => {
    const { createUser, updateUserProfile } = useAuth();
    const axiosPublic = useAxiosPublic();

    const [imagePreview, setImagePreview] = useState(null);
    const [strength, setStrength] = useState("");
    const [strengthScore, setStrengthScore] = useState(0);
    const [color, setColor] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const [focusedField, setFocusedField] = useState(null);

    const strengthCriteria = [
        { test: (pwd) => pwd.length >= 8, label: "At least 8 characters" },
        { test: (pwd) => /[A-Z]/.test(pwd), label: "One uppercase letter" },
        { test: (pwd) => /[a-z]/.test(pwd), label: "One lowercase letter" },
        { test: (pwd) => /[0-9]/.test(pwd), label: "One number" },
        { test: (pwd) => /[!@#$%^&*(),.?":{}|<>_\-\\[\]`~+=;'/]/.test(pwd), label: "One special character" }
    ];

    const evaluateStrength = (value) => {
        const passedCriteria = strengthCriteria.filter(criterion => criterion.test(value)).length;
        setStrengthScore(passedCriteria);

        switch (passedCriteria) {
            case 5:
                setStrength("Very Strong");
                setColor("from-green-400 to-green-600");
                break;
            case 4:
                setStrength("Strong");
                setColor("from-blue-400 to-blue-600");
                break;
            case 3:
                setStrength("Medium");
                setColor("from-yellow-400 to-yellow-600");
                break;
            case 2:
                setStrength("Fair");
                setColor("from-orange-400 to-orange-600");
                break;
            default:
                setStrength("Weak");
                setColor("from-red-400 to-red-600");
                break;
        }
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = (e) => {
        e.preventDefault();
        setIsDragging(false);
    };

    const handleDrop = (e, setFieldValue) => {
        e.preventDefault();
        setIsDragging(false);
        const files = e.dataTransfer.files;
        if (files[0] && files[0].type.startsWith('image/')) {
            setFieldValue("image", files[0]);
            setImagePreview(URL.createObjectURL(files[0]));
        }
    };

    const handleSubmit = async (values, { setSubmitting, setErrors, resetForm }) => {
        try {
            // Upload image to ImgBB
            const formData = new FormData();
            formData.append("image", values.image);

            const res = await axiosPublic.post(image_hosting_api, formData, {
                headers: { "content-type": "multipart/form-data" },
            });
            if (!res.data.success) throw new Error("Image upload failed");
            const imageUrl = res.data.data.display_url;

            // Firebase registration
            createUser(values.email, values.password)
                .then(() => {
                    updateUserProfile(values.name, imageUrl)
                        .then(() => {
                            const userInfo = {
                                name: values.name,
                                email: values.email,
                                password: values.password,
                                image: imageUrl,
                                createdAt: new Date(),
                            };
                            // Save user to MongoDB
                            axiosPublic.post("/api/auth/register", userInfo)
                                .then((res) => {
                                    console.log(res);
                                    Swal.fire({
                                        icon: "success",
                                        title: res.data.msg,
                                        showConfirmButton: false,
                                        timer: 1500,
                                    });
                                    resetForm();
                                    setImagePreview(null);
                                    onClose();
                                    setSubmitting(false);
                                })
                                .catch(err => {
                                    console.log(err);
                                })
                        })
                        .catch(err => {
                            Swal.fire({
                                icon: "error",
                                title: err.response?.data?.msg || err.message,
                                showConfirmButton: false,
                                timer: 1500,
                            });
                        })
                })
                .catch(err => {
                    Swal.fire({
                        icon: "error",
                        title: err.response?.data?.msg || err.message,
                        showConfirmButton: false,
                        timer: 1500,
                    });
                })
        } catch (error) {
            setErrors({ email: "User already exists or invalid credentials" });
            Swal.fire({
                icon: "error",
                title: error.msg,
                showConfirmButton: false,
                timer: 1500,
            });
        }
        setSubmitting(false);
    };

    // Close on Escape key
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') onClose();
        };
        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            return () => document.removeEventListener('keydown', handleEscape);
        }
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: 50 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: 50 }}
                    transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                    className="bg-white rounded-3xl shadow-2xl w-full max-w-lg relative max-h-[96vh] overflow-y-auto overflow-x-hidden"
                >
                    {/* Animated Background Pattern */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 opacity-50"></div>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-200/30 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
                    <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-purple-200/30 to-transparent rounded-full translate-y-20 -translate-x-20"></div>

                    <div className="relative z-10 p-8">
                        {/* Close button */}
                        <motion.button
                            onClick={onClose}
                            whileHover={{ scale: 1.1, rotate: 90 }}
                            whileTap={{ scale: 0.9 }}
                            className="absolute top-6 right-6 w-10 h-10 bg-gray-100 hover:bg-red-100 rounded-full flex items-center justify-center text-gray-500 hover:text-red-500 transition-all duration-200"
                        >
                            <FaTimes size={16} />
                        </motion.button>

                        {/* Heading */}
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-center mb-8"
                        >
                            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <FaUser className="text-white text-2xl" />
                            </div>
                            <h2 className="text-3xl font-heading font-bold text-gray-800">
                                Join Our Community
                            </h2>
                            <p className="text-gray-600 mt-2">Create your account to get started</p>
                        </motion.div>

                        <Formik
                            initialValues={{ name: "", email: "", password: "", image: null }}
                            validationSchema={toFormikValidationSchema(registerSchema)}
                            onSubmit={handleSubmit}
                        >
                            {({ isSubmitting, setFieldValue, values, errors, touched }) => (
                                <Form className="space-y-6">
                                    {/* Name Field */}
                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.3 }}
                                    >
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Full Name
                                        </label>
                                        <div className={`flex items-center border-2 rounded-xl transition-all duration-200 ${errors.name && touched.name
                                            ? 'border-red-300 bg-red-50'
                                            : focusedField === 'name'
                                                ? 'border-blue-500 bg-blue-50 shadow-lg shadow-blue-100'
                                                : 'border-gray-200 hover:border-gray-300'
                                            }`}>
                                            <FaUser className={`ml-3 text-lg transition-colors duration-200 ${focusedField === 'name' ? 'text-blue-500' : 'text-gray-400'}`} />
                                            <Field
                                                type="text"
                                                name="name"
                                                onFocus={() => setFocusedField('name')}
                                                onBlur={() => setFocusedField(null)}
                                                className="flex-1 bg-transparent outline-none px-3 py-3"
                                                placeholder="Enter your full name"
                                            />
                                        </div>
                                        <ErrorMessage
                                            name="name"
                                            component="div"
                                            className="text-red-500 text-sm mt-1 flex items-center gap-1"
                                        />
                                    </motion.div>

                                    {/* Email Field */}
                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.4 }}
                                    >
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Email Address
                                        </label>
                                        <div
                                            className={`flex items-center border-2 rounded-xl transition-all duration-200 ${errors.email && touched.email
                                                ? "border-red-300 bg-red-50"
                                                : focusedField === "email"
                                                    ? "border-blue-500 bg-blue-50 shadow-lg shadow-blue-100"
                                                    : "border-gray-200 hover:border-gray-300"
                                                }`}
                                        >
                                            <FaEnvelope
                                                className={`ml-3 text-lg transition-colors duration-200 ${focusedField === "email" ? "text-blue-500" : "text-gray-400"
                                                    }`}
                                            />
                                            <Field
                                                type="email"
                                                name="email"
                                                onFocus={() => setFocusedField("email")}
                                                onBlur={() => setFocusedField(null)}
                                                className="flex-1 bg-transparent outline-none px-3 py-3"
                                                placeholder="your@email.com"
                                            />
                                        </div>
                                        <ErrorMessage
                                            name="email"
                                            component="div"
                                            className="text-red-500 text-sm mt-1"
                                        />
                                    </motion.div>
                                    {/* Password Field */}
                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.5 }}
                                    >
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Password
                                        </label>
                                        <div
                                            className={`flex items-center border-2 rounded-xl transition-all duration-200 ${errors.password && touched.password
                                                    ? "border-red-300 bg-red-50"
                                                    : focusedField === "password"
                                                        ? "border-blue-500 bg-blue-50 shadow-lg shadow-blue-100"
                                                        : "border-gray-200 hover:border-gray-300"
                                                }`}
                                        >
                                            <FaLock
                                                className={`ml-3 text-lg transition-colors duration-200 ${focusedField === "password" ? "text-blue-500" : "text-gray-400"
                                                    }`}
                                            />
                                            <Field
                                                type={showPassword ? "text" : "password"}
                                                name="password"
                                                onFocus={() => setFocusedField("password")}
                                                onBlur={() => setFocusedField(null)}
                                                onChange={(e) => {
                                                    setFieldValue("password", e.target.value);
                                                    evaluateStrength(e.target.value);
                                                }}
                                                className="flex-1 bg-transparent outline-none px-3 py-3"
                                                placeholder="Create a strong password"
                                            />
                                            <motion.button
                                                type="button"
                                                onClick={() => setShowPassword(!showPassword)}
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }}
                                                className="mr-3 text-gray-500 hover:text-blue-500 transition-colors duration-200"
                                            >
                                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                                            </motion.button>
                                        </div>

                                        {/* Password Strength Indicator */}
                                        {values.password && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: "auto" }}
                                                className="mt-3"
                                            >
                                                <div className="flex items-center gap-2 mb-2">
                                                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                                                        <motion.div
                                                            className={`h-full rounded-full bg-gradient-to-r ${color}`}
                                                            initial={{ width: 0 }}
                                                            animate={{ width: `${(strengthScore / 5) * 100}%` }}
                                                            transition={{ duration: 0.3 }}
                                                        />
                                                    </div>
                                                    <span
                                                        className={`text-xs font-medium ${strengthScore >= 4
                                                                ? "text-green-600"
                                                                : strengthScore >= 3
                                                                    ? "text-yellow-600"
                                                                    : "text-red-600"
                                                            }`}
                                                    >
                                                        {strength}
                                                    </span>
                                                </div>
                                                <div className="grid grid-cols-1 gap-1 text-xs">
                                                    {strengthCriteria.map((criterion, index) => (
                                                        <div
                                                            key={index}
                                                            className={`flex items-center gap-2 transition-colors duration-200 ${criterion.test(values.password) ? "text-green-600" : "text-gray-400"
                                                                }`}
                                                        >
                                                            <FaCheck size={10} />
                                                            {criterion.label}
                                                        </div>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        )}
                                        <ErrorMessage
                                            name="password"
                                            component="div"
                                            className="text-red-500 text-sm mt-1"
                                        />
                                    </motion.div>
                                    {/* Image Upload */}
                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.6 }}
                                    >
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Profile Picture
                                        </label>
                                        <div
                                            onDragOver={handleDragOver}
                                            onDragLeave={handleDragLeave}
                                            onDrop={(e) => handleDrop(e, setFieldValue)}
                                            className={`relative border-2 border-dashed rounded-xl p-6 text-center transition-all duration-200 ${isDragging
                                                ? 'border-blue-500 bg-blue-50'
                                                : 'border-gray-300 hover:border-gray-400'
                                                }`}
                                        >
                                            {imagePreview ? (
                                                <div className="relative">
                                                    <img
                                                        src={imagePreview}
                                                        alt="Preview"
                                                        className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-white shadow-lg"
                                                    />
                                                    <motion.button
                                                        type="button"
                                                        onClick={() => {
                                                            setImagePreview(null);
                                                            setFieldValue("image", null);
                                                        }}
                                                        whileHover={{ scale: 1.1 }}
                                                        whileTap={{ scale: 0.9 }}
                                                        className="absolute -top-2 -right-2 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-red-600"
                                                    >
                                                        <FaTimes size={12} />
                                                    </motion.button>
                                                </div>
                                            ) : (
                                                <div>
                                                    <FaUpload className="mx-auto text-gray-400 text-2xl mb-2" />
                                                    <p className="text-gray-600">
                                                        Drag & drop your photo here or{" "}
                                                        <span className="text-blue-500 font-medium">browse</span>
                                                    </p>
                                                </div>
                                            )}
                                            <input
                                                type="file"
                                                accept="image/*"
                                                onChange={(event) => {
                                                    if (event.currentTarget.files[0]) {
                                                        setFieldValue("image", event.currentTarget.files[0]);
                                                        setImagePreview(URL.createObjectURL(event.currentTarget.files[0]));
                                                    }
                                                }}
                                                className="absolute inset-0 opacity-0 cursor-pointer"
                                            />
                                        </div>
                                    </motion.div>

                                    {/* Submit Button */}
                                    <motion.button
                                        type="submit"
                                        disabled={isSubmitting}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.7 }}
                                        className={`w-full py-4 rounded-xl font-semibold text-white transition-all duration-200 shadow-lg ${isSubmitting
                                            ? 'bg-gray-400 cursor-not-allowed'
                                            : 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 shadow-blue-200 hover:shadow-blue-300'
                                            }`}
                                    >
                                        {isSubmitting ? (
                                            <div className="flex items-center justify-center gap-2">
                                                <FaSpinner className="animate-spin" />
                                                Creating Account...
                                            </div>
                                        ) : (
                                            'Create Account'
                                        )}
                                    </motion.button>
                                </Form>
                            )}
                        </Formik>

                        {/* Switch to Login */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                            className="text-center mt-6"
                        >
                            <p className="text-gray-600">
                                Already have an account?{" "}
                                <motion.button
                                    onClick={onSwitchToLogin}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200"
                                >
                                    Sign in here
                                </motion.button>
                            </p>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default RegisterModal;