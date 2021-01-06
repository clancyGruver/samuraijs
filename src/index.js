import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const postData = [
  {
    id: 0,
    text: 'Hello',
    likeCount: 10,
  },
  {
    id: 1,
    text: 'Post 2',
    likeCount: 15,
  },
  {
    id: 2,
    text: 'Post 3',
    likeCount: 20,
  },
];


const userData = [
  {
    id: 1,
    name: 'Andrew',
  },
  {
    id: 2,
    name: 'Dmitry',
  },
  {
    id: 3,
    name: 'Sasha',
  },
  {
    id: 4,
    name: 'Sveta',
  },
];

const dialogData = [
  {
    id: 1,
    name: "Sasha",
    text: 'Suspendisse at elit vitae justo volutpat rutrum at vel odio. Pellentesque vel ornare diam. Vivamus.',
  },
  {
    id: 2,
    name: "Dimych",
    text: 'Suspendisse at elit vitae justo volutpat rutrum at vel odio. Pellentesque vel ornare diam. Vivamus.',
  },
  {
    id: 3,
    name: "Masha",
    text: 'Suspendisse at elit vitae justo volutpat rutrum at vel odio. Pellentesque vel ornare diam. Vivamus.',
  },
  {
    id: 4,
    name: "Misha",
    text: 'Suspendisse at elit vitae justo volutpat rutrum at vel odio. Pellentesque vel ornare diam. Vivamus.',
  },
  {
    id: 5,
    name: "MOrgenshtern",
    text: 'Suspendisse at elit vitae justo volutpat rutrum at vel odio. Pellentesque vel ornare diam. Vivamus.',
  },
]

ReactDOM.render(
  <React.StrictMode>
    <App posts={postData} dialogs={dialogData} users={userData} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
