import React from 'react'
import {Row,Col,Typography,Image,Divider} from 'antd';
import styles from './feedNewsCard.module.css';

const {Title,Text,Link} = Typography
function FeedNewsCard(props) {
    
    const cardStyle = {
        backgroundColor: "#2E3440",
        color: "#eceff4",
        boxShadow:"1px 1px 4px rgba(0,0,0,0.9)",
        borderRadius: "0.25rem",
    }

    return (
        <Col style={cardStyle} span={16}>
            <Row justify="center" style={{margin:"10px 0px"}} gutter={[16,8]}>
                <Col style={{marginTop:"5px"}}>
                    <h3 style={{margin:"auto"}}>{props.data.source.name}</h3>
                </Col>
                <Col style={{padding:"0"}}>
                    <Image width="100%" src={props.data.image}/>
                </Col>
                <a href={props.data.source.url}>
                    <Col>
                        <h6>{props.data.source.url} | {props.data.publishedAt.split("T")[0]}</h6>
                        <h5 style={{margin:"0"}} level={5}>{props.data.title}</h5>
                    </Col>
                </a>
                <Divider style={{margin:"auto",backgroundColor:"rgb(202,203,204)",minWidth:"95%",width:"95%"}}/>
                <Col span={22}>
                    <Row justify="space-between">
                        <Col>0 Likes 0 Dislikes</Col>
                        <Col>0 Shares</Col>
                    </Row>
                </Col>
                <Divider style={{margin:"auto",backgroundColor:"rgb(202,203,204)",minWidth:"95%",width:"95%"}}/>
                <Col span={22}>
                    <Row justify="space-between">
                        <Col>Like Button | Dislike Button</Col>
                        <Col>Coment Button | Share Button</Col>
                    </Row>
                </Col>
            </Row>
        </Col>
    )
}

export default FeedNewsCard;
