export default function Button({ children, ...props }) {
  return <button className="bg-input hover:bg-opacity-80 rounded-full p-4" {...props}>{children}</button>
}