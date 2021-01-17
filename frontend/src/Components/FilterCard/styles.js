import styled from 'styled-components';

export const Container = styled.div`
    width:270px;
    height:60px;
    background: ${ props => props.actived ? '#EE6B26':'#20295F'};/**se a propriedade for ativa usetal cor de nao use tal cor */
    padding:10px;
    border-radius:5px;
    cursor: pointer;
    display:flex;
    flex-direction: column;
    justify-content:space-around;
    
    img{
        width:30px;
        height:30px;
    }
    span{
        color:#FFF;
        font-weight:bold;
        align-self:flex-end;
        font-size:18px;
    }
    &:hover {
        background: #EE6B26;
    }
`