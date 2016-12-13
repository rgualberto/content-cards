import {createEmptyValue} from 'react-rte';

export const initialState = {
  isLoaded: false,
  contentCards: [
    {
      id: 1481590767624,
      title: 'Sunday\'s ToDo',
      content: '<blockquote>Success is the result of perfection, hard work, learning from failure, loyalty, and persistence. <br>\n</blockquote>\n<p><em>- </em><a href="https://www.brainyquote.com/quotes/quotes/c/colinpowel386437.html"><em>Colin Powell</em></a></p>\n<p><strong>Morning&nbsp;</strong></p>\n<ol>\n  <li><del>Prepare breakfast</del>\n    <ol>\n      <li><del>Make coffee</del></li>\n      <li><del>Cook eggs and bacon</del></li>\n      <li><del>Eat!</del></li>\n    </ol>\n  </li>\n  <li>Pack lunch</li>\n  <li>Catch train to work</li>\n</ol>\n<p><strong>Afternoon</strong></p>\n<ol>\n  <li>Go to gym</li>\n  <li>Eat Dinner</li>\n  <li>Read for an hour</li>\n  <li>TV, shower, bed</li>\n</ol>',
      image: 'stock-4'
    },
    {
      id: 1481591203602,
      title: 'Say Hello!',
      content: '<pre><code>const sayHello = recipient =&gt; `Hello ${recipient}!`;</code></pre>\n<pre><code>sayHello(\'friend\');</code></pre>\n<p><br></p>\n<p><strong>Output</strong></p>\n<p><code>"Hello friend!"</code></p>',
      image: 'stock-1'
    },
    {
      id: 1481592077390,
      title: 'Excerpt...',
      content: '<h1>Chapter 1</h1>\n<p><em>Serafina opened her eyes and scanned the darkened workshop, looking for any rats stupid enough to come into her territory while she slept. She knew they were out there, just beyond her nightly range, crawling in the cracks and shadows of the great house’s sprawling basement, keen to steal whatever they could...</em></p>',
      image: 'stock-6'
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
    },
    {
      displayName: 'Stock 4',
      value: 'stock-4'
    },
    {
      displayName: 'Stock 5',
      value: 'stock-5'
    },
    {
      displayName: 'Stock 6',
      value: 'stock-6'
    }
  ]
};
