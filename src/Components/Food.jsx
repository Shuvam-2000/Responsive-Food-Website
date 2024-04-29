import { mealData } from "../Data/data"

const Food = () => {
  return (
    <>
        <div className="w-[90%] mx-auto mt-[100px]">
            <div>
                <h2 className="text-center text-black text-2xl font-bold py-5 pb-12">Explore Our Meals</h2>
            </div>
            <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 py-6 gap-4">
                {
                    mealData.map((meal)=>(
                        <div key={meal.id} className="flex jusitfy-center flex-col items-center">
                            <div>
                            <img src={meal.image} alt="" className="w-[150px] rounded-full h-[150px] object-cover"/>
                            </div>
                            <div className="flex justify-center py-2 px-4 flex-col items-center font-semibold uppercase">
                            <p>{meal.name}</p>
                            <p>{meal.price}</p>
                            <button className="bg-yellow-500 w-[100px] hover:bg-yellow-600 text-white font-semibold rounded-md my-6 py-[10px] text-[15px]">Add To Cart</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </>
  )
}

export default Food
