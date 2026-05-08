const schemaConfig = [
  {
    table: "customers",

    fields: [
      {
        name: "name",
        type: "string",
        required: true,
      },

      {
        name: "email",
        type: "email",
        required: true,
      },

      {
        name: "company",
        type: "string",
        required: false,
      },
    ],
  },
];

export default schemaConfig;