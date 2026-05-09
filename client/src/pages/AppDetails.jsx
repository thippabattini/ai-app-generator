import { useEffect, useState } from "react";

import { useTranslation } from "react-i18next";

import ComponentRenderer from "../components/dynamic/ComponentRenderer";

import appConfig from "../mock/appConfig";

function AppDetails() {
  const { t, i18n } = useTranslation();

  const [loading, setLoading] =
    useState(true);

  const configError =
    !appConfig ||
    !Array.isArray(appConfig);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  if (loading) {
    return (
      <div className="runtime-loading">
        {t("loadingRuntime")}
      </div>
    );
  }

  if (configError) {
    return (
      <div className="runtime-error">
        {t("invalidRuntime")}
      </div>
    );
  }

  return (
    <div className="runtime-page">
      <div className="runtime-topbar">
        <div>
          <h1>{t("runtimeTitle")}</h1>

          <p>{t("runtimeSubtitle")}</p>
        </div>

        <div className="language-switcher">
          <button
            onClick={() =>
              changeLanguage("en")
            }
          >
            EN
          </button>

          <button
            onClick={() =>
              changeLanguage("hi")
            }
          >
            हिंदी
          </button>

          <button
            onClick={() =>
              changeLanguage("te")
            }
          >
            తెలుగు
          </button>

          <button
            onClick={() =>
              changeLanguage("es")
            }
          >
            ES
          </button>

          <button
            onClick={() =>
              changeLanguage("de")
            }
          >
            DE
          </button>
        </div>
      </div>

      <div className="runtime-content">
        {appConfig.length === 0 ? (
          <div className="runtime-empty">
            {t("noComponents")}
          </div>
        ) : (
          appConfig.map(
            (component, index) => (
              <ComponentRenderer
                key={index}
                component={component}
              />
            )
          )
        )}
      </div>
    </div>
  );
}

export default AppDetails;