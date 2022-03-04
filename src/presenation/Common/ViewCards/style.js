import Styled from "styled-components";

const RowContainer = Styled.div`
display:flex;
.label{
    display:inline-block;
       width:30%;
       margin-bottom:14px;
       font-size: 14px;
       line-height: 19px;
       color: rgba(255, 255, 255, 0.87);;
     }
     .value{
         width:70%;
       font-size: 14px;
       line-height: 19px;
       color: rgba(255, 255, 255, 0.87);;
       margin-bottom:14px;
     }
       img.avatar{
         display: inline-block;
         width: 89px;
         height: 89px;
         border-radius: 50%;
       }
       img{
           width:241px;
           height:161px
       }
     
`;
export { RowContainer };
