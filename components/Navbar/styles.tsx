import styled,{keyframes} from 'styled-components'
import { colorvar } from '../../styles/variables'


const moveAnimation = keyframes`
  10%{width: 10%}
  30%{width:30%}
  50%{width: 50%;}
  70%{width: 70%;}
  100%{width: 100%}
`

export const NavIcon = styled.i`
 font-size: 1.2rem;
 cursor:pointer;
  
`



export const NavIconContainer =  styled.div`
  width: 100%;
  flex: 1;
  display:flex;
  align-items: center;
  justify-content:flex-end;
  flex-direction: row;

`
export const NavContainer =  styled.div`
  display:flex;
  width:100%;
  animation-duration: 8s;

`
export const NavText = styled.div`
  flex:9;
`

export const NavContent = styled.div`
    border:1px solid ${colorvar?.white};
    display:flex;
    width:2.5rem;
    align-items:center;
    justify-content:center;
    height:2.5rem;
    border-radius:2.8rem;
`


/**
 * animations
 */
