import styled from 'styled-components';
import bgImage from '../../img/bg.jpg';

export const MainSection = styled.section`
  background-image: linear-gradient(
      rgba(0, 0, 0, 0.7),
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.7)
    ),
    url(${bgImage});
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
  font-size: 50px;
  font-weight: lighter;
  text-align: center;
  padding: 20px;
  margin: 0;
  color: #fff;
  font-family: 'Exo2.0';
  src: url('./fonts/Exo2.0-Thin.otf');
`;

export const ListStyle = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  padding: 0 20px;
`;

export const ItemStyle = styled.li`
  width: 340px;
  height: 490px;
  margin: 20px;
  transition: 250ms ease-in-out;

  .active {
    border-color: var(--second-color);
    /* background-color: red; */
    & .hover {
      background: var(--second-color);
    }
  }

  .hoverBorderActive {
    border-color: #e52e7a;
    & .hoverActive {
      background: #e52e7a;
    }
  }

  .hoverBorder {
    border-color: #2ea8e5;
    & .hover {
      background: #2ea8e5;
    }

    & .hoverLink {
      text-decoration: underline dashed #2ea8e5;
      color: #2ea8e5;
    }
  }
`;

export const ContentContainer = styled.div`
  position: relative;
  background-color: #f2f2f2;
  border: 5px solid var(--accent-color);
  border-radius: 10px;
  height: 500px;
  overflow: hidden;
  z-index: 2;
  cursor: pointer;
`;

export const InfoContainer = styled.div`
  margin-left: 30px;
`;

export const Text = styled.p`
  color: var(--grey-color);
  max-width: 300px;
`;

export const NameProduct = styled.h3`
  font-weight: bold;
  font-size: 47px;
  margin: 0;
`;

export const NameProductSub = styled.h3`
  font-weight: bold;
  font-size: 23px;
  margin: 0;
`;

export const TextInfo = styled.p`
  color: var(--grey-color);
  width: 150px;
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
  left: -30px;
  z-index: -1;
`;

export const TextLinkForBy = styled.p`
  text-align: center;
  color: #fff;
`;

export const LinkForBy = styled.span`
  font-weight: bold;
  text-decoration: underline dashed var(--accent-color);
  color: var(--accent-color);
  cursor: pointer;
`;

export const Bolder = styled.span`
  font-weight: bold;
`;
