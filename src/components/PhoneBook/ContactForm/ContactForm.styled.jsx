import styled from 'styled-components';

export const LabelForm = styled('label')`
  display: flex;
  flex-direction: column;
`;
export const InputForm = styled.input`
   background-color: ${p => p.theme.colors.inputColor};
  width: 200px;
  
  :hover,
  :focus {
     background-color: ${p => p.theme.colors.white};
`;

export const SubmitBtn = styled.button`
  margin-right: auto;
  margin-left: auto;
  margin-top: ${p => p.theme.space[3]}px;
  border: 0 solid transparent;
  padding: ${p => p.theme.space[2]}px ${p => p.theme.space[3]}px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${p => p.theme.fontSizes.xs}px;
  background-color: transparent;
  border-radius: ${p => p.theme.radii.normal};
  box-shadow: inset -2px -2px 4px 0 #222222;
  cursor: pointer;
  transition: color ease-in-out 200ms, box-shadow ease-in-out 200ms;

  :hover,
  :focus {
    background-color: ${p => p.theme.colors.colorInteract};

    box-shadow: inset -2px -2px 4px 0 ${p => p.theme.colors.colorTitle};
  }
  :active {
    background-color: ${p => p.theme.colors.colorInteract};
    box-shadow: inset 2px 2px 4px 0 ${p => p.theme.colors.colorTitle};
  }
`;
