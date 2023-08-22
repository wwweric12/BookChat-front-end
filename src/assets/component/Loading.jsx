import { styled } from 'styled-components';

import Spinner from '../images/Spinner.gif';

const Loading = () => {
  return (
    <Background>
      <SpinnerImgBox>
        <SpinnerImg src={Spinner} alt="Spinner" />
      </SpinnerImgBox>
      <LoadingText>잠시만 기다려주세요 !</LoadingText>
    </Background>
  );
};

export default Loading;

const Background = styled.div`
  width: 100%;
  height: calc(100vh - 117px);
  background-color: rgba(217, 217, 217, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const SpinnerImgBox = styled.div`
  width: 200px;
  height: 200px;
  margin-bottom: 7px;
`;

const SpinnerImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const LoadingText = styled.p`
  width: auto;
  height: 28px;
  font-size: 28px;
  color: ${({ theme }) => theme.colors.BLACK};
`;
