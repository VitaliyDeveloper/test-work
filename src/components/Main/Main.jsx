import ImageCat from '../../img/funbox_logo.png';
import {
  MainSection,
  Title,
  ListStyle,
  ItemStyle,
  ContentContainer,
  Text,
  WeightContainer,
  WeightText,
  WeightTextSub,
  ImgCat,
  TextLinkForBy,
} from './Main.styled';

const Main = () => {
  return (
    <MainSection>
      <Title>Ты сегодня кормил кота?</Title>
      <ListStyle>
        <ItemStyle>
          <ContentContainer>
            <Text>Сказочное заморское яство</Text>
            <h3>Нямушка</h3>
            <h4>с фуа-гра</h4>
            <Text>10 порций мышь в подарок</Text>
            <WeightContainer>
              <WeightText>
                0,5 <WeightTextSub>кг</WeightTextSub>{' '}
              </WeightText>
            </WeightContainer>
            <ImgCat src={ImageCat} alt="cat" width="400" />
          </ContentContainer>
          <TextLinkForBy>
            Чего сидишь? Порадуй котэ, <span>купи.</span>
          </TextLinkForBy>
        </ItemStyle>
        <ItemStyle>
          <ContentContainer>
            <Text>Сказочное заморское яство</Text>
            <h3>Нямушка</h3>
            <h4>с рыбой</h4>
            <Text>40 порций 2 мыши в подарок</Text>
            <WeightContainer>
              <WeightText>
                2 <WeightTextSub>кг</WeightTextSub>{' '}
              </WeightText>
            </WeightContainer>
            <ImgCat src={ImageCat} alt="cat" width="400" />
          </ContentContainer>
          <TextLinkForBy>
            Чего сидишь? Порадуй котэ, <span>купи.</span>
          </TextLinkForBy>
        </ItemStyle>
        <ItemStyle>
          <ContentContainer>
            <Text>Сказочное заморское яство</Text>
            <h3>Нямушка</h3>
            <h4>с курой</h4>
            <Text>100 порций 5 мышей в подарок заказчик доволен</Text>
            <WeightContainer>
              <WeightText>
                5 <WeightTextSub>кг</WeightTextSub>{' '}
              </WeightText>
            </WeightContainer>
            <ImgCat src={ImageCat} alt="cat" width="400" />
          </ContentContainer>
          <TextLinkForBy>
            Чего сидишь? Порадуй котэ, <span>купи.</span>
          </TextLinkForBy>
        </ItemStyle>
      </ListStyle>
    </MainSection>
  );
};

export default Main;
