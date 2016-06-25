import { Mongo } from 'meteor/mongo'

Meteor.methods({
  'bins.insert': function() {
    console.log('inserted bin...')
    return Bins.insert({
      createdAt: new Date(),
      content: '',
      ownerId: this.userId,
      sharedWith: [],
    })
  }
})

export const Bins = new Mongo.Collection('bins')
