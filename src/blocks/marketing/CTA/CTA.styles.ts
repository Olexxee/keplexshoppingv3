import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 720px;
  margin: 0 auto;
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;
