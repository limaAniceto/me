import React from 'react';
import styled from 'styled-components';

const Technologies = () => (
    <Container>
        <p>Technologies</p>
    </Container>
);

const Container = styled.div`
    flex: 1;
    background: #bdc3c7;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to top, #2c3e50, #bdc3c7);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to top, #2c3e50, #bdc3c7); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;

export default Technologies;