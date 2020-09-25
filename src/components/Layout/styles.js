import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: flex-start;
  flex: 1 1 auto;
  padding-top: 70px;
`;

export const SidebarContainer = styled.div`
  flex: 0 0 240px;
  @media (max-width: 768px) {
    display: none;
    flex: 0;
  }
`;

export const ContentContainer = styled.div`
  flex: 1;
  margin: 0 auto;
  padding: 50px 20px;
  display: flex;
  max-width: 1194px;
`;
