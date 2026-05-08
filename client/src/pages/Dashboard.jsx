import {
  useEffect,
  useState,
} from "react";

import { Link } from "react-router-dom";

import { getApps } from "../services/appService";

function Dashboard() {
  const [apps, setApps] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const fetchApps = async () => {
    try {
      const data = await getApps();

      setApps(data || []);
    } catch (error) {
      console.error(
        "Fetch apps error:",
        error
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const loadApps =
      async () => {
        await fetchApps();
      };

    loadApps();
  }, []);

  return (
    <div className="dashboard-page">
      <div className="dashboard-header">
        <div>
          <h1>Your AI Apps</h1>

          <p>
            Manage dynamic runtime
            applications
          </p>
        </div>
      </div>

      {loading ? (
        <div className="empty-state">
          Loading apps...
        </div>
      ) : apps.length === 0 ? (
        <div className="empty-state">
          No apps found
        </div>
      ) : (
        <div className="apps-grid">
          {apps.map(
            (app, index) => (
              <Link
                key={
                  app._id ||
                  app.id ||
                  index
                }
                to={`/apps/${
                  app._id ||
                  app.id
                }`}
                className="app-card"
              >
                <h2>{app.name}</h2>

                <p>
                  {app.description}
                </p>

                <span>
                  Open Runtime →
                </span>
              </Link>
            )
          )}
        </div>
      )}
    </div>
  );
}

export default Dashboard;