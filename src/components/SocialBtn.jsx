export const SocialBtn = ({ url, styles, icon }) => {
    return (
        <span className={styles}>
            <a target='_blank' rel='noreferrer' href={url}>

                <i className={icon} >

                </ i>
            </a>
        </span>
    )


}