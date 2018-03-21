import React, { Component } from 'react';
import { Modal, Form, Input } from 'antd';
const FormItem = Form.Item;
class UserEditModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    }
  }
  showModelHandler = (e) => {
      if(e) e.stopPropagation();
      this.setState({
          visible: true
      })
  }
  render () {
    return (
    <span>
      <span onClick={this.showModelHandler}>{ children }</span>
      <Modal
        title="Edit User"
        visible={this.state.visible}>
        <Form horizontal>
          <FormItem label="Name">
          </FormItem>
        </Form>
      </Modal>
    </span>
    )
  }
  
}

export default Form.create()(UserEditModal)
