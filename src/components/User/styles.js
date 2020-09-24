import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 45px;
  padding: 0 16px;
`;

export const Avatar = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  margin-right: 12px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;

  > a {
    font-weight: 600;
    font-size: 17px;
    :hover {
      text-decoration: underline;
    }
  }

  > span {
    font-weight: 400;
    font-size: 14px;

    color: rgba(22, 24, 35, 0.5);
  }
`;
