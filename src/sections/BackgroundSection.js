import { BACKGROUND } from "../app/shared/BACKGROUND";
import { Container, Row, Col } from 'reactstrap';
import SectionHeading from "../components/SectionHeading";
import backgroundImage from "../app/assets/img/bg.png";
import ExperiencesInfo from "../features/infocards/ExperiencesInfo";

const BackgroundSection = () => {
    const backgroundCols = BACKGROUND.slice(1);
    const intro = BACKGROUND[0];
    return (
        <section>
            <Container>
                <SectionHeading text="About Me" image={backgroundImage} position="50% 10%"/>
                <Row className='mb-3'>
                    <Col>
                        <h4>{intro.title}</h4>
                        {intro.details.map((detail) => { return (<p>{detail}</p>)})}
                        <Row>
                            <Col className='photo-gallery'>
                                {intro.images.map((image) => { 
                                    return (
                                        <figure>
                                            <img src={image.img} alt={image.title} width="100%"/>
                                            <a href={image.img} target="_blank"><figcaption>{image.title}</figcaption></a>
                                        </figure>
                                    )})}
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col style={{textAlign: "center"}}>
                    <em>(If you have a few minutes, you can click on the titles below to read more.)</em>
                    </Col>
                </Row>
                <Row>
                    {backgroundCols.map((part)=>{
                        return(<ExperiencesInfo part={part}/>)
                    })}
                </Row>
            </Container>
        </section>
    );
};

export default BackgroundSection;