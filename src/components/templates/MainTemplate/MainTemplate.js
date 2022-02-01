import React from 'react';
import Navigation from 'components/organisms/Navigation/Navigation';
import { Wrapper } from './MainTemplate.styles';
import Searchbar from 'components/organisms/Searchbar/Searchbar';
import NewsSection from '../NewsSection/NewsSection';

const MainTemplate = ({ children }) => {
  return (
    <Wrapper>
      <Navigation />
      <Searchbar />
      {children}
      <NewsSection />
    </Wrapper>
  );
};

export default MainTemplate;
