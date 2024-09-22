const getMatchingOffers = (userVAS) => {
  const availableOffers = [
    { brand: 'Nike', offer: '20% Off Shoes', category: 'Sports' },
    { brand: 'Apple', offer: '10% Off iPhone', category: 'Tech' }
  ];

  return availableOffers.filter(offer => userVAS.includes(offer.category));
};

module.exports = { getMatchingOffers };
