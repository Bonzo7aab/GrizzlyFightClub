
const Loader = ({ size }: { size: number }) => {
  return (
    <div className="flex items-center justify-center ">
        <div className={`w-${size} h-${size} border-b-2 border-gbrown-100 rounded-full animate-spin`}></div>
    </div>
  )
}

export default Loader