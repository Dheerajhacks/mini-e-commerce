
const Skeleton = ({className = ''}) =>{
    return(
        <div className={`animate-pulse bg-gray-200 rounded-md ${className}`}>
        </div>
    )
}
export default Skeleton;

export const ProductSkeleton = () => (
  <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col h-full">
    <Skeleton className="w-full h-48 mb-4 rounded-lg" />
    <Skeleton className="w-3/4 h-5 mb-2" />
    <Skeleton className="w-1/2 h-4 mb-4" />
    <div className="mt-auto flex items-center justify-between">
      <Skeleton className="w-1/4 h-6" />
      <Skeleton className="w-24 h-9 rounded-md" />
    </div>
  </div>
);