import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Card from '../components/Card/Card';
import Welcome from './Welcome';
import 'bulma/css/bulma.css';


storiesOf('Welcome', module)
  .add('to Storybook', () => (
    <Welcome showApp={linkTo('Button')}/>
  ));

storiesOf('Card', module)
  .add('default', () => (
    <div style={{width: 300}}>
      <Card
        title="pedilari"
        overview="lorem ipsum dolor sit amet consecteur lorem"
        poster="http://placehold.it/350x350" />
    </div>
  ))
