import React, { useContext } from "react";
import { useLoaderData, useParams } from "react-router";
import Button from "../../components/UI/Button";
import { MdBookmarkAdd, MdShoppingCartCheckout } from "react-icons/md";
import { addCart, addFavourite, getCart } from "../../utils";
import { CartContext } from "../../Providers/Contexts";

const PhoneDetails = () => {
    const {setCart} = useContext(CartContext)
  const data = useLoaderData();
  const { detail } = useParams();
  const singlePhone = data.find((phone) => phone.id === parseInt(detail));
  const {
    name,
    image,
    brand,
    model,
    price,
    description,
    storage,
    camera_info,
  } = singlePhone || {};

  const handleFavorite = () => {
    addFavourite(singlePhone)
  }

  const handleCart = () => {
    //save to localStorage for persistency
    addCart(singlePhone);
    // update state for instant ui change
    setCart(getCart())
  }
  return (
    <div className="w-full py-12">
      <img
        className="w-full mx-auto md:w-[750px] mb-8 rounded-2xl"
        src={image}
        alt=""
      />

      {/* title and buttons */}
      <div className="flex justify-between">
        <h1 className="text-6xl font-thin mb-8">{name}</h1>
        <div className="space-x-4">
          <Button onClick={handleCart} label={<MdShoppingCartCheckout />}></Button>
          <Button onClick={handleFavorite} label={<MdBookmarkAdd />}></Button>
        </div>
      </div>

      {/* details */}
      <div>
        <h1 className="text-4xl font-extralight mb-8">Details:</h1>
        <div className="flex flex-col gap-5">
          <p>
            <b>Brand : </b> {brand}
          </p>
          <p>
            <b>Model : </b> {model}
          </p>
          <p>
            <b>Storage : </b> {storage}
          </p>
          <p>
            <b>Price : </b> {price} $
          </p>
          <p>
            <b>Camera : </b> {camera_info}
          </p>
          <p>
            <b>Description : </b> {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PhoneDetails;
