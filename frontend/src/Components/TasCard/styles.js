import styled from 'styled-components';
 export const Container = styled.div`
   width: 250px;
   height: 200px;
   box-shadow: 4px 1px 15px 0px rgba(0,0,0,0.75);
   border-radius:10px;

   display:flex;
   align-items: center;
   justify-content: center;
   flex-direction:column;
   margin:20px;
   cursor:pointer;
   &:hover{
     opacity:0.5;
     transition: all 0.3s ease;
   }
   
 `
 export const TopCard = styled.div`
   display:flex;
   align-items: center;
   justify-content: center;
   flex-direction:column;

 `
 export const BottomCard = styled.div`
   width: 100%;
   display:flex;
   justify-content: space-around;
   strong{
      color:#EE6B26;
      font-weight:bold;

   }
   span{
      color:#707070;

   }

 `