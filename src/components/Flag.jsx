import styled from '@emotion/styled'
import { flags } from '../assets'

const FlagImage = styled.img`
  filter: ${props => props.selected ? 'grayscale(0%)' : 'grayscale(95%)'};
`

export const Flag = ({ country, set, code, language }) => {
  return <FlagImage
    onClick={() => set(code)}
    src={flags[country.toLowerCase()]}
    alt={`${country.toUpperCase()} flag`}
    selected={language === code } />
}
