import React from 'react';
import styled from "styled-components"

const HomeBanner = ({ name, descriptionText }) => {
  return (
    <BannerWrapper>
      <Bannertext>
        <Name>{name}</Name>
        {descriptionText}
      </Bannertext>
    </BannerWrapper>
  );
};

const BannerWrapper = styled.div`
  display: table-caption;
`

const Name = styled.span`
  display: block;
  color: var(--theme-color--grape-200);
`

const Bannertext = styled.h1`
  text-transform: uppercase;
  font-size: clamp(2.5rem, 6vw + 0.2rem, 15.5rem);
  line-height: 0.9;
  // Fix the Safari rendering issue
  min-height: 0vh;
  color: ${({ theme }) => theme.colors.bannerTextColor};
  padding-bottom: 3rem;
`

export default HomeBanner;
