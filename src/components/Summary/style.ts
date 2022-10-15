import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -10rem;

  div{
    background: var(--white);
    padding: 1.5rem 2rem;
    border-radius: 4px;
    color: var(--title);

    header{
      display: flex;
      justify-content: space-between;
    }
    strong{
      display: block;
      margin-top: 1rem;
      font-size: 2rem;
      line-height: 3rem;
      font-weight: 500;
    }
    &:last-child{
    background: var(--green);
  }
  }
  
`
