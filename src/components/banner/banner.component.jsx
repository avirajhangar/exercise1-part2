import React from "react";
import {
  BannerContainer,
  BannerImage,
  BannerBackground,
  BannerBlock,
  BannerBlockSubtitle,
  BannerBlockDivider,
  BannerBlockText,
  BannerLink,
} from "./banner.styles";

const Banner = () => {
  return (
    <BannerContainer>
      <BannerImage
        className="banner__img"
        src="./assets/images/caralog10.jpg"
        alt="Hp Banner"
      />
      <BannerBackground />
      <BannerBlock>
        <BannerBlockSubtitle>Small Bussiness</BannerBlockSubtitle>
        <BannerBlockDivider />
        <BannerBlockText>
          A Small bussiness Responsive Theme by&nbsp;
          <BannerLink to="/">CodePlayground</BannerLink>
        </BannerBlockText>
      </BannerBlock>
    </BannerContainer>
  );
};

export default Banner;
