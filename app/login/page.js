"use client";
import FieldInput from "@/components/auth/fieldInput";
import { authformFields } from "@/config/authFormField";
import { useUserData } from "@/context/authContex";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LogIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [focusedField, setFocusedField] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();
  const { saveUserData } = useUserData();

  const handelOnChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const error = await res.json();
        setErrorMessage(error.message);
        setLoading(false);
        throw new Error(error.message);
      }

      const data = await res.json();
      saveUserData(data);
      router.push(
        data.role === "client" ? "/client/dashboard" : "/admin/dashboard",
      );
    } catch (error) {
      console.log("failed to login");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col 2xl:justify-center items-center px-4 py-12">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="px-8 py-8">
          <div className="mb-7">
            <h2 className="text-2xl font-extrabold text-gray-500 mb-1">
              Login to Your Account
            </h2>

            {/* show error message */}
            {errorMessage && (
              <p className="text-xl font-extrabold text-red-500 mb-1">
                {errorMessage}
              </p>
            )}
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {/* Email */}
            <FieldInput
              field={authformFields.get("email")}
              isFocused={focusedField === "email"}
              onFocus={() => setFocusedField("email")}
              onBlur={() => setFocusedField("")}
              onChange={(event) => handelOnChange(event)}
            />

            {/* Password */}
            <FieldInput
              field={authformFields.get("password")}
              isFocused={focusedField === "password"}
              onFocus={() => setFocusedField("password")}
              onBlur={() => setFocusedField("")}
              onChange={(event) => handelOnChange(event)}
              showPassword={showPassword}
              setShowPassword={setShowPassword}
            />

            {/* Submit button*/}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 rounded-xl text-sm font-semibold tracking-wide transition-all duration-200 flex items-center justify-center gap-2 bg-red-700 text-white hover:bg-red-800 hover:-translate-y-0.5 active:translate-y-0 shadow-lg shadow-red-100 disabled:opacity-70 cursor-pointer disabled:cursor-not-allowed disabled:translate-y-0"
            >
              {loading ? (
                <>
                  <svg
                    className="w-4 h-4 animate-spin"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4z"
                    />
                  </svg>
                  Login...
                </>
              ) : (
                <>
                  Log In
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                    />
                  </svg>
                </>
              )}
            </button>
          </form>

          {/* go to sign up page */}
          <div className="text-gray-700 text-center mt-4">
            {"Don't have an account?"}
            <span className="text-blue-500 hover:text-blue-700 font-bold hover:font-extrabold">
              <Link href={"/signup"}> Sign up</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
