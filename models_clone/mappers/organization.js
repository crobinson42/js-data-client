module.exports.relations = {
  hasMany: {
    user: {
      foreignKey: 'organizationId',
      localField: 'users',
    },
    region: {
      foreignKey: 'organizationId',
      localField: 'regions',
    },
  },
}

module.exports.schema = {
  title: 'organization',
  description: 'An Organization',

  properties: {
    active: { default: true, type: 'boolean' },
    id: { type: 'string' },
    logoUrl: { type: 'string' },
    name: { type: 'string' },
  },

  required: ['name'],
}

module.exports.setThisOrganization = function setThisOrganization(organizationRef) {
  this.thisOrganization = organizationRef
}

module.exports.thisOrganization = null // Record when authenticated
