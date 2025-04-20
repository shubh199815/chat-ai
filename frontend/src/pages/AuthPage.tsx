import { useState } from 'react';
import { useAuth } from '../hooks/useAuth';

function AuthPage() {
    const [isSignUp, setIsSignUp] = useState(true);
    const { login, register } = useAuth();
    const [username, setUsername] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<string | null>(null);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);

    const toggleAuthMode = () => {
        setIsSignUp(!isSignUp);
        setError(null); // Clear error when switching modes
        setSuccessMessage(null); // Clear success message when switching modes
    };

    const userLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await login(email, password);
        } catch (err) {
            setError("Invalid credentials or server error");
        }
    };

    const createAccount = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await register(email, password);
            setSuccessMessage('Account created successfully! Please log in.');
            setIsSignUp(false); // Redirect to login form
        } catch (err) {
            setError("Registration failed. Please try again.");
        }
    };

    const handleGoogleAuth = () => {
        // Handle Google sign-in
    };

    return (
        <div className="flex items-center justify-center w-screen h-screen bg-gray-100 font-sans">
            <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
                    {isSignUp ? 'Create an Account' : 'Welcome Back'}
                </h1>
                <form
                    onSubmit={isSignUp ? createAccount : userLogin}
                    className="flex flex-col gap-4"
                    aria-label={isSignUp ? 'Sign Up Form' : 'Login Form'}
                >
                    {error && <p className="text-red-500">{error}</p>}
                    {successMessage && <p className="text-green-500">{successMessage}</p>}
                    {isSignUp && (
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Name
                            </label>
                            <input
                                id="name"
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="Your Name"
                                className="mt-1 p-2 border border-gray-300 rounded w-full bg-white text-gray-800 focus:ring-indigo-500 focus:border-indigo-500"
                                required
                            />
                        </div>
                    )}
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="you@example.com"
                            className="mt-1 p-2 border border-gray-300 rounded w-full bg-white text-gray-800 focus:ring-indigo-500 focus:border-indigo-500"
                            required
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Your Password"
                            className="mt-1 p-2 border border-gray-300 rounded w-full bg-white text-gray-800 focus:ring-indigo-500 focus:border-indigo-500"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="mt-4 p-3 bg-white text-indigo-600 font-semibold rounded-lg shadow-md border border-indigo-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition duration-150"
                    >
                        {isSignUp ? 'Sign Up' : 'Login'}
                    </button>
                </form>
                <div className="flex items-center my-4">
                    <hr className="flex-grow border-gray-300" />
                    <span className="mx-2 text-sm text-gray-500">OR</span>
                    <hr className="flex-grow border-gray-300" />
                </div>
                <button
                    onClick={handleGoogleAuth}
                    className="w-full p-3 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition duration-150"
                >
                    Sign in with Google
                </button>
                <p className="mt-4 text-sm text-center text-gray-600">
                    {isSignUp
                        ? 'Already have an account?'
                        : 'Don’t have an account?'}{' '}
                    <button
                        onClick={toggleAuthMode}
                        className="mt-4 p-3 bg-transparent text-indigo-600 underline focus:outline-none border-none"
                    >
                        {isSignUp ? 'Login' : 'Sign Up'}
                    </button>
                </p>
            </div>
        </div>
    );
}

export default AuthPage;
