import React from 'react';
import Card from './Card';
import renderer from 'react-test-renderer';

it('renders Card', () => {
  const tree = renderer.create(
    <Card
      title="pedilari"
      overview="lorem ipsum dolor sit amet consecteur lorem"
      poster="http://placehold.it/350x350" />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
