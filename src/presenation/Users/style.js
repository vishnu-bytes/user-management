import Styled from "styled-components";

const Main = Styled.div`
.caption_wrap{
  display:flex;
  justify-content:flex-start;
  align-items:flex-start;
  flex-direction:column;
  h6{
    font-size:16px;
  }
  h5{
    font-size:24px;
    color:#013b82;
  }
}
  .content_wrapper{
    padding:124px;
    padding-top:15px;
    .search_wrap{
      display:flex;
      justify-content:flex-start;
      width:30%;
      align-items:center;
      h6{
        color:#013b82;
        font-size:18px;
        margin-bottom:0;
        margin-right:24px;
      }
    }
  }
  .apply_for{
    display:flex;
    justify-content:space-between;
    align-items:center;
    border:1px solid black;
    height:155px;
    padding:0 24px;
    span{
      display:flex;
      flex-direction:column;
    }
    p{
      span{
        color:red!important;
      }
    }
  }
`;



const Badge = Styled.span`
  display: inline-block;
  margin-bottom: 32px;
  padding: 5px 20px;
  border-radius: 16px;
  background: ${({ type, theme }) => theme[`${type}-color`]}10;
  color: ${({ type, theme }) => theme[`${type}-color`]};
  font-size: 13px;
  font-weight: 500;
`;



const UserTableStyleWrapper = Styled.nav`

  table{
    tbody{
      td{
        .user-info{
          .user-name{
            font-size: 14px;
          }
        }
        span.status-text{
          font-size: 12px;
          padding: 0 12.41px;
          line-height: 1.9;
          font-weight: 500;
          border-radius: 12px;
          text-transform: capitalize;
          display: inline-block !important;
          background: #ddd;
          &.active{
            background-color: ${({ theme }) => theme["success-color"]}15;
            color: ${({ theme }) => theme["success-color"]};
          }
          &.deactivate{
            background-color: ${({ theme }) => theme["warning-color"]}15;
            color: ${({ theme }) => theme["warning-color"]};
          }
          &.blocked{
            background-color: ${({ theme }) => theme["danger-color"]}15;
            color: ${({ theme }) => theme["danger-color"]};
          }
        }
      }
    }
  }
  .ant-table-pagination.ant-pagination{
    width: 100%;
    text-align: ${({ theme }) => (!theme.rtl ? "right" : "left")};
    margin-top: 0 !important;
    padding-top: 30px;
    @media only screen and (max-width: 767px){
      text-align: center;
    }
  }
  .span-flex{
    span{
      display: flex;
      justify-content:center;
      gap:10px;
      svg{
        width:18px;
        height:16px;
      }
    }
  }
  .contact-table{
    table{
      tr{
        th{
          &:first-child{
            ${({ theme }) =>
              theme.rtl ? "padding-right" : "padding-left"}: 20px;
          }
          &:last-child{
            ${({ theme }) =>
              theme.rtl ? "padding-left" : "padding-right"}: 20px;
          }
        }
      }
      .table-actions{
        .table_actions_wrap{
          display:flex;
          flex-direction:column;
          button{
            background:transparent!important;
            border:none~important;
          }
        }
        button{
          width: auto;
          height: auto;
          padding: 0;
          background-color: transparent;
          &:hover{
            background-color: transparent;
          }
          &.ant-btn-primary{
            &:hover{
              color: #FF6F00;
            }
          }
        }
      }
      tbody >tr.ant-table-row-selected >td{
        background-color: ${({ theme }) => theme["primary-color"]}10;
      }
    }
    
  }
`;


export {
  Badge,
  UserTableStyleWrapper,
  Main,
};
