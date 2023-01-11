import styled from 'styled-components'

const Title = styled.h2`
    color: ${(props) => props.color};
    font-weight:${(props) => props.fontWeight};
    margin: ${(props) => props.margin};
    font-size: ${(props) => props.fontSize};
    line-height: ${(props) => props.lineHeight};
`

Title.defaultProps = {
  color: '#3CB043',
  fontWeight: '500',
  margin: '0 0 1.25rem 0',
  fontSize: '1.125rem',
  lineHeight: '1.75rem'
}

export default Title
