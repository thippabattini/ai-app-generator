const validateSchemaData = (
  schema,
  payload
) => {
  const errors = [];

  schema.fields.forEach(
    (field) => {
      const value =
        payload[field.name];

      if (
        field.required &&
        (
          value === undefined ||
          value === null ||
          value === ""
        )
      ) {
        errors.push(
          `${field.name} is required`
        );
      }

      if (
        field.type === "number" &&
        value &&
        isNaN(value)
      ) {
        errors.push(
          `${field.name} must be a number`
        );
      }

      if (
        field.type === "email" &&
        value &&
        !String(value).includes("@")
      ) {
        errors.push(
          `${field.name} must be valid`
        );
      }
    }
  );

  return {
    valid:
      errors.length === 0,

    errors,
  };
};

export default validateSchemaData;