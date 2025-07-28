/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Divider } from "@nextui-org/react";
import GoogleLoginBtn from "../components/page/shared/GoogleLoginBtn";
import nexiosInstance from "@/config/nexios.config";

const LoginPage = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const email = (form.email as HTMLInputElement).value;
    const password = (form.password as HTMLInputElement).value;
    const payload = {
      email,
      password,
    };

    const { data }: any = await nexiosInstance.post("/auth/login", payload, {
      cache: "no-store",
      next: {},
    });
    console.log(data);
  };
  return (
    <>
      <div className="min-h-screen flex justify-center items-center bg-gray-100">
        <div>
          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-t-lg shadow-md w-96"
          >
            <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

            <div className="mb-4">
              <label htmlFor="email" className="block mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="password" className="block mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                required
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
            >
              Login
            </button>
          </form>
          <div className="bg-white p-6 rounded-b-lg shadow-md w-96 ">
            <Divider />
            <p>OR</p>
            <GoogleLoginBtn />
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;

/**
 * Auth - Custom Email Password - Role - USER, ADMIN -> AccessToken
 * Auth - Social Login - Google : Role - USER X
 *
 * Social Login -> Google -> email, name, profile picture -> Amader DataBase - User Register / User Login -> Role - USER -> accessToken
 */
