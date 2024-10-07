// DonationForm.js
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const DonationForm = () => {
  const [selectedAmount, setSelectedAmount] = useState("");
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const handleAmountClick = (amount) => {
    setSelectedAmount(amount);
    setValue("amount", amount); // Set the amount in the form using useForm's setValue
  };

  const onSubmit = (data) => {
    console.log("Form submitted:", data);
    // Handle form submission (e.g., send data to the server)
  };

  return (
    <div className=" w-full p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Make a Donation</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Donation Amount Buttons */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Select Amount:
          </label>
          <div className="flex flex-wrap gap-4">
            {[500, 1000, 10000, 50000, 100000, 150000].map((amount) => (
              <button
                key={amount}
                type="button"
                onClick={() => handleAmountClick(amount)}
                className={`px-4 py-2 rounded border ${
                  selectedAmount === amount
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-700"
                } hover:bg-lime-400 focus:outline-none`}
              >
                NGN{amount}
              </button>
            ))}
          </div>
        </div>

        {/* Custom Amount Input */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Enter Amount:
          </label>
          <input
            type="number"
            {...register("amount", {
              required: "Amount is required",
              min: { value: 1, message: "Minimum amount is $1" },
            })}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter custom amount"
          />
          {errors.amount && (
            <p className="text-red-500 text-sm">{errors.amount.message}</p>
          )}
        </div>

        {/* Name Input */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Name:
          </label>
          <input
            type="text"
            {...register("name", { required: "Name is required" })}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your Name"
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
        </div>

        {/* Phone Input */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Phone:
          </label>
          <input
            type="tel"
            {...register("phone", {
              required: "Phone number is required",
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Invalid phone number (10 digits required)",
              },
            })}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your Phone Number"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone.message}</p>
          )}
        </div>

        {/* Email Input */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email:
          </label>
          <input
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email address",
              },
            })}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your Email"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full px-4 py-2 bg-lime-500 text-white rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          Donate Now
        </button>
      </form>
    </div>
  );
};

export default DonationForm;
