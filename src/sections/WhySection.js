import { WHYS } from "../app/shared/WHYS";
import { Container, Row, Col } from 'reactstrap';
import InfoCard from "../features/infocards/InfoCard";
import SectionHeading from "../components/SectionHeading";
import backgroundImage from "../app/assets/img/bg.png";

const WhySection = () => {
    return (
        <section>
            <Container>
                <SectionHeading text="What can I bring to this program?" image={backgroundImage} position="50% 35%"/>
                <Row>
                    <Col style={{textAlign: "center"}}>
                        <em>(If you have a few minutes, you can click on the titles below to read more.)</em>
                    </Col>
                </Row>
                <Row className={['d-flex']}>
                    {WHYS.map((why)=>{
                        console.log(why.id);
                        if (why.id === 4){
                            return (
                                <>
                                <div className='w-100'></div>
                                <InfoCard why = {why} />
                                </>
                            );
                        }
                        return (
                            <InfoCard why = {why} />
                        )
                    })}
                </Row>
            </Container>
        </section>
    );
}

export default WhySection;