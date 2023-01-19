import styled from 'styled-components';
import bgImage from '../../img/bg.jpg';

export const MainSection = styled.section`
  background-image: url(${bgImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
`;

export const Title = styled.h2`
  text-align: center;
  padding: 20px;
  margin: 0;
  color: #fff;
`;

export const ListStyle = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  padding: 20px;
`;

export const ItemStyle = styled.li`
  width: 340px;
  height: 490px;
  margin: 20px;
`;

export const ContentContainer = styled.div`
  position: relative;
  background-color: antiquewhite;
  border: 5px solid var(--accent-color);
  border-radius: 10px;
  height: 450px;
  overflow: hidden;
`;

export const Text = styled.p`
  color: var(--grey-color);
`;

export const WeightContainer = styled.div`
  position: absolute;
  right: 10px;
  bottom: 10px;
  background-color: var(--accent-color);
  border-radius: 50%;
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
`;

export const WeightText = styled.p`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  color: #fff;
  line-height: 1;
  font-size: 30px;
  font-weight: bold;
  text-align: center;
`;

export const WeightTextSub = styled.span`
  font-size: 20px;
`;

export const ImgCat = styled.img`
  position: absolute;
  bottom: -100px;
  left: -20px;
`;

export const TextLinkForBy = styled.p`
  color: #fff;
`;
