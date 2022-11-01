import styled from 'styled-components';

export const ContactItem = styled.li`
  display: flex;
  align-items: center;
  width: 350px;
`;
export const ContactNumber = styled.span`
  margin-left: ${p => p.theme.space[3]}px;
`;

export const DeleteBtn = styled.button`
  margin-left: ${p => p.theme.space[4]}px;
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
