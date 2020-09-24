import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 70px;
  left: 0;
  bottom: 0;
  width: 250px;
  padding-top: 26px;
`;
export const MenuItem = styled.div`
  cursor: pointer;
  color: #161823;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 12px;
  box-sizing: border-box;
  height: 60px;
  :hover {
    background: rgba(22, 24, 35, 0.03);
  }
  > span {
    font-weight: ${(props) => (props.active ? '700' : '400')};
    margin-left: 13px;
    font-size: 24px;
    line-height: 60px;
    color: ${(props) => (props.active ? props.theme.colors.primary : 'black')};
  }

  > img {
    width: 40px;
    height: 40px;
  }
`;

export const Following = styled.div`
  width: 100%;
  padding: 20px 0;
  border-top: 0.5px solid rgba(22, 24, 35, 0.12);
  border-bottom: 0.5px solid rgba(22, 24, 35, 0.12);
`;

export const FollowingHeader = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: rgba(22, 24, 35, 0.5);
  height: 8px;
  padding-left: 16px;
  margin-bottom: 28px;
`;

export const InfoContainer = styled.div`
  margin-top: 16px;
  padding-left: 16px;
  padding-bottom: 24px;
  width: 240px;
  box-sizing: border-box;
  color: rgba(22, 24, 35, 0.5) !important;
`;

export const Links = styled.div`
  margin-bottom: ${(props) => (props.margin ? '8px' : '0px')};

  > a {
    cursor: pointer;
    display: inline-block;
    margin-right: 5px;
    margin-top: 5px;
    font-weight: 600;
    font-size: 12px;
    line-height: 12px;
    color: rgba(22, 24, 35, 0.5);
    font-family: 'proxima-semibold', PingFangSC, sans-serif;
    :hover {
      text-decoration: underline;
    }
  }
`;
