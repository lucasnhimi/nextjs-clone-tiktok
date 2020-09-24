import styled from 'styled-components';

export default styled.button`
  width: 100%;
  font-size: ${(props) =>
    props.fontSize != null ? `${props.fontSize}px` : '18px'};
  font-weight: 700;
  height: 100%;
  background-color: ${(props) => props.theme.colors.primary};
  border: none;
  background: ${(props) =>
    props.outlined ? '#FFF' : props.theme.colors.primary};
  border: ${(props) =>
    props.outlined ? `1px solid ${props.theme.colors.primary}` : 'none'};
  color: ${(props) => (props.outlined ? props.theme.colors.primary : '#FFF')};
  cursor: pointer;
  :hover {
    background: ${(props) =>
      props.outlined ? 'rgba(22,24,35,0.03)' : props.theme.colors.primary};
  }
`;
