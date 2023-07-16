export const GoogleButton = () => {
  return (
    <button className="border-[2px] border-black-opacity-10 rounded-full px-6 py-2 w-full mt-4 font-bold flex gap-3 items-center justify-center">
      <img
        src="images/icons/google.svg"
        alt="google icon"
        className="w-5 h-5"
      />
      <p>Sign in with Google</p>
    </button>
  )
}