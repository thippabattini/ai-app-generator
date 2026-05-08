import { useTranslation } from "react-i18next";

function DashboardRenderer({ config }) {
  const { t } = useTranslation();

  return (
    <div className="dynamic-card">
      <h2 className="dynamic-title">
        {t(config.title)}
      </h2>

      <div className="dashboard-grid">
        {(config.cards || []).map(
          (card, index) => (
            <div
              key={index}
              className="dashboard-card"
            >
              <h3>
                {t(card.title)}
              </h3>

              <p>{card.value}</p>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default DashboardRenderer;