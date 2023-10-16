import styled from 'styled-components';

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const LoadMore = styled.button`
  display: inline-block;
  padding: 15px 25px;
  font-size: 24px;
  letter-spacing: 0.0275rem;

  width: 200px;

  text-align: center;
  text-decoration: none;
  outline: none;
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.bgBtn};
  border: none;
  border-radius: 15px;

  margin-left: 140px;
  margin-top: 20px;
  margin-bottom: 40px;

  &:hover {
    background-color: #2468ca;
  }

  &:active {
    transform: translateY(4px);
    background-color: #3e8e41;
  }
`;
