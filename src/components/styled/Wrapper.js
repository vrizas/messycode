import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    flex-direction: ${(props) => props.flexDirection};
    align-items: ${(props) => props.alignItems};
    justify-content: ${(props) => props.justifyContent};
    gap: ${(props) => props.gap};
`

Wrapper.defaultProps = {
  flexDirection: 'row',
  alignItems: 'start',
  justifyContent: 'start',
  gap: '0'
}

export default Wrapper
