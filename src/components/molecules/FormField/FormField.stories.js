import FormField from './FormField';

export default {
  title: 'Components/Molecules/FormField',
  component: FormField,
};

const Template = (args) => <FormField {...args} name="story" id="story" />;

export const Default = Template.bind({});
Default.args = {
  label: 'login',
};
