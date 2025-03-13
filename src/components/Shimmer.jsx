

const Shimmer = () => {

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
            {Array(20).fill(null).map((_, index) => (
                <div
                    key={index}
                    className="bg-gray-200 animate-pulse rounded-lg h-100"
                ></div>
            ))}
        </div>
    )

}

export default Shimmer;