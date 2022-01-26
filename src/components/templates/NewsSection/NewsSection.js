import { Button } from 'components/atoms/Button/Button';
import React from 'react';
import {
  NewsSectionWrapper,
  Header,
  ArticleWrapper,
  TitleWrapper,
  ContentWrapper,
} from './NewsSection.styles';

const data = [
  {
    title: 'New computers for all lecturers',
    category: 'Staff news',
    content:
      'Amet, diam, viverra nec pretium in nunc a. Pellentesque venenatis fames molestie non. Nulla neque, a a id elementum pretium aliquam. In turpis sem vestibulum ut in ut. Fringilla orci, condimentum tellus leo nunc, vitae eu. Diam euismod enim integer facilisi sed. Pretium hendrerit quis egestas eget at magna ac commodo volutpat.',
    image: null,
  },
  {
    title: 'Business course for best students',
    category: 'Students',
    content:
      'Amet, diam, viverra nec pretium in nunc a. Pellentesque venenatis fames molestie non. Nulla neque, a a id elementum pretium aliquam.',
    image: 'https://unsplash.it/500/400',
  },
  {
    title: 'All exams postponed',
    category: 'Staff news',
    content:
      'Amet, diam, viverra nec pretium in nunc a. Pellentesque venenatis fames molestie non. Nulla neque, a a id elementum pretium aliquam.',
    image: null,
  },
];

const NewsSection = () => (
  <NewsSectionWrapper>
    <Header>University news feed</Header>
    {data.map(({ title, category, content, image }) => (
      <ArticleWrapper key={title}>
        <TitleWrapper>
          <h3>{title}</h3>
          <p>{category}</p>
        </TitleWrapper>
        <ContentWrapper>
          <p>{content}</p>
          {image ? <img src={image} alt="article" /> : null}
        </ContentWrapper>
        <Button isBig>Read more</Button>
      </ArticleWrapper>
    ))}
  </NewsSectionWrapper>
);

export default NewsSection;
