import { styled } from 'styled-components';

export const ButtonPrimary = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  font-family: Manrope700, sans-serif;
  font-size: 16px;
  border: 2px solid ${p => p.theme.colors.yellow};
  color: ${p => p.theme.colors.yellow};
  background-color: ${p => p.theme.colors.white};
  padding: 8px 20px;
  gap: 8px;

  @media screen and (min-width: 768px) {
    width: 142px;
  }
  &:hover,
  &:focus {
    color: ${p => p.theme.colors.white};
    border: 2px solid ${p => p.theme.colors.transparent};
    background-color: ${p => p.theme.colors.yellow};
  }
`;

export const ButtonSecondary = styled(ButtonPrimary)`
  border: 2px solid ${p => p.theme.colors.transparent};
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.yellow};
  width: 165px;

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.yellow};
    border: 2px solid ${p => p.theme.colors.yellow};
    background-color: ${p => p.theme.colors.white};
  }
`;