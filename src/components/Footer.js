import { Container, Row, Col } from "reactstrap";
import { ABOUTAPP, ABOUTLINKS } from "../app/shared/ABOUTAPP";

const Footer = () => {
    return (
        <footer>
            <Container>
                <Row>
                    <p className='about-app'>{ABOUTAPP}</p>
                </Row>
                <Row className={['d-flex', 'justify-content-between','align-items-center']}>
                        {ABOUTLINKS.map((abtlink) => {
                            return(
                                <Col>
                                    <a href={abtlink.link} target="_blank">{abtlink.text}</a>
                                </Col>
                            )
                        })}
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;