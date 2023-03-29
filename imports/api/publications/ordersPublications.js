import { Meteor } from 'meteor/meteor'
import { ordersCollection } from '../collections/orders'

Meteor.publish('order', function publishOrder(number) {

    if (!number) {
        throw new Meteor.Error('Order number cant be emtpy');
    }

    return ordersCollection.find({ number: number });
});