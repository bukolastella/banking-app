import { useState } from "react";

const useInput = (url) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const loginHandler = async (event) => {
    event.preventDefault();
    setLoading(true);
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();

    if (!response.ok) {
      setError(data.error.message);
      setTimeout(() => {
        if (!error) {
          setError(false);
        }
      }, 3000);
    }
    setLoading(false);
  };
  return {
    password,
    error,
    email,
    loading,
    setError,
    loginHandler,
    setEmail,
    setPassword,
  };
};

export default useInput;
