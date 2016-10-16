import {createEmptyValue} from 'react-rte';

export default {
  contentCards: [
    {
      title: 'First Card',
      content: 'Go to work',
      image: 'stock-1'
    },

    {
      title: 'Second Guy',
      content: 'Somewhere',
      image: 'stock-2'
    },

    {
      title: 'Third Dude',
      content: 'I like',
      image: 'stock-3'
    }
  ],
  editorValue: createEmptyValue(),
  contentImages: [
    {
      displayName: 'Stock 1',
      value: 'stock-1'
    },
    {
      displayName: 'Stock 2',
      value: 'stock-2'
    },
    {
      displayName: 'Stock 3',
      value: 'stock-3'
    }
  ]
};
