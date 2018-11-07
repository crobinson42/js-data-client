module.exports.relations = {
  hasMany: {
    user: {
      foreignKey: 'userAccountId',
      localField: 'users',
    },
  },
}

module.exports.schema = {
  title: 'userAccount',
  description: 'A single person\'s account that "user" associates to',

  properties: {
    id: { type: 'string' },
    email: { type: 'string' },
    emailVerified: { default: false, type: 'boolean' },
    password: { type: 'string' },
    phone: { type: 'string' },
    settings: { default: {}, type: 'object' },
  },

  required: ['email', 'password'],
}
