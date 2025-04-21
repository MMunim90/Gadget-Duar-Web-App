import React, { useEffect, useState } from "react";
import PhoneCard from "../../components/PhoneCard/PhoneCard";
import { getCart, removeCart } from "../../utils";
import EmptyState from "../../components/UI/EmptyState";

const Cart = () => {
  const [displayPhones, setDisplayPhones] = useState([]);

  useEffect(() => {
    const savedPhones = getCart();
    setDisplayPhones(savedPhones);
  }, []);

  const handleDelete = (id) => {
    removeCart(id);
    setDisplayPhones(getCart());
  };

  if (displayPhones.length < 1) return <EmptyState></EmptyState>;
  return (
    <div className="py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
        {displayPhones.map((phone) => (
          <PhoneCard
            key={phone.id}
            phone={phone}
            deletable={true}
            handleDelete={handleDelete}
          ></PhoneCard>
        ))}
      </div>
    </div>
  );
};

export default Cart;
