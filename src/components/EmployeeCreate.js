import React, { Component } from 'react';
import { Card, CardSection, Input, Button } from './common';

export default class EmployeeCreate extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Name"
            placeholder="Jane"
          />
        </CardSection>

        <CardSection>
          <Input
            name="Phone"
            placeholder="555-555-5555"
          />
        </CardSection>

        <CardSection>

        </CardSection>

        <CardSection>
          <Button>Create</Button>
        </CardSection>
      </Card>
    );
  }
}
