module.exports.relations = {
  belongsTo: {
    organization: {
      foreignKey: 'organizationId',
      localField: 'organization',
    }
  },
  hasMany: {
    user: {
      foreignKey: 'primaryRegion',
      localField: 'users',
    }
  },
}

module.exports.schema = {
  title: 'region',
  description: 'An organization\'s region',

  properties: {
    active: { default: true, type: 'boolean' },
    id: { type: 'string' },
    name: { type: 'string' },
    organizationId: { type: 'string' },
  },

  required: ['name', 'organizationId'],
}

module.exports.setThisRegion = function setThisRegion(regionRef) {
  this.thisRegion = regionRef
}

module.exports.thisRegion = null // the current Region Record
