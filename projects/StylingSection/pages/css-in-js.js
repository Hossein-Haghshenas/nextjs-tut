import styled from 'styled-components';

const Title = styled.h1`
font-size: 50px;
color: ${({ theme }) => theme.colors.primary};
`

const CSSJS = () => {
    return (
        <div>
            <h2 style={{ color: 'brown' }} >test css in js</h2>
            <Title>test styled components in NextJs</Title>
        </div>
    )
}

export default CSSJS