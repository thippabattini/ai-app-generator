const appConfig = [
  {
    type: "dashboard",

    title: "businessOverview",

    cards: [
      {
        title: "users",
        value: "12,450",
      },

      {
        title: "revenue",
        value: "$48K",
      },

      {
        title: "growth",
        value: "+18%",
      },
    ],
  },

  {
    type: "form",

    title: "customerForm",

    fields: [
      {
        type: "text",
        label: "customerName",
      },

      {
        type: "email",
        label: "emailAddress",
      },

      {
        type: "text",
        label: "company",
      },
    ],
  },

  {
    type: "table",

    title: "customerRecords",

    columns: [
      "name",
      "email",
      "status",
    ],

    rows: [
      {
        name: "Lavanya",
        email:
          "lavanya@gmail.com",
        status: "Active",
      },

      {
        name: "Rash",
        email:
          "Rash@gmail.com",
        status: "Pending",
      },
    ],
  },

  {
    type: "table",

    title: "Imported Data",

    columns: [
      "name",
      "email",
      "role",
    ],

    rows: [
      {
        name: "Lavanya",
        email:
          "lavanya@gmail.com",
        role: "Admin",
      },

      {
        name: "Lucy",
        email:
          "lucy@gmail.com",
        role: "Manager",
      },
    ],
  },
];

export default appConfig;