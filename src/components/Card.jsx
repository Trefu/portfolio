export const Card = ({ img }) => {
    return (
        <div class="py-20  md:mr-8">
            <div class=" bg-white  mx-auto shadow-lg rounded-lg hover:shadow-xl transition duration-200 max-w-xl">
                <img class="rounded-t-lg object-fill h-96 w-full" src={img} alt="" />
                <div class="py-4 px-8">
                    <h1 class="hover:cursor-pointer mt-2 text-gray-900 font-bold text-2xl tracking-tight">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
                    <p class="hover:cursor-pointer py-3 text-gray-600 leading-6">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora neque eum autem repellat iure perferendis, possimus blanditiis temporibus doloribus corrupti.</p>
                </div>
            </div>
        </div>
    )
}