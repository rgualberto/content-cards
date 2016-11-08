import {setCookie, getCookie} from './cookie';

export const saveContent = (state) => {
  const serializedCards = JSON.stringify(state.contentCards),
        daysToExpiration = 7;

  let now = new Date();

  const cookieExpiry = new Date(now.setDate(now.getDate() + daysToExpiration));

  setCookie('contentCards', serializedCards, {maxage: cookieExpiry});
};

export const getContent = (state) => {
  const contentCards = getCookie('contentCards');

  if (contentCards) {
    return {
      ...state,
      contentCards: JSON.parse(contentCards)
    };
  }

  return state;
};
