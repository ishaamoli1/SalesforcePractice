import { LightningElement } from 'lwc';

export default class SIEHousehold extends LightningElement {

    options = [
        {'label': 'Pre-arreras', 'value': 'option1'},
        {'label': 'Collections', 'value': 'option2'},
        {'label': 'Recoveries', 'value': 'option3'},
    ];
}