import React from 'react';
import styled from 'styled-components';

import ListingGrid from './ListingGrid';
import { items } from '../data';

function Home(props) {
  return (
    <>
      <Intro>
        <Paragraph>
          Fruit emporium sells the finest fruits from this world and beyond.
   </Paragraph>
        <Paragraph>
          Browse items:
   </Paragraph>
      </Intro>
      <ListingGrid itemList={Object.values(items)} />
    </>
  );
}
const Paragraph = styled.p`
  font-size: 21px;
  margin-bottom: 32px;
`;
const Intro = styled.div`
  padding-bottom: 24px;
`;
export default Home;