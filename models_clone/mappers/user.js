module.exports.env = {
  server: {
    async afterCreate(props, opts, result) {
      await this.datastore.UserMetadata.create({
        userId: props.id,
      })

      return result
    },
  },
}

module.exports.relations = {
  belongsTo: {
    organization: {
      foreignKey: 'organizationId',
      localField: 'organization',
    },
    userAccount: {
      foreignKey: 'userAccountId',
      localField: 'userAccount',
    },
  },
  hasOne: {
    userMetadata: {
      foreignKey: 'userId',
      localField: 'metadata',
    },
  },
}

module.exports.schema = {
  title: 'user',
  description: 'A User for an organization',

  properties: {
    active: { default: true, type: 'boolean' },
    id: { type: 'string' },
    firstName: { type: 'string' },
    lastName: { type: 'string' },
    organizationId: { type: 'string' },
    title: { type: 'string' },
    userAccountId: { type: 'string' },
  },

  required: ['firstName', 'lastName', 'organizationId', 'userAccountId'],
}

module.exports.thisUser = null // user Record when authenticated

module.exports.setThisUser = function setThisUser(userRef) {
  this.thisUser = userRef
}
