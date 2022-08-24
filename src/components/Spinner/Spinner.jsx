import { CSSProperties } from 'react';
import HashLoader from 'react-spinners/HashLoader';
import styled from '@emotion/styled';

const override: CSSProperties = {
  display: 'block',
  margin: '0 auto',
};

function Spinner() {
  return (
    <Overlay>
      <HashLoader color="#676767" cssOverride={override} loading size={125} />
    </Overlay>
  );
}

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 3;
`;

export default Spinner;
