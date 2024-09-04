import { Container, Row, Col } from 'reactstrap';
import SectionHeading from "../components/SectionHeading";
import backgroundImage from "../app/assets/img/bg.png";

const FutureGoalsSection = () => {
    return (
        <section>
            <Container>
                <SectionHeading text="My future career goals" image={backgroundImage} position="50% 60%"/>
                <Row>
                    <Col style={{textAlign: "center"}}>
                        This entrepreneurship program aligns with my future career goals because I have a dream to someday start a company related to bio and biomedical engineering - potentially in the fields of biocomputing and/or biosimulation, or in personalized medicine and/or drug discovery.
                        I would like to attend medical school and attain an M.D. Ph.D. in order to have the experience and qualifications to pursue this research.
                        I would also like to create interactive, educational software for young learners to become more comfortable with STEM subjects - something like a lab where they can try experiments, many years before they start high school labs so they have more time to get acquainted with the material.
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default FutureGoalsSection;