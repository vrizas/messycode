import styled from 'styled-components'

const Input = styled.input`
    width: ${(props) => props.width};
    padding: ${(props) => props.paddingY + ' ' + props.paddingX};
    border-radius: ${(props) => props.borderRadius};
    border-width: 1px;
    box-sizing: border-box;
`
Input.defaultProps = {
  width: '100%',
  paddingX: '0.75rem',
  paddingY: '0.5rem',
  borderRadius: '0.375rem'
}

export default Input
