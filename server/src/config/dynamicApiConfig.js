const dynamicApiConfig = [
  {
    endpoint: "/customers",

    method: "GET",

    response: [
      {
        id: 1,
        name: "Lavanya",
        role: "Full Stack Developer",
      },

      {
        id: 2,
        name: "Lucy",
        role: "Backend Engineer",
      },
    ],
  },

  {
    endpoint: "/analytics",

    method: "GET",

    response: {
      users: 12450,
      revenue: "$48K",
      growth: "+18%",
    },
  },
];

export default dynamicApiConfig;