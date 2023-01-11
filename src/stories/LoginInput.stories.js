/* eslint-disable react/react-in-jsx-scope */
import LoginInput from '../components/LoginInput'

const stories = {
  title: 'LoginInput',
  component: LoginInput
}

export default stories

const Template = (args) => <LoginInput {...args} />

export const WithSizeBase = Template.bind({})
WithSizeBase.args = {
  size: 'base',
  login: () => {},
  openRegisterModal: () => {},
  closeModal: () => {}
}

export const WithSizeSmall = Template.bind({})
WithSizeSmall.args = {
  size: 'small',
  login: () => {},
  openRegisterModal: () => {},
  closeModal: () => {}
}

export const WithSizeMedium = Template.bind({})
WithSizeMedium.args = {
  size: 'medium',
  login: () => {},
  openRegisterModal: () => {},
  closeModal: () => {}
}

export const WithSizeLarge = Template.bind({})
WithSizeLarge.args = {
  size: 'large',
  login: () => {},
  openRegisterModal: () => {},
  closeModal: () => {}
}

export const WithSizeExtraLarge = Template.bind({})
WithSizeExtraLarge.args = {
  size: 'extraLarge',
  login: () => {},
  openRegisterModal: () => {},
  closeModal: () => {}
}
