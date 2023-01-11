import styled from 'styled-components'

const Form = styled.form`
    background-color: ${(props) => props.backgroundColor};
    padding: ${(props) => props.paddingY + ' ' + props.paddingX};
    width: ${(props) => `calc(${props.width})`};
    border-radius: ${(props) => props.borderRadius};
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

    @media only screen and (min-width: 768px) {
        width: ${(props) => `calc(${props.width} - 25%)`};
    }

    @media only screen and (min-width: 1024px) {
        padding: ${(props) => `calc(${props.paddingX} + 0.75rem) calc(${props.paddingX} + 0.75rem)`};
        width: ${(props) => `calc(${props.width} - 41%)`};
    }
`

Form.defaultProps = {
  backgroundColor: 'white',
  paddingX: '1.25rem',
  paddingY: '1rem',
  borderRadius: '0.5rem',
  width: '75%'
}

export default Form
