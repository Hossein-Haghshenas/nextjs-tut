 import styles from "../styles/Contact.module.css"
import sassStyles from "../styles/Contact.module.scss"

const Contact = () => {
    const { highlight } = styles
    const { highlightscss } = sassStyles
    return (
        <div>
            <h2>Contact page</h2>
            <p className={highlight} >test component level styles with css modules</p>
            <p className={highlightscss} >test component level styles with scss modules</p>
        </div>
    )
}

export default Contact