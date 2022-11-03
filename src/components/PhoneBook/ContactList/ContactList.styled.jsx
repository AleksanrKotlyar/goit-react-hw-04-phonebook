import styled from 'styled-components';

export const ContactItem = styled.li`
  display: flex;
  align-items: center;
  width: 350px;
  background-color: ${p => p.theme.colors.inputColor};
  border-radius: ${p => p.theme.radii.normal};
  padding-left: ${p => p.theme.space[3]}px;
  margin-bottom: 5px;
`;
export const ContactNumber = styled.span`
  margin-left: ${p => p.theme.space[3]}px;
`;
