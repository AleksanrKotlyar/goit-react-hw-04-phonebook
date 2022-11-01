import styled from 'styled-components';

export const FilterLabelForm = styled('label')`
  display: flex;
  flex-direction: column;
`;

export const FilterInputForm = styled.input`
  background-color: ${p => p.theme.colors.inputColor};
  width: 200px;
  
  :hover,
  :focus {
    background-color: ${p => p.theme.colors.white};
`;
