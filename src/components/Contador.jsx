import { Button } from "react-bootstrap";

const Contador = ({infoComision}) => {
    return (
        <section className="text-center">
            <h2 >Contador: {infoComision} </h2>
            <p className="lead">1</p>
            <Button className="me-2">+</Button>
            <Button variant="danger">-</Button>
        </section>
    );
};

export default Contador;