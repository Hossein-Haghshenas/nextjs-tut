import styles from "../styles/About.module.css"
import sassStyles from "../styles/About.module.scss"

const About = () => {
    const { highlight } = styles
    const { highlightscss } = sassStyles
    return (
        <div>
            <h2>About page</h2>
            <p>Use bootstrap in nextJs</p>
            <button className="btn btn-primary" >
                Primary
            </button>
            <p className={highlight} >test component level styles with css modules</p>
            <p className={highlightscss} >test component level styles with scss modules</p>
        </div>
    )
}

export default About