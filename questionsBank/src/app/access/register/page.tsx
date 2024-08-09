"use client";
import React, { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import axios from "axios";

const UserRegistration: React.FC = () => {
  const [username, setUsername] = useState("");
  const [accessKey, setAccessKey] = useState<string | null>(null);

  const handleRegister = async () => {
    try {
      const response = await axios.post("/api/user", { username });

      if (response.data.success) {
        toast.success("User registered successfully!");
        await handleGetAccessKey();
      } else {
        toast.error(`Registration failed: ${response.data.message}`);
      }
    } catch (error) {
      toast.error("An error occurred during registration.");
    }
  };

  const handleGetAccessKey = async () => {
    try {
      const response = await axios.post(`/api/validate/${username}`);

      if (response.data.isValid) {
        toast.success("Access key retrieved successfully!");
        setAccessKey(response.data.accesskey);
      } else {
        toast.error("Invalid username.");
      }
    } catch (error) {
      toast.error("An error occurred while retrieving the access key.");
    }
  };

  const handleCopyAccessKey = () => {
    if (accessKey) {
      navigator.clipboard.writeText(accessKey);
      toast.success("Access key copied to clipboard!");
    }
  };

  return (
    <div className="container h-screen mx-auto flex flex-col items-center justify-center">
      <div>
        <h1 className="text-2xl font-bold mb-4 text-slate-400">
          User Registration
        </h1>
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-sm font-medium mb-2 text-white"
          >
            Username
          </label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="block w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <button
          onClick={handleRegister}
          className="w-full py-2 bg-blue-500 text-white rounded"
        >
          Register
        </button>

        {accessKey && (
          <div className="mt-4">
            <h2 className="text-xl font-semibold mb-2">Access Key</h2>
            <div className="flex items-center">
              <input
                type="text"
                value={accessKey}
                readOnly
                className="flex-1 p-2 border border-gray-300 rounded"
              />
              <button
                onClick={handleCopyAccessKey}
                className="ml-2 py-2 px-4 bg-gray-300 rounded"
              >
                Copy
              </button>
            </div>
          </div>
        )}
        <Toaster position="top-center" />
      </div>
    </div>
  );
};

export default UserRegistration;
