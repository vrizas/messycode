import styled from 'styled-components'

const Button = styled.button`
    background-color: ${(props) => props.backgroundColor};
    color: ${(props) => props.color};
    font-weight:${(props) => props.fontWeight};
    padding: ${(props) => props.paddingY + ' ' + props.paddingX};
    border-radius: ${(props) => props.borderRadius};
    margin: ${(props) => props.margin};
    width: ${(props) => props.width};
    border: none;
    box-sizing: border-box;
`

Button.defaultProps = {
  backgroundColor: '#3CB043',
  color: '#FFFFFF',
  fontWeight: '500',
  paddingX: '1.25rem',
  paddingY: '0.5rem',
  borderRadius: '0.375rem',
  margin: '0',
  width: 'fit-content'
}

export default Button
