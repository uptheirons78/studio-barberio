import styled from "styled-components";

export default styled.article`
  margin-top: 2vh;
  padding: 1rem 1rem 2rem 1rem;
  box-shadow: ${props => props.theme.bsl};
  transition: all 0.35s ease;
  &:hover {
    box-shadow: ${props => props.theme.bsh};
  }
  .thumbnail {
    width: 100%;
    figure {
      position: relative;
    }
    img {
      width: 100%;
      height: 200px;
    }
    figcaption {
      position: absolute;
      top: 0;
      right: 0;
      background: ${props => props.theme.primaryColor};
      color: #fff;
      font-size: 1.6rem;
      font-weight: 700;
      padding: 0.5rem 0.7rem;
      text-transform: capitalize;
    }
  }
  h4 {
    font-size: 1.8rem;
    font-weight: 900;
    color: ${props => props.theme.primaryColor};
    text-transform: uppercase;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  p {
    font-size: 1.6rem;
    color: ${props => props.theme.lightBlack};
    text-align: justify;
    margin-top: 1rem;
  }
  .read-more {
    display: inline-block;
    margin-top: 1rem;
    background: ${props => props.theme.primaryColor};
    color: #fff;
    padding: 0.3rem 1rem;
    font-size: 1.6rem;
    font-weight: 400;
    svg {
      transform: translate(20%, 15%);
    }
  }
`;
