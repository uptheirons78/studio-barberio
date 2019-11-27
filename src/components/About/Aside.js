import React from "react";
import styled from "styled-components";

const AboutPageAside = ({ collaboratori }) => {
  return (
    <div className="col-md-4 mb-5 pl-5">
      <h2 className="heading-2">Team Members</h2>
      <hr />
      {collaboratori.map(collaboratore => {
        return (
          <Widget key={collaboratore.name} className="sidebar-widget mb-5">
            <div className="card">
              <div className="card-body d-flex flex-column align-items-center">
                <img
                  src={collaboratore.image}
                  alt={collaboratore.imageAlt}
                  className="img-fluid rounded-circle w-50 mb-3"
                />
                <h5>{collaboratore.name}</h5>
                <h6 className="text-muted mb-3">{collaboratore.occupazione}</h6>
                <p>{collaboratore.descrizione}</p>
              </div>
            </div>
          </Widget>
        );
      })}
    </div>
  );
};

export default AboutPageAside;

const Widget = styled.div`
  text-align: justify;

  h5 {
    color: ${props => props.theme.black};
  }

  p {
    color: ${props => props.theme.black};
    font-size: 0.9rem;
    margin-bottom: 0;
  }

  strong,
  a {
    color: ${props => props.theme.primaryColor};
    font-weight: 700;
  }

  .social-container {
    display: flex;
    list-style-type: none;
    padding: 0;

    .social-link {
      margin-right: 0.5rem;
      svg {
        fill: #ffffff;
        width: 3rem;
        height: 3rem;
        padding: 1rem;
      }
    }
    .social-link__facebook {
      svg {
        background: #3a579a;
      }
    }
    .social-link__linkedin {
      svg {
        background: #127bb6;
      }
    }
    .social-link__twitter {
      svg {
        background: #4ab3f4;
      }
    }
  }
`;
