import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import Seo from '../components/Seo';
import BoxRetro from '../components/BoxRetro';


const AboutPage = () => {
  return (
    <Layout>
        <Seo title="Sobre mí" />
        <BoxRetro>
        <h3>Hola{" "}<span role="img" aria-label="Hi Girl Emoji">🙋‍♀️,</span></h3>
        <br />
        <p>Mi Nombre es Yulianny Betancourt, y Soy Ingeniero de Sistemas.</p>
            <p>Me estoy especializando en el Desarrollo Frontend, Con las tecnologías Gatsbyjs, HTML, CSS y JavaScript. </p>
            
            <p>Este proceso lo estoy haciendo aplicando la Metodología KanBan.</p>
            <br />
            <h4>Uno de mis hobbies favoritos son:</h4>
            <p>- Los videojuegos.</p>
            <p>- Aportar a la comunidad de Twitter.</p>
            <p>- Aportar a comunidades de Desarrollo de Software en Discord.</p>
            <p>- Leer sobre los avances de la Tecnología.</p>
        </BoxRetro>
        <br /><br />
        <Link to="/">Regresar al Inicio</Link>
        
    </Layout>
  );
};

export default AboutPage;

