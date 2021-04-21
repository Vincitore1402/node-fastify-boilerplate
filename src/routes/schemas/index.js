const { get } = require('lodash/fp');

const universityCoreSchema = {
  type: 'object',
  properties: {
    name: { type: 'string' },
    country: { type: 'string' },
    city: { type: 'string' },
    subjects: {
      type: 'array',
      items: {
        item: { type: 'string' },
      },
      minItems: 1,
    },
  },
  additionalProperties: false,
};

const universityCreateSchema = {
  $id: 'db2cbd40-e941-4dbf-8848-662d74b7f0cb',
  ...universityCoreSchema,
  required: ['name', 'city', 'country', 'subjects'],
};

const universityPatchSchema = {
  $id: '1a9ee88d-7072-490f-a4f9-f887ad594c60',
  ...universityCoreSchema,
};

const schemas = [
  universityCreateSchema,
  universityPatchSchema,
];

module.exports = {
  Schemas: {
    UniversityCreateSchemaId: get('$id', universityCreateSchema),
    UniversityPatchSchemaId: get('$id', universityPatchSchema),
  },
  /**
   * Registers entities schemas
   * You can also set custom validator compiler & error formatter here if needed
   */
  registerSchemas: (app) => Promise.all([
    ...schemas.map((it) => app.addSchema(it)),
  ]),
};
