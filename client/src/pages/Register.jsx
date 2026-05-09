import { useState } from "react";

import {
  Link,
  useNavigate,
} from "react-router-dom";

import toast from "react-hot-toast";

import { useTranslation } from "react-i18next";

import { api } from "../services/api";

function Register() {
  const navigate = useNavigate();

  const { t, i18n } =
    useTranslation();

  const [loading, setLoading] =
    useState(false);

  const [formData, setFormData] =
    useState({
      name: "",
      email: "",
      password: "",
    });

  const handleChange = (e) => {
    setFormData({
      ...formData,

      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  console.log("FORM DATA:", formData);

  try {
    setLoading(true);

    const response = await api.post(
      "/auth/register",
      {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      }
    );

    console.log(response.data);

    toast.success(
      t("registerSuccess")
    );

    navigate("/login");

  } catch (error) {
    console.error(
      "Register error:",
      error.response?.data || error
    );

    toast.error(
      error?.response?.data
        ?.message ||
        "Register failed"
    );

  } finally {
    setLoading(false);
  }
};

  const changeLanguage = (
    lang
  ) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
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

        <h1 className="auth-title">
          {t("createAccount")}
        </h1>

        <p className="auth-subtitle">
          {t(
            "registerSubtitle"
          )}
        </p>

        <form
          className="auth-form"
          onSubmit={
            handleSubmit
          }
        >
          <input
            type="text"
            name="name"
            placeholder={t(
              "enterName"
            )}
            className="auth-input"
            value={formData.name}
            onChange={
              handleChange
            }
            required
          />

          <input
            type="email"
            name="email"
            placeholder={t(
              "enterEmail"
            )}
            className="auth-input"
            value={formData.email}
            onChange={
              handleChange
            }
            required
          />

          <input
            type="password"
            name="password"
            placeholder={t(
              "enterPassword"
            )}
            className="auth-input"
            value={
              formData.password
            }
            onChange={
              handleChange
            }
            required
          />

          <button
            className="auth-button"
            type="submit"
          >
            {loading
              ? t(
                  "registering"
                )
              : t("register")}
          </button>
        </form>

        <div className="auth-footer">
          {t(
            "alreadyHaveAccount"
          )}{" "}
          <Link to="/login">
            <span>
              {t("login")}
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Register;