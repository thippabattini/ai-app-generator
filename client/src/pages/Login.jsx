import { useState } from "react";

import {
  Link,
  useNavigate,
} from "react-router-dom";

import toast from "react-hot-toast";

import { useTranslation } from "react-i18next";

import { api } from "../services/api";

function Login() {
  const navigate = useNavigate();

  const { t, i18n } =
    useTranslation();

  const [formData, setFormData] =
    useState({
      email: "",
      password: "",
    });

  const [loading, setLoading] =
    useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,

      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = async (
    e
  ) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response =
        await api.post(
          "/auth/login",
          formData
        );

      const data =
        response.data;

      localStorage.setItem(
        "token",
        data.token
      );

      localStorage.setItem(
        "user",
        JSON.stringify(data.user)
      );

      toast.success(
        t("loginSuccess")
      );

      navigate("/dashboard");
    } catch (error) {
      console.error(
        "Login error:",
        error
      );

      toast.error(
        error?.response?.data
          ?.message ||
          t("loginFailed")
      );
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin =
    () => {
      const mockUser = {
        name: "Google User",

        email:
          "googleuser@gmail.com",
      };

      localStorage.setItem(
        "token",
        "mock-google-token"
      );

      localStorage.setItem(
        "user",
        JSON.stringify(mockUser)
      );

      toast.success(
        t(
          "googleLoginSuccess"
        )
      );

      navigate("/dashboard");
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
          {t("welcomeBack")}
        </h1>

        <p className="auth-subtitle">
          {t("loginSubtitle")}
        </p>

        <form
          onSubmit={handleSubmit}
          className="auth-form"
        >
          <input
            type="email"
            name="email"
            placeholder={t(
              "enterEmail"
            )}
            value={formData.email}
            onChange={
              handleChange
            }
            required
            className="auth-input"
          />

          <input
            type="password"
            name="password"
            placeholder={t(
              "enterPassword"
            )}
            value={
              formData.password
            }
            onChange={
              handleChange
            }
            required
            className="auth-input"
          />

          <button
            type="submit"
            className="auth-button"
          >
            {loading
              ? t("loggingIn")
              : t("login")}
          </button>

          <button
            type="button"
            className="google-button"
            onClick={
              handleGoogleLogin
            }
          >
            {t(
              "continueGoogle"
            )}
          </button>
        </form>

        <p className="auth-footer">
          {t(
            "dontHaveAccount"
          )}{" "}
          <Link to="/register">
            {t("register")}
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;