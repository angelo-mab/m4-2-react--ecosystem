import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


function Header() {
    return (
        <Wrapper>
            <Title>Fruit Emporium</Title>
            <ul>
                <li>
                    {/* <Link Exact activeClassName="active" to="/">Home</Link> */}
                    <Link to="/">Homepage</Link>
                </li>
                <li>
                    {/* <Link activeClassName="active" to="/about">About</Link> */}
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </Wrapper>
    );
}

const Wrapper = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 30px;
    padding-bottom: 30px;
`;

const Title = styled.h1`
    font-size: 32px;
    font-weight: 800;
`;
export default Header;