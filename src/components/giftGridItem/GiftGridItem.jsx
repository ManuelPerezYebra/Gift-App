import { ImgContainer } from './giftGridItem.styles';

export const GiftGridItem = ({ title, url }) => {
  return (
    <ImgContainer>
      <img src={url} alt="" />
    </ImgContainer>
  );
};
