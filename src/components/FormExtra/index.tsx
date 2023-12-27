export default function FormExtra() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <input
          type="checkbox"
          id="remember-me"
          name="remember-me"
          className="h-4 w-4 text-gray-500 focus:ring-purple-500 border-gray-300 rounded cursor-pointer"
        />
        <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900 cursor-pointer">
          Remember me
        </label>
      </div>

      <div className="text-sm">
        <a href="#" className="font-medium text-gray-900 hover:text-gray-500">
          Forgot your password?
        </a>
      </div>
    </div>
  );
}
