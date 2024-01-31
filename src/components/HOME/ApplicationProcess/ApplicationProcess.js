import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSchool,
  faPersonChalkboard,
  faBasketball,
  faLightbulb,
} from "@fortawesome/free-solid-svg-icons";

const ApplicationProcess = () => {
  const Container = styled.div`
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, Liberation Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    text-align: left;
    background-color: rgb(255, 255, 255);
  `;

  const PaddingContainer = styled.div`
    padding: 50px 0;
  `;

  const ContentContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-wrap: wrap;
  `;

  const StepList = styled.ul`
    width: 70%;
    display: flex;
    justify-content: center;
    margin: 60px auto 10px;
    padding: 0;

    @media screen and (max-width: 767px) {
      flex-wrap: wrap;
    }
  `;

  const StepItem = styled.li`
    position: relative;
    counter-increment: list;
    display: flex;
    width: auto;
    padding: 0;
    margin: 0 40px;

    &:first-child:before {
      @media screen and (max-width: 767px) {
        display: block;
      }
    }

    &:before {
      @media screen and (max-width: 767px) {
        transform: rotate(90deg);
        top: initial;
        left: 36%;
        z-index: 2;
        bottom: -51px;
        display: ${props => (props.isFirstChild ? "block" : "none")};
      }
    }
  `;

  const StepWrapper = styled.div`
    width: 130px;
    height: 130px;
    border: 3px solid ${({ theme }) => theme.colors.backgroundBlue};
    margin-bottom: 30px;

    @media screen and (max-width: 767px) {
      width: 120px;
      height: 120px;
      margin-bottom: 30px;
    }
  `;

  const DataSection = styled.div`
    width: 120px;
    height: 120px;
    background: ${({ theme }) => theme.colors.backgroundBlue};
    top: 5px;
    position: absolute;
    left: 5px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 767px) {
      width: 110px;
      height: 110px;
    }
  `;

  const CenterData = styled.div`
    margin: 27px 0 0 0;
  `;

  const StepIcon = styled(FontAwesomeIcon)`
    font-size: 4rem;
    color: white;
  `;

  const StepText = styled.span`
    width: 100%;
    display: block;
    font-size: ${({ theme }) => theme.fontSize.headerfontSizeM};
    line-height: 40px;
    color: white;
    letter-spacing: 1px;
    font-weight: bold;
  `;

  return (
    <Container>
      <PaddingContainer className="padding60 bg-lightwhite">
        <div className="container-fluid">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h2 className="heading">Application Process</h2>
                <StepList className="appstep">
                  {[faSchool, faPersonChalkboard, faBasketball, faLightbulb].map((icon, index) => (
                    <StepItem key={index} isFirstChild={index === 0}>
                      <StepWrapper className="mainWrapper">
                        <DataSection className="datasection">
                          <CenterData className="centerdata">
                            <StepIcon icon={icon} />
                            <StepText>Step {index + 1}</StepText>
                          </CenterData>
                        </DataSection>
                      </StepWrapper>
                    </StepItem>
                  ))}
                </StepList>
              </div>
            </div>
          </div>
        </div>
      </PaddingContainer>
    </Container>
  );
};

export default ApplicationProcess;
