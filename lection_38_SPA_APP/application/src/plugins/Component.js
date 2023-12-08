export default class Component {
  props = {};


  constructor(props) {
    this.props = { ...props };
  }


  replaceSlot(template, replacers) {
    replacers.forEach(item => {
      const slot = template.querySelector(item.selector);

      if (slot) {
        slot.replaceWith(item.replacer());
      }
    })
  }


  render() {
    throw new Error('Render should present');
  }
}