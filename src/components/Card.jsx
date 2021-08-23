export const Card = ({ img, url, title }) => {
    return (
        <div className="max-w-screen-sm mb-4">
            <div className="mx-auto rounded-lg ">
                <a href={url} target='_blank' rel='noreferrer'>
                    <img className="hover:-translate-y-4 transform duration-200 rounded-t-lg w-full h-96" src={img} alt="" />
                </a>
                <div className="py-4 px-8">
                    <h1 className="hover:cursor-pointer mt-2 text-white font-bold text-2xl tracking-wider">{title}</h1>
                </div>
            </div>
        </div>
    )
}