import React from 'react'
import renderer from 'react-test-renderer'
import Index from '../pages/index'

describe('With Snapshot Testing', () => {
  it('show the correct index page', () => {
    const component = renderer.create(<Index />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})