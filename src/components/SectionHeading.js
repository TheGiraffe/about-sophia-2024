
const SectionHeading = ({text, image, position}) => {
    const myStyle = {
        background: `url("${image}") ${position} no-repeat`,
        backgroundAttachment: "fixed",
        backgroundSize: "100%",
        backgroundOrigin: "padding-box",
        boxSizing: "border-box"
    }
    return (
        <div className="section-heading" style={myStyle}><h3>{text}</h3></div>
    );
}

export default SectionHeading;