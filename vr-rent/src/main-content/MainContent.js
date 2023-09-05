import Banner from '../banner/Banner';
import imageOne from '../asserts/character.png';
import imageTwo from '../asserts/man.png';
import ImageThree from '../asserts/gamepad.png';

const text = (
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
  midlleParagraph: 'Save 50$',
  text: text,
  image: imageOne,
};

const bannerTwoInfo = {
  smallParagraph: 'About VR Glasses',
  bigParagraph: 'The New VR Glasses Series',
  text: text,
  image: imageTwo,
};

const bannerThreeInfo = {
  smallParagraph: 'About XBOX, PS',
  bigParagraph: 'The New Xbox, Ps Series',
  text: text,
  image: ImageThree,
};

const MainContent = () => {
  return (
    <section>
      <Banner
        smallParagraph={bannerOneInfo.smallParagraph}
        bigParagraph={bannerOneInfo.bigParagraph}
        midlleParagraph={bannerOneInfo.midlleParagraph}
        text={bannerOneInfo.text}
        image={bannerOneInfo.image}
      />
      <Banner
        smallParagraph={bannerTwoInfo.smallParagraph}
        bigParagraph={bannerTwoInfo.bigParagraph}
        text={bannerTwoInfo.text}
        image={bannerTwoInfo.image}
      />
      <Banner
        smallParagraph={bannerThreeInfo.smallParagraph}
        bigParagraph={bannerThreeInfo.bigParagraph}
        text={bannerThreeInfo.text}
        image={bannerThreeInfo.image}
      />
    </section>
  );
};

export default MainContent;
