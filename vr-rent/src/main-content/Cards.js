import CardItem from './CardItem';

import classes from './Cards.module.css';

const CardInfo = [
  {
    id: 'a1',
    name: 'Basic',
    price: '55$ /per hour',
    userQnty: '2 users included',
    storageSize: '2gb of storage',
    emailSupport: 'Email support ',
    help: 'Help center acces',
  },
  {
    id: 'a2',
    name: 'Standart',
    price: '95$ /per hour',
    userQnty: '10 users included',
    storageSize: '5gb of storage',
    emailSupport: 'Email support ',
    help: 'Help center acces',
  },
  {
    id: 'a3',
    name: 'Premium',
    price: '150$ /per hour',
    userQnty: '15 users included',
    storageSize: '15gb of storage',
    emailSupport: 'Email support ',
    help: 'Help center acces',
  },
];

const Cards = () => {
  return (
    <section className={classes.wrapper}>
      <label>
        <p>Our Pricing</p>
        <p className={classes['main-paragraph']}>Choose Your Plan</p>
      </label>
      <div className={classes.cards}>
        {CardInfo.map((card) => (
          <CardItem
            name={card.name}
            price={card.price}
            userQnty={card.userQnty}
            storageSize={card.storageSize}
            emailSupport={card.emailSupport}
            help={card.help}
          />
        ))}
      </div>
    </section>
  );
};

export default Cards;
