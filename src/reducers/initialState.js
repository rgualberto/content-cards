import {createEmptyValue} from 'react-rte';

export default {
  todoCards: [
    {
      title: 'First Card',
      todos: ['Go to work', 'Come back Home', 'Go to sleep'],
      image: 'stock-1'
    },

    {
      title: 'Second Guy',
      todos: ['Somewhere', 'Over the rainbow'],
      image: 'stock-2'
    },

    {
      title: 'Third Dude',
      todos: ['I like', 'to eat', 'food with', 'several hot', 'peppers and', 'beans'],
      image: 'stock-3'
    }
  ],
  editorValue: createEmptyValue()
};
