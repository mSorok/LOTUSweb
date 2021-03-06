import Container from "react-bootstrap/Container";
import NaturalProductCardItem from "../NaturalProductCardItem";
import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";
import {LinkContainer} from "react-router-bootstrap";

const React = require("react");


export default class CardCompoundBrowser extends React.Component {
    render() {
        const cardRowSize = 4;
        let naturalProducts = this.props.naturalProducts;
        let emptyCardKey = 0;
        let cardRows = [];

        while (naturalProducts.length > 0) {
            let cardRow = [];

            naturalProducts.splice(0, cardRowSize).map(naturalProduct => {
                cardRow.push(
                    <NaturalProductCardItem key={naturalProduct.lotus_id} naturalProduct={naturalProduct}/>
                );
            });

            while (cardRow.length < cardRowSize) {
                cardRow.push(
                    <Card key={emptyCardKey++} style={{visibility: "hidden"}}>
                        <Card.Body>
                            <Card.Text>empty</Card.Text>
                        </Card.Body>
                    </Card>
                );
            }

            cardRows.push(<CardDeck key={cardRows.length}>{cardRow}</CardDeck>);
        }

        return <Container>{cardRows}</Container>;
    }
}