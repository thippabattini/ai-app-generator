import { useTranslation } from "react-i18next";

function FormRenderer({ config }) {
  const { t } = useTranslation();

  if (!config?.fields) {
    return (
      <div>
        No form fields configured
      </div>
    );
  }

  return (
    <div className="dynamic-card">
      <h2 className="dynamic-title">
        {t(config.title)}
      </h2>

      <div className="dynamic-form">
        {config.fields.map(
          (field, index) => (
            <input
              key={index}
              type={field.type || "text"}
              placeholder={
                t(field.label)
              }
              className="dynamic-input"
            />
          )
        )}
      </div>
    </div>
  );
}

export default FormRenderer;