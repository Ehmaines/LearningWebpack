import soma from './calc'
import Heading from './components/heading'
console.log("Testando Webpack 2");

soma(4, 4);
soma(14, 2);

//Loaders
const heading = new Heading();
heading.create("Titulo dinâmico")