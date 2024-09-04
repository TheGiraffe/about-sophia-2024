import { useState } from 'react';
import { Col } from 'reactstrap';

const ExperiencesInfo = ({ part }) => {
    const { details, title, image, link, imageLinkDesc } = part;
    const [moreInfo, setMoreInfo] = useState(false);
    return (
        <Col>
            <h4 className="experience-info" onClick = {() => {setMoreInfo(!moreInfo)}}>{title}</h4>
            {moreInfo && <>
                {details.map((detail) => { return (<p>{detail}</p>)})}
                {image && link && (
                    <>
                        <center>
                            <a href={link} target="_blank"><img src={image} alt={imageLinkDesc} />
                                <div>{imageLinkDesc}</div>
                            </a>
                        </center>
                    </>
                    )}
            </>}
        </Col>
    );
};

export default ExperiencesInfo;