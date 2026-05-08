import { useTranslation } from "react-i18next";

function UnknownComponent({ type }) {
  const { t } = useTranslation();

  return (
    <div
      style={{
        padding: "20px",
        borderRadius: "16px",
        background:
          "rgba(239, 68, 68, 0.12)",

        border:
          "1px solid rgba(239, 68, 68, 0.3)",

        color: "#fca5a5",
        marginBottom: "16px",
      }}
    >
      {t("unknownComponent")}:
      <strong> {type}</strong>
    </div>
  );
}

export default UnknownComponent;