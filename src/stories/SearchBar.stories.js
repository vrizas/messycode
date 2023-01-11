/* eslint-disable react/react-in-jsx-scope */
import SearchBar from '../components/SearchBar'

const stories = {
  title: 'SearchBar',
  component: SearchBar
}

export default stories

const Template = (args) => <SearchBar {...args} />

export const WithTypeBase = Template.bind({})
WithTypeBase.args = {
  type: 'default',
  search: () => {}
}

export const WithTypePrimary = Template.bind({})
WithTypePrimary.args = {
  type: 'primary',
  search: () => {}
}

export const WithTypeSecondary = Template.bind({})
WithTypeSecondary.args = {
  type: 'secondary',
  search: () => {}
}

export const WithTypeDanger = Template.bind({})
WithTypeDanger.args = {
  type: 'danger',
  search: () => {}
}
