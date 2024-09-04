import { Container, Row, Col } from "reactstrap";
import SectionHeading from "../components/SectionHeading";
import backgroundImage from "../app/assets/img/bg.png";

const GainSection = () => {
    return (
        <section>
            <Container>
                <SectionHeading text="What I would like to gain from this experience" image={backgroundImage} position="50% 85%" />
                <Row>
                    <Col>
                        From this experience, I would like to gain more leadership and business skills, through the leadership development and networking aspects of the PACE Leaders program.
                         I would also like to gain more knowledge and experience about the university startup ecosystem here in Honolulu, as this is my first time living here.
                         Furthermore, I would like to meet and get to know like-minded peers who also enjoy building and creating things.
                         Through the Makerspace program, I would like to help students turn their ideas into tangible prototypes, and if I am being perfectly honest, few things make me happier than getting to work with 3D printers or other machines all day. :D 
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default GainSection;