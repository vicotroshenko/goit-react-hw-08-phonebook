import { Main } from "./LinearBack.styled";

export const LinearBack = ({ children }) => {
  return (
    <Main>
			{children}
      <div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
      </div>
    </Main>
  );
};
