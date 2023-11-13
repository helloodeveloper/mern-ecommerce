import { Link } from "react-router-dom";

import { HomeIcon, ShoppingBagIcon } from "@heroicons/react/20/solid";
import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/outline";

const products = [
  {
    id: 1,
    name: "Throwback Hip Bag",
    href: "#",
    color: "Salmon",
    price: "$90.00",
    quantity: 1,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg",
    imageAlt:
      "Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.",
  },
  {
    id: 2,
    name: "Medium Stuff Satchel",
    href: "#",
    color: "Blue",
    price: "$32.00",
    quantity: 1,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg",
    imageAlt:
      "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
  },
  // More products...
];

const addresses = [
  {
    name: "John wick",
    street: "11th Main",
    city: "Delhi",
    pinCode: 110001,
    state: "Delhi",
    phone: 12312321331,
  },
  {
    name: "John Doe",
    street: "15th Main",
    city: "Bangalore",
    pinCode: 560034,
    state: "Karnataka",
    phone: 123123123,
  },
];
function Checkout() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-5">
        <div className="lg:col-span-3 mb-8">
          <form className="bg-white px-5 py-5  mt-12 rounded-lg rounded-b-none shadow-lg">
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
                  <strong >if already added an address,</strong>{" "}
                  Choose the same one down below.
                </p>

                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 ">
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      First name
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Last name
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="last-name"
                        id="last-name"
                        autoComplete="family-name"
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
                        name="email"
                        type="email"
                        autoComplete="email"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label
                      htmlFor="country"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Country
                    </label>
                    <div className="mt-2">
                      <select
                        id="country"
                        name="country"
                        autoComplete="country-name"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                      >
                        <option>United States</option>
                        <option>Canada</option>
                        <option>Mexico</option>
                      </select>
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
                        name="street-address"
                        id="street-address"
                        autoComplete="street-address"
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
                        name="city"
                        id="city"
                        autoComplete="address-level2"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="region"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      State / Province
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="region"
                        id="region"
                        autoComplete="address-level1"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="postal-code"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      ZIP / Postal code
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="postal-code"
                        id="postal-code"
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
          <div className=" pb-4 py-4 ">
                <h2 className="text-lg  font-bold leading-7 text-gray-900 -mt-4">
                  Addresses <strong>:</strong>
                </h2>
                <p className=" text-md leading-6 text-gray-600 pb-2">
                  Choose from Existing addresses
                </p>
                <ul role="list">
                  {addresses.map((address) => (
                    <li
                      key={address.email}
                      className="flex justify-between gap-x-6 px-5 py-5 border-2 border-gray-50 shadow-md mb-1.5"
                    >
                      <div className="flex gap-x-4 ">
                        <input
                          
                          name="address"
                          type="radio"
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
          </div>
          <div className="bg-white rounded-lg rounded-t-none shadow-lg  px-5 py-6 mt-2 ">
          <div className=" space-y-10">
                  <fieldset>
                    <legend className="text-md font-bold leading-6 text-gray-900">
                      Payment Methods
                    </legend>
                    <p className=" text-sm leading-6 text-gray-700">
                        **Please note :{" "}
                    <strong className="underline">Select a payment method to proceed further:</strong>{" "}
                    </p>
                    <div className="mt-3 space-y-6">
                      <div className="flex flex-col space-y-2 -mb-2">
                        <div className="flex items-center gap-x-3">
                          <input
                            id="cash"
                            name="payments"
                            type="radio"
                            className="h-4 w-4 border-gray-700 text-indigo-600 focus:ring-indigo-600 hover:cursor-pointer"
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
                            name="payments"
                            type="radio"
                            className="h-4 w-4 border-gray-700 text-indigo-600 focus:ring-indigo-600 hover:cursor-pointer"
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
        </div>
        <div className="lg:col-span-2">
          <div>
            <div className="mt-12 flex justify-between  mx-auto shadow-orange-200 border-b-2 bg-white rounded-b-none rounded-lg max-w-7xl px-4 py-4  sm:px-6 lg:px-8 ">
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
            <div className="mt-1 shadow-md bg-white  mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
              <div className="flow-root">
                <ul role="list" className="-my-6 divide-y divide-gray-200">
                  {products.map((product) => (
                    <li key={product.id} className="flex py-6">
                      <div className=" shadow-md h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <img
                          src={product.imageSrc}
                          alt={product.imageAlt}
                          className="h-full w-full object-cover object-center"
                        />
                      </div>

                      <div className="ml-4 flex flex-1 flex-col">
                        <div>
                          <div className="flex justify-between text-base font-medium text-gray-900">
                            <h3>
                              <a href={product.href}>{product.name}</a>
                            </h3>
                            <p className="ml-4">{product.price}</p>
                          </div>
                          <p className="mt-1 text-sm text-gray-500">
                            {product.color}
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
                            <select className="rounded-md cursor-pointer">
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                            </select>
                          </div>

                          <div className="flex">
                            <button
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
                <p>$262.00</p>
              </div>
              <p className="mt-0.5 text-sm text-gray-500">
                Shipping and taxes calculated at checkout.
              </p>
              <div className="mt-4 pb-2 flex items-center justify-center">
                <a
                  href="#"
                  className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                >
                  Pay and Order
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
