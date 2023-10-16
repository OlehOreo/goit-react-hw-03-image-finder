import styled from 'styled-components';

export const Item = styled.li`
  flex-basis: calc((100% - 56px) / 3);
`;

export const Img = styled.img`
  width: 500px;
  height: 350px;
  border-radius: 20px;
  transition: 600ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  &:hover {
    transform: translateY(-8px);
    cursor: pointer;
  }
`;
