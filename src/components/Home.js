import React from 'react';
import styled from 'styled-components';

import ListingGrid from './ListingGrid';
import { items } from '../data';

function Home(props) {
 return (
  <>
   <Paragraph>
    Fruit emporium sells the finest fruits from this world and beyond.
   </Paragraph>
   <Paragraph>
    Browse items:
   </Paragraph>
   <ListingGrid itemList={Object.values(items)} />
  </>
 );
}
const Paragraph = styled.p`
  font-size: 21px;
  margin-bottom: 32px;
`;
export default Home;