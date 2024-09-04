import { Navbar, NavbarBrand } from 'reactstrap';

const Header = () => {
    return (
        <Navbar dark sticky='top' expand='md' className={['d-flex','justify-content-between','align-items-center', 'gap-3']}>
            <NavbarBrand>
                <h1>Tell Us About Yourself: 
                    <a href="https://www.linkedin.com/in/sophiadavis/" target="_blank">
                        <span>Sophia Davis</span>
                    </a>
                </h1>
            </NavbarBrand>
            <NavbarBrand>
                <h2>Pace Leaders Application Response</h2>
            </NavbarBrand>
        </Navbar>
    );
}

export default Header;