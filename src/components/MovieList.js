import React from 'react';
import Movie from './Movie';


export default class MovieList extends React.Component {

  render() {
    return (
      <div className='movieList container'>
        <Movie {...
          {id: 1,
          key: 1,
          title: '50 First Dates',
          ratingImage:'Rated PG-13',
          summary:"A romantic comedy about a man who falls in love with a woman who has short-term memory loss.",
          released: '2004',
          image: 'https://img.rl0.ru/afisha/e460x690q85i/s1.afisha.ru/mediastorage/4b/61/837dd29565494b3790006d20614b.jpg' }
        } />
        <Movie {...
          {id: 2,
          key: 2,
          title: 'The Hot Chick',
          ratingImage:'Rated PG-13',
          summary: "a comedy film about a popular high school girl who magically swaps bodies with a petty criminal, leading to hilarious and unexpected consequences.",
          released: '2002',
          image: 'https://img.rl0.ru/afisha/e460x690q85i/s1.afisha.ru/mediastorage/41/1e/fa0b50853b4844bab8094c661e41.jpg'}
        } />
        <Movie {...
          {id: 3,
          key: 3,
          title: 'Scary Movie 2',
          ratingImage:'Rated R', 
          summary: "a comedy horror film that parodies various horror movies and follows a group of college students who are haunted by a demonic ghost in a haunted mansion.",
          release: '2001',
          image: 'https://img08.rl0.ru/afisha/e460x690q85i/s1.afisha.ru/mediastorage/95/fe/8a2514068c664ba9b7d6bb29fe95.jpg'}
        } />
        <Movie {...
          {id: 4,
          key: 4,
          title: 'Hubie Halloween',
          ratingImage: 'Rated PG-13',
          summary: " a quirky community volunteer named Hubie finds himself in the midst of a Halloween mystery as people start disappearing, and it's up to him to save the town.",
          released: '2020',
          image: 'https://img09.rl0.ru/afisha/e460x690q85i/s.afisha.ru/mediastorage/18/1f/d1c07099cb6741c796f8fb801f18.jpg'}
        } />
        <Movie {...
          {id: 5,
          key: 5,
          title: 'Grease',
          ratingImage: 'Rated PG-13',
          summary: "a classic musical film about the love story between high school sweethearts Danny and Sandy set in the 1950s.",
          released: '1978',
          image: 'https://img08.rl0.ru/afisha/e460x690q85i/s1.afisha.ru/mediastorage/59/8a/c7ee85464a5840f792bacfb08a59.jpg'}
        }/>

      </div>
    );
  }
}