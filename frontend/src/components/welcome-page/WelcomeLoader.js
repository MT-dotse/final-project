import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../../animations/todo.json';
import styled from 'styled-components';

const WelcomeLoader = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <LoaderWrapper>
      <Lottie options={defaultOptions} height={500} width={500} />
    </LoaderWrapper>
  );
};

export default WelcomeLoader;

//--------- STYLED COMPONENTS ----------//
const LoaderWrapper = styled.div`
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100vw;
`;