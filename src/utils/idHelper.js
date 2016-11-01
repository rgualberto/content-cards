import _ from 'lodash';

export const generateUniqueId = (contentCards) => {
  const existingIds = _.map(contentCards, card => card.id);
  let newId;

  do {
    newId = Math.floor((1 + Math.random()) * 0x10000) + Date.now();
  } while (_.includes(existingIds, newId));

  return newId;
};
