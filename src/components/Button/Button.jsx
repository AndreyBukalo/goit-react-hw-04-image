import { Button } from "./Button.styled";



export const MoreButton = ({ children, onClick }) => (
  <Button type="button" onClick={onClick}>
    {children}
  </Button>
);
