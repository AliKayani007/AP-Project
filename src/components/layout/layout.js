
import Header from "../layout/Header";  
import Footer from "../layout/Footer";  

const Layout = ({ children }) => {
    return (
        <div>
            <Header /> 
            <main>{children}</main> 
            <Footer /> 
        </div>
    );
};

export default Layout;
