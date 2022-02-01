import React, { useState, useEffect } from 'react';
import {
  NewsSectionWrapper,
  Header,
  ArticleWrapper,
  TitleWrapper,
  ContentWrapper,
} from './NewsSection.styles';
import { Button } from 'components/atoms/Button/Button';
import axios from 'axios';

const NewsSection = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    axios
      .post(
        'https://graphql.datocms.com/',
        {
          query: `{
        allArticles {
          id
          title
          category
          content
          image {
            url
          }
        }
      }`,
        },
        {
          headers: {
            authorization: `Bearer ${process.env.REACT_APP_DATOCMS_API_KEY}`,
          },
        }
      )
      .then(({ data: { data } }) => setArticles(data.allArticles))
      .catch(() => setError(`Sorry, we couldn't load news for you. `));
  }, []);

  return (
    <NewsSectionWrapper>
      <Header>University news feed</Header>
      {articles.length > 0 && !error ? (
        articles.map(({ title, category, content, image, id }) => (
          <ArticleWrapper key={id}>
            <TitleWrapper>
              <h3>{title}</h3>
              <p>{category}</p>
            </TitleWrapper>
            <ContentWrapper>
              <p>{content}</p>
              {image ? <img src={image.url} alt="article" /> : null}
            </ContentWrapper>
            <Button isBig>Read more</Button>
          </ArticleWrapper>
        ))
      ) : (
        <Header>{error ? error : 'Loading...'}</Header>
      )}
    </NewsSectionWrapper>
  );
};

export default NewsSection;
