import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import {Column} from "rbx";

const DefaultLayout = ({ children }) => (

        <Column.Group centered>
        <Column size="four-fifths">
        <Navigation/>
        <main>{children}</main>
        <Footer />
        </Column>
        </Column.Group>

);

export default DefaultLayout;