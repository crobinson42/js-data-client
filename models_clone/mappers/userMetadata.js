module.exports.relations = {
  belongsTo: {
    user: {
      foreignKey: 'userId',
      localField: 'user',
    },
  },
  hasOne: {
    region: {
      foreignKey: 'defaultRegionId',
      localField: 'defaultRegion'
    }
  },
}

module.exports.schema = {
  title: 'userMetadata',
  description:
    'A single users metadata info ie: regions, security groups, settings, etc.',

  properties: {
    id: { type: 'string' },
    defaultRegionId: { type: 'string' },
    regionIds: { default: [], type: 'array', items: { type: 'string' } },
    securityGroups: { default: [], type: 'array', items: { type: 'string' } },
    userId: { type: 'string' },
  },

  required: ['userId'],
}
