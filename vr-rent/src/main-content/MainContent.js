import Banner from '../banner/Banner';

const textOne = (
  <div>
    It is a long established fact that a reader will be distracted by <br /> the
    readable content of a page when looking at its layout. The <br /> point of
    using Lorem Ipsum is that it has a more-or-less normal <br /> distribution
    of letters as opposed.
  </div>
);

const bannerOneInfo = {
  smallParagraph: 'Gaming Consoles',
  bigParagraph: 'Try It, Rent It',
  midlleParagraph: 'Save 50$!',
  text: textOne,
  image: '../asserts/character.png/',
};

const MainContent = () => {
  return (
    <Banner
      smallParagraph={bannerOneInfo.smallParagraph}
      bigParagraph={bannerOneInfo.bigParagraph}
      midlleParagraph={bannerOneInfo.midlleParagraph}
      text={bannerOneInfo.text}
      image={bannerOneInfo.image}
    />
  );
};

export default MainContent;
