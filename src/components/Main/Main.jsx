import { useState } from 'react';
import ImageCat from '../../img/funbox_logo.png';
import styles from './Main.module.css';

import {
  //   MainSection,
  Title,
  ListStyle,
  ItemStyle,
  ContentContainer,
  InfoContainer,
  Text,
  NameProduct,
  NameProductSub,
  TextInfo,
  WeightContainer,
  WeightText,
  WeightTextSub,
  ImgCat,
  TextLinkForBy,
  LinkForBy,
  Bolder,
} from './Main.styled';

const Main = () => {
  const [isActive, setIsActive] = useState(false);
  const cards = document.querySelectorAll(ItemStyle);
  console.log(cards);

  const handleMouseLeave = e => {
    // console.log(e.currentTarget);
    isActive
      ? e.currentTarget.classList.add('hoverBorderActive')
      : e.currentTarget.classList.add('hoverBorder');
  };

  const handleClick = e => {
    console.log(e.currentTarget);
    e.currentTarget.classList.remove('hoverBorder');
    e.currentTarget.classList.toggle('active');
    setIsActive(!isActive);
  };

  return (
    <section className={styles.mainSection}>
      <Title>Ты сегодня кормил кота?</Title>
      <ListStyle>
        <ItemStyle id="1">
          <ContentContainer onMouseOut={handleMouseLeave} onClick={handleClick}>
            <InfoContainer>
              <Text>Сказочное заморское яство</Text>
              <NameProduct>Нямушка</NameProduct>
              <NameProductSub>с фуа-гра</NameProductSub>
              <TextInfo>
                <Bolder>10</Bolder> порций <br /> мышь в подарок
              </TextInfo>
            </InfoContainer>
            <WeightContainer className="hover">
              <WeightText>
                0, 5 <WeightTextSub>кг</WeightTextSub>
              </WeightText>
            </WeightContainer>
            <ImgCat src={ImageCat} alt="cat" width="400" />
          </ContentContainer>
          {isActive ? (
            <TextLinkForBy>Печень утки разварная с артишоками.</TextLinkForBy>
          ) : (
            <TextLinkForBy>
              Чего сидишь? Порадуй котэ,
              <LinkForBy onClick={handleClick} className="hoverLink">
                купи.
              </LinkForBy>
            </TextLinkForBy>
          )}
        </ItemStyle>
        <ItemStyle id="2">
          <ContentContainer onMouseOut={handleMouseLeave} onClick={handleClick}>
            <InfoContainer>
              <Text>Сказочное заморское яство</Text>
              <NameProduct>Нямушка</NameProduct>
              <NameProductSub>с рыбой</NameProductSub>
              <TextInfo>
                <Bolder>40</Bolder> порций <br /> <Bolder>2 </Bolder> мыши в
                подарок
              </TextInfo>
            </InfoContainer>
            <WeightContainer className="hover">
              <WeightText>
                2 <WeightTextSub>кг</WeightTextSub>
              </WeightText>
            </WeightContainer>
            <ImgCat src={ImageCat} alt="cat" width="400" />
          </ContentContainer>
          {isActive ? (
            <TextLinkForBy>
              Головы щучьи с чесноком да свежайшая сёмгушка.
            </TextLinkForBy>
          ) : (
            <TextLinkForBy>
              Чего сидишь? Порадуй котэ,
              <LinkForBy onClick={handleClick} className="hoverLink">
                купи.
              </LinkForBy>
            </TextLinkForBy>
          )}
        </ItemStyle>
        <ItemStyle id="3">
          <ContentContainer onMouseOut={handleMouseLeave} onClick={handleClick}>
            <InfoContainer>
              <Text>Сказочное заморское яство</Text>
              <NameProduct>Нямушка</NameProduct>
              <NameProductSub>с курой</NameProductSub>
              <TextInfo>
                <Bolder>100</Bolder> порций <br /> <Bolder>5 </Bolder> мышей в
                подарок заказчик доволен
              </TextInfo>
            </InfoContainer>
            <WeightContainer className="hover">
              <WeightText>
                5 <WeightTextSub>кг</WeightTextSub>
              </WeightText>
            </WeightContainer>
            <ImgCat src={ImageCat} alt="cat" width="400" />
          </ContentContainer>
          {isActive ? (
            <TextLinkForBy>Филе из цыплят с трюфелями в бульоне.</TextLinkForBy>
          ) : (
            <TextLinkForBy>
              Чего сидишь? Порадуй котэ,
              <LinkForBy onClick={handleClick} className="hoverLink">
                купи.
              </LinkForBy>
            </TextLinkForBy>
          )}
        </ItemStyle>
      </ListStyle>
    </section>
  );
};

export default Main;
