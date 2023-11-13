import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, incrementAsync, selectCount } from "./cartSlice";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { ShoppingBagIcon } from "@heroicons/react/20/solid";

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

export default function Cart() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(true);

  return (
    <div>
      <div className="flex space-x-2 mx-auto shadow-orange-200 border-b-2 bg-white rounded-b-none rounded-lg mt-4 max-w-7xl px-4 py-6 sm:px-6 lg:px-8 ">
        <h1 className="text-3xl font-bold font-serif tracking-tight text-blue-950 ">
          {" "}
          Cart{" "}
        </h1>
        <ShoppingBagIcon className="h-8 w-7 text-blue-900" aria-hidden="true" />
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
        <div className="mt-4 flex items-center justify-center">
          <a
            href="#"
            className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
          >
            Checkout
          </a>
        </div>
        <div className="mt-6  text-sm text-gray-500">
          {/* <p>
            Or
          </p>   */}
          <div className="mx-auto flex items-center mt-2 w-[40%]">
            <div className="border-b-2  border-gray-300 flex-grow"></div>
            <p className="mx-4 text-gray-900 font-medium">Or</p>
            <div className="border-b-2 border-gray-300 flex-grow"></div>
          </div>
          <div className="flex justify-center text-center mt-2">
            <Link to='/'>  
              <button
                type="button"
                className="font-medium text-indigo-600 hover:text-indigo-500 "
                onClick={() => setOpen(false)}
              >
                Continue Shopping
                <span aria-hidden="true"> &rarr;</span>
              </button>
            </Link>   
          </div>
        </div>
      </div>
    </div>
  );
}
