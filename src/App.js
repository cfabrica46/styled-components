import { props } from "bluebird";
import styled, { keyframes } from "styled-components";

const P = styled.p`
    font-size: 24px;
    color: red;
`;

const Content = styled.div`
    padding: 20px 25px;
`;

const Button = styled.button`
    transition: all 0.2s;
    background-color: ${(props) => (props.primary ? "red" : "white")};
    color: ${(props) => (props.primary ? "white" : "red")};
    padding: 10px 15px;
    border: solid 2px red;
    border-radius: 4px;
    margin-bottom: 10px;

    &:hover {
        box-shadow: 1px 2px 5px rgb(0, 0, 0, 0.7);
    }
    &.secundary {
        background-color: blue;
    }
`;

const BlockButton = styled(Button)`
    width: 100%;
    font-size: 24px;
`;

const Link = ({ className, ...props }) => {
    return <a className={className} {...props}></a>;
};

const StyledLink = styled(Link)`
    color: blue;
`;

/* const Input = () => {
    return <input type="text" className={className} />;
}; */

const Input = styled.input.attrs((props) => ({
    type: "text",
    color: props.color || "red",
}))`
    font-size: 20px;
    border: 1px solid red;
    color: ${(props) => props.color};
`;

const Password = styled(Input).attrs({
    type: "password",
})``;

const girar = keyframes`
	from{
		transform: rotate(0deg);
	}

	to{
		transform: rotate(360deg);
	}
`;

const Rotar = styled.div`
    animation: ${girar} 2s linear infinite;
`;

const App = () => {
    return (
        <Content>
            <Button primary>Enviar</Button>
            <Button className="secundary">Enviar</Button>
            <P>Hola soy un parrafo</P>
            <BlockButton as="a" href="#">
                uwu
            </BlockButton>
            <Link>Link</Link>
            <StyledLink>StyledLink</StyledLink>
            <Input color="blue" />
            <Password />
            <Rotar>Estoy girando</Rotar>
        </Content>
    );
};

export default App;
