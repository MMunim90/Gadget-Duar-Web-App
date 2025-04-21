import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { Link, useRouteError } from "react-router";
import Button from "../../components/UI/Button";

const ErrorPage = () => {
  const error = useRouteError()
  return (
    <div>
      <Navbar></Navbar>
      <div className="text-center place-self-center my-10 py-24 min-h-[calc(100vh-166px)]">
        <h1 className="text-gray-900 font-thin text-7xl mb-8">
          {error?.status || 404}
        </h1>
        <p className="mb-5 text-xl font-bold text-gray-900 md:text-2xl">
          {error?.error?.message || 'Something Went Wrong!'}
        </p>

        <Link to='/'>
        <Button label='Go To Homepage'></Button>
        </Link>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ErrorPage;
