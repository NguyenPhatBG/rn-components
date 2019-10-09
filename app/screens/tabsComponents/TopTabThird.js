import React, { Component } from 'react';
import { Text } from 'react-native';
import { PickerCheckBox } from '../../components/checkbox';

const items = [
    {
      itemKey: 1,
      itemDescription:'Item 1'
    },
    {
      itemKey: 2,
      itemDescription:'Item 2'
      },
    {
      itemKey: 3,
      itemDescription:'Item 3'
    }
];

export default class TopTabThird extends Component {
    handleConfirm(pItems){
        console.log('pItems =>', pItems);
    }

    render() {
        return (
            <PickerCheckBox
                data={items}
                headerComponent={<Text style={{fontSize:25}} >items</Text>}
                OnConfirm={(pItems) => this.handleConfirm(pItems)}
                ConfirmButtonTitle='OK'
                DescriptionField='itemDescription'
                KeyField='itemKey'
                placeholder='select some items'
                arrowColor='#FFD740'
                arrowSize={10}
                placeholderSelectedItems ='$count selected item(s)'
            />
        );
    }
}