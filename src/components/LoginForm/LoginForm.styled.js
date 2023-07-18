import styled from 'styled-components';

export const LoginContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Yatra One', cursive;
  animation: 800ms ease-in-out 0s 1 alternate show;
  @keyframes show {
    from {
      opacity: 0.3;
    }
    to {
      opacity: 1;
    }
  }
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 450px;
  animation: 800ms ease-in-out 0s 1 alternate sun-rise;

  @keyframes sun-rise {
    from {
      /* pushes the sun down past the viewport */
      opacity: 0.3;
      transform: translateY(40%);
    }
    to {
      /* returns the sun to its default position */
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  max-width: 250px;
  width: 100%;
  &:first-child ~ label {
    margin-top: 20px;
  }
`;

export const Input = styled.input`
  border: 2px solid black;
  height: 30px;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.3);
  font-size: 18px;
`;
export const ButtonBox = styled.div`
  display: flex;
  align-items: center;
  column-gap: 40px;
  margin-top: 20px;
`;
