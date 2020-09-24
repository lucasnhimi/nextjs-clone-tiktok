import styled from 'styled-components';
import { ArrowForwardIos } from 'styled-icons/material';

export const Container = styled.div`
  flex: 0 0 330px;
  width: 330px;
  margin-left: 24px;
  @media (max-width: 1200px) {
    display: none;
  }
`;

export const IconsContainer = styled.div`
  margin-bottom: 39px;
  text-align: left;
`;

export const Icon = styled.img`
  width: 31px;
  height: 31px;
  margin-right: 15px;
`;

export const BoxContainer = styled.div`
  position: relative;
  border: 1px solid rgba(22, 24, 35, 0.12);
  border-radius: 8px;
  height: 380px;
  display: flex;
  flex-direction: column;
  margin-bottom: 55px;
`;

export const BoxHeader = styled.div`
  padding: 24px 16px;
  padding-right: 12px;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  flex: 0 0 auto;
  > span {
    font-weight: 700;
    line-height: 1;
    font-size: 24px;
  }
`;

export const ButtonContainer = styled.div`
  width: 95px;
  height: 28px;
  font-weight: 600;
  font-size: 16px;
  margin-left: auto;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InfoName = styled.a`
  font-weight: 600;
  font-size: 17px;
  :hover {
    text-decoration: underline;
  }
`;

export const InfoUserName = styled.span`
  font-weight: 400;
  font-size: 14px;
  color: rgba(22, 24, 35, 0.5);
`;

export const ItemContainer = styled.div`
  height: calc(100% - 72px);
  overflow: auto;
  cursor: pointer;
`;

export const ArrowIcon = styled(ArrowForwardIos)`
  margin-left: auto;
  height: 20px;
  width: 14px;
`;

export const DownloadImage = styled.img`
  width: 170px;
  height: 50px;
  border-radius: 5px;
  margin-bottom: 12px;
`;
