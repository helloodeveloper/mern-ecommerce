import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteItemFromCartAsync,
  selectItems,
  updateCartAsync,
} from "../features/cart/cartSlice";
import { Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  selectLoggedInUser,
  updateUserAsync,
} from "../features/auth/authSlice";
import { useState } from "react";
import { createOrderAsync } from "../features/order/orderSlice";

import { HomeIcon, ShoppingBagIcon } from "@heroicons/react/20/solid";
import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/outline";
function Checkout() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const user = useSelector(selectLoggedInUser);
  const items = useSelector(selectItems);
  const totalAmount = items.reduce(
    (amount, item) => item.price * item.quantity + amount,
    0
  );
  const totalItems = items.reduce((total, item) => item.quantity + total, 0);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState("cash");
  const handleQuantity = (e, item) => {
    dispatch(updateCartAsync({ ...item, quantity: +e.target.value }));
  };
  const handleRemove = (e, id) => {
    dispatch(deleteItemFromCartAsync(id));
  };
  const handleAddress = (e) => {
    console.log(e.target.value);
    setSelectedAddress(user.addresses[e.target.value]);
  };
  const handlePayment = (e) => {
    console.log(e.target.value);
    setPaymentMethod(e.target.value);
  };
  const handleOrder = (e) => {
    const order = {
      items,
      totalAmount,
      totalItems,
      user,
      paymentMethod,
      selectedAddress,
    };
    dispatch(createOrderAsync(order));
    //TODO : Redirect to order-success page
    //TODO : clear cart after order
    //TODO : on server change the stock number of items
  };

  return (
    <>
      {!items.length && <Navigate to="/" replace={true}></Navigate>}

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-5">
          <div className="lg:col-span-3 mb-8">
            <form
              className="bg-white px-5 py-5  mt-12 rounded-lg rounded-b-none shadow-lg"
              onSubmit={handleSubmit((data) => {
                console.log(data);
                dispatch(
                  updateUserAsync({
                    ...user,
                    addresses: [...user.addresses, data],
                  })
                );
                reset();
              })}
            >
              <div className="space-y-12">
                <div className=" pb-5 py-6 mt-0 ">
                  <h2 className="-mt-4 text-3xl font-serif text-cyan-950 font-bold leading-7 ">
                    Personal Information
                  </h2>
                  <p className="mt-1 text-lg leading-6 text-gray-700">
                    Use a{" "}
                    <strong className="underline">permanent address,</strong>{" "}
                    where you can receive mail.
                  </p>
                  <p className=" text-sm leading-6 text-gray-700">
                    **Please note :{" "}
                    <strong>if already added an address,</strong> Choose the
                    same one down below.
                  </p>

                  <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 ">
                    <div className="sm:col-span-3">
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Full name
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          {...register("name", {
                            required: "name is required",
                          })}
                          id="name"
                          autoComplete="given-name"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-4">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Email address
                      </label>
                      <div className="mt-2">
                        <input
                          id="email"
                          type="email"
                          {...register("email", {
                            required: "email is required",
                          })}
                          autoComplete="email"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Phone
                      </label>
                      <div className="mt-2">
                        <input
                          id="phone"
                          {...register("phone", {
                            required: "phone is required",
                          })}
                          type="tel"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div className="col-span-full">
                      <label
                        htmlFor="street-address"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Street address
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          {...register("street", {
                            required: "street is required",
                          })}
                          id="street"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-2 sm:col-start-1">
                      <label
                        htmlFor="city"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        City
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          {...register("city", {
                            required: "city is required",
                          })}
                          id="city"
                          autoComplete="address-level2"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor="state"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        State / Province
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          {...register("state", {
                            required: "state is required",
                          })}
                          id="state"
                          autoComplete="address-level1"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor="pinCode"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        ZIP / Postal code
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          {...register("pinCode", {
                            required: "pinCode is required",
                          })}
                          id="pinCode"
                          autoComplete="postal-code"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-end gap-x-4 pb-5 pt-0">
                  <button
                    type="button"
                    className="rounded-md px-3 py-2 text-sm font-semibold text-black shadow-lg hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Reset
                  </button>
                  <button
                    type="submit"
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-lg hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Add Address
                  </button>
                </div>
              </div>
            </form>
            <div className=" bg-white px-5 py-6 mt-2 shadow-lg ">
              {user.addresses.length === 0 ? (
                <div className=" pb-4 py-4 ">
                  <h2 className="text-lg  font-bold leading-7 text-gray-900 -mt-4">
                    Please add an Addresses <strong>:</strong>
                  </h2>
                  <h3 className=" text-md leading-6 text-gray-600 pb-2">
                    Please add an address to checkout further
                  </h3>
                </div>
              ) : (
                <div className=" pb-4 py-4 ">
                  <h2 className="text-lg  font-bold leading-7 text-gray-900 -mt-4">
                    Addresses <strong>:</strong>
                  </h2>
                  <p className=" text-md leading-6 text-gray-600 pb-2">
                    Choose from Existing addresses
                  </p>
                  <ul role="list">
                    {user.addresses.map((address, index) => (
                      <li
                        key={index}
                        className="flex justify-between gap-x-6 px-5 py-5 border-solid border-2 border-gray-200"
                      >
                        <div className="flex gap-x-4 ">
                          <input
                            onChange={handleAddress}
                            name="address"
                            type="radio"
                            value={index}
                            className="h-3 w-3 border-gray-900 text-indigo-600 focus:ring-indigo-600 mt-1 hover:cursor-pointer"
                          />
                          <div className="inline min-w-0 flex-auto">
                            <p className="text-md font-bold leading-6 text-gray-900">
                              {address.name}
                            </p>
                            <p className="mt-0.5 trunc text-xs leading-5 text-gray-500">
                              {address.street}...
                            </p>
                            <p className="mt-0.5 truncate text-xs leading-5 text-gray-500">
                              {address.pinCode}
                            </p>
                          </div>
                        </div>
                        <div className="hidden sm:flex sm:flex-col sm:items-end">
                          <p className="text-sm leading-6 text-gray-900">
                            <strong>Phone :</strong> +{address.phone}
                          </p>
                          <strong className="text-sm font-medium leading-6 text-gray-500">
                            {address.city}
                          </strong>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
          <div className="lg:col-span-2">
            <div className="">
              <div className="bg-white rounded-t-lg shadow-lg  px-5 py-6 mt-12 ">
                <div className=" space-y-10">
                  <fieldset>
                    <legend className="text-md font-bold leading-6 text-gray-900">
                      Payment Methods
                    </legend>
                    <p className=" text-sm leading-6 text-gray-700">
                      **Please note :{" "}
                      <strong className="underline">
                        Select a payment method to proceed further:
                      </strong>{" "}
                    </p>
                    <div className="mt-3 space-y-6">
                      <div className="flex flex-col space-y-2 -mb-2">
                        <div className="flex items-center gap-x-3">
                          <input
                            id="cash"
                            name="payments"
                            onChange={handlePayment}
                            value="cash"
                            type="radio"
                            checked={paymentMethod === "cash"}
                            className="cursor-pointer h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                          />
                          <label
                            htmlFor="cash"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Cash
                          </label>
                        </div>
                        <div className="flex items-center gap-x-3">
                          <input
                            id="card"
                            onChange={handlePayment}
                            name="payments"
                            checked={paymentMethod === "card"}
                            value="card"
                            type="radio"
                            className="cursor-pointer h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                          />
                          <label
                            htmlFor="card"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Card Payment
                          </label>
                        </div>
                      </div>
                    </div>
                  </fieldset>
                </div>
              </div>

              <>
                {" "}
                {!items.length && <Navigate to="/" replace={true}></Navigate>}
                <div className="mt-4 flex justify-between  mx-auto shadow-lg  rounded-lg bg-white  max-w-7xl px-4 py-4  sm:px-6 lg:px-8 ">
                  <h1 className="flex mt-2 text-3xl font-bold font-serif tracking-tight text-blue-950 ">
                    {" "}
                    Cart{" "}
                    <ShoppingBagIcon
                      className="h-8 w-7 ml-2 text-blue-900"
                      aria-hidden="true"
                    />
                  </h1>
                  <Link to="/">
                    <div className="flex justify-center items-center px-3 py-3 cursor-pointer hover:bg-slate-100 rounded-lg">
                      <ArrowRightOnRectangleIcon
                        className="inline h-8 w-7 text-blue-900"
                        aria-hidden="true"
                      />
                      <p className="font-2xl ml-2 text-blue-900 font-serif font-semibold ">
                        Back
                      </p>
                    </div>
                  </Link>
                </div>
                <div className="py-2">
                  <div className="mt-0 shadow-md bg-white  mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                    <div className="flow-root">
                      <ul
                        role="list"
                        className="-my-6 divide-y divide-gray-200"
                      >
                        {items.map((item) => (
                          <li key={item.id} className="flex py-6">
                            <div className=" shadow-md h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                              <img
                                src={item.thumbnail}
                                alt={item.title}
                                className="h-full w-full object-cover object-center"
                              />
                            </div>

                            <div className="ml-4 flex flex-1 flex-col">
                              <div>
                                <div className="flex justify-between text-base font-medium text-gray-900">
                                  <h3>
                                    <a href={item.href}>{item.title}</a>
                                  </h3>
                                  <p className="ml-4">${item.price}</p>
                                </div>
                                <p className="mt-1 text-sm text-gray-500">
                                  {item.brand}
                                </p>
                              </div>
                              <div className="flex flex-1 items-end justify-between text-sm">
                                <div className="text-gray-500 space-x-2">
                                  <label
                                    htmlFor="quantity"
                                    className="inline text-sm font-medium leading-6 text-gray-900 justify-center "
                                  >
                                    Qty :
                                  </label>
                                  <select
                                    className="rounded-md cursor-pointer"
                                    onChange={(e) => handleQuantity(e, item)}
                                    value={item.quantity}
                                  >
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                  </select>
                                </div>

                                <div className="flex">
                                  <button
                                    onClick={(e) => handleRemove(e, item.id)}
                                    type="button"
                                    className="font-medium text-indigo-600 hover:text-indigo-500"
                                  >
                                    Remove
                                  </button>
                                </div>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="border-t shadow-md rounded-lg rounded-t-none bg-white mt-1 border-gray-200 px-4 py-4 sm:px-6 mx-auto max-w-7xl lg:px-8">
                    <div className="flex justify-between text-base font-lg font-semibold text-gray-900">
                      <p>Subtotal</p>
                      <p>$ {totalAmount}</p>
                    </div>
                    <div className="flex justify-between my-2 text-base font-medium text-gray-900">
                      <p>Total Items in Cart</p>
                      <p>{totalItems} items</p>
                    </div>
                    <p className="mt-0.5 text-sm text-gray-500">
                      Shipping and taxes calculated at checkout.
                    </p>
                    <div className="mt-4 flex items-center justify-center pb-4">
                      <Link
                        to="/checkout"
                        className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                      >
                        Check-Out
                      </Link>
                    </div>
                  </div>
                </div>
              </>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Checkout;
