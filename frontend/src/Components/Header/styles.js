import styled from 'styled-components';

export const Container = styled.div`
    width: 100% ;
    height:70px;
    background: #20295F;
    display:flex;
    border-bottom:5px solid #EE6B26;
`
export const LeftSide = styled.div`
    width: 50%;
    height: 70px;
    display: flex;
    align-items: center;
    padding-left: 10px;
    img{
        width: 130px;
        height: 70px;

    }
`
export const RightSide = styled.div`
    width: 50%;
    height:70px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    a{
        color: #FFF;
        font-weight: bold;
        text-decoration: none;
        margin: 0 10px;
        &:hover{
            color: #EE6B26;
        }
    }
    #notification{
        img{
            width: 30px;
            height:25px;
        }
        span{
            background:#FFF;
            color: #EE6B26;
            padding: 3px 7px;
            border-radius:50%;
            position:relative;
            top:-20px;
            right:10px;
        }
        &:hover{
            opacity:0.5;
        }
    }
    .divisor::after{
        content: "|";
        margin: 0 10px;
        color:white;
    }
`