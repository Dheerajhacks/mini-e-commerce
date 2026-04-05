const Button =({children, variant = 'primary', className = '', ...props}) =>{
    const baseStyles = 'inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded=md transistion-colors focus:outline-none focus:ring-2 focus:ring-2-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

    const variants = {
        primary: 'bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500',
        secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-500',
        danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
        outline: 'border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 focus:ring-indigo-500',
    }

    return(
        <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
            {children}
        </button>
    )
}
export default Button;