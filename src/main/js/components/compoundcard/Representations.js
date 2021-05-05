import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import Utils from "../../Utils";

const React = require("react");


export default class Representations extends React.Component {
    render() {
        const naturalProduct = this.props.naturalProduct;

        const bioschemas = {
            "@context":"https://schema.org",
            "@type":"MolecularEntity",
            "name":" + naturalProduct.traditional_name + ",
            "identifier":" + naturalProduct.lotus_id + ",
            "iupacName":" + naturalProduct.iupac_name + ",
            "inChIKey":" + naturalProduct.inchikey + ",
            "url":"https://lotus.naturalproducts.net/compound/lotus_id/ + naturalProduct.lotus_id + ",
            "inChI":" + naturalProduct.inchi +",
            "smiles":" + (naturalProduct.smiles || naturalProduct.smiles2D) +"
        };

        return (
            <Card className="compoundCardItem">
                <Card.Body>
                    <Card.Title className="text-primary">Representations</Card.Title>
                    <br />
                    <script type="application/ld+json" id="bioschemas">{bioschemas}</script>
                    <Table responsive bordered hover size="sm" >
                        <tbody>
                        <tr key={"represent_id"}>
                            <td>Temporary LOTUS id</td>
                            <td>{naturalProduct.lotus_id}</td>
                        </tr>
                        <tr key={"represent_name"}>
                            <td>Name</td>
                            <td>{Utils.capitalize(naturalProduct.traditional_name)}</td>
                        </tr>
                        <tr  key={"represent_csmiles"}>
                            <td>Canonical SMILES</td>
                            <td>{naturalProduct.smiles || naturalProduct.smiles }</td>
                        </tr>
                        <tr  key={"represent_2dsmiles"}>
                            <td>2D SMILES</td>
                            <td>{naturalProduct.smiles2D || naturalProduct.smiles }</td>
                        </tr>
                        <tr key={"represent_iupac"}>
                            <td>IUPAC name</td>
                            <td>{naturalProduct.iupac_name}</td>
                        </tr>
                        <tr  key={"represent_inchi"}>
                            <td>InChI</td>
                            <td>{naturalProduct.inchi}</td>
                        </tr>
                        <tr key={"represent_inchik"}>
                            <td>InChIKey</td>
                            <td>{naturalProduct.inchikey}</td>
                        </tr>

                        <tr key={"represent_dsmiles"}>
                            <td>Deep SMILES</td>
                            <td>{naturalProduct.deep_smiles || "could not be computed"}</td>
                        </tr>
                        <tr key={"represent_mf"}>
                            <td>Murcko Framework</td>
                            <td>{naturalProduct.murko_framework || "not applicable"}</td>
                        </tr>


                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        );
    }
}
