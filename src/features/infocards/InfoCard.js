import { Col, Card, CardBody, CardTitle, CardText, CardHeader } from 'reactstrap';
import { useState } from 'react';

const InfoCard = ({ why }) => {
    const {title, details} = why;
    const [moreDetails, setMoreDetails] = useState(false);
    return (
        <Col md className='m-1'>
            <Card>
                <CardHeader onClick = {() => setMoreDetails(!moreDetails)}>
                    <CardTitle><h5>{title}</h5></CardTitle>
                </CardHeader>
                {moreDetails && (
                    <CardBody>
                        <CardText>{details}</CardText>
                    </CardBody>)
                }
                
            </Card>
        </Col>
    )
};

export default InfoCard;