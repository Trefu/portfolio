export const Card = ({ img, url, title }) => {
    return (
        <div className="max-w-screen-sm mb-4 z-10">
            <div className="mx-auto space-y-4 hover:text-yellow-400">
                <a href={url} target='_blank' rel='noreferrer'>
                    <img className="hover:-translate-y-4 transform duration-200 rounded-lg w-full h-96 " src={img} alt="" />

                    <h1 className="transform duration-500 ease-linear hover:cursor-pointer font-bold text-3xl tracking-wider mt-8">{title}</h1>
                </a>


            </div>
        </div>
    )
}