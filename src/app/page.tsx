import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gray-100 h-screen items-center justify-center sm:flex sm:items-center sm:justify-center">
      <div className="text-3xl sm:w-1/2 px-10">
        <img
          src="/facebook.svg" 
          width={300}
          height={100}
          alt="Facebook Login"
        />
        <p className="ml-8 -mt-3 mb-8">
          Facebook helps you connect and share with the people in your life.
        </p>
      </div>
      <div className="bg-white flex flex-col p-5 rounded-md sm:w-1/3">
        <input
          className="my-2 border border-1 border-gray-100 p-3 focus:outline-1 outline-blue-700"
          type="text"
          placeholder="Email address or phone number"
        />
        <input
          className="my-2 border border-1 border-gray-100 p-3 focus:outline-1 outline-blue-700"
          type="password"
          placeholder="password"
        />
        <button className="bg-blue-600 my-2 py-2 text-lg font-bold text-white rounded-md hover:bg-blue-700">
          Log in
        </button>
        <p className="text-blue-600 text-sm my-2 text-center hover:underline cursor-pointer">
          Forgotten password?
        </p>
        <span className="my-2">
          <hr />
        </span>
        <button className="bg-green-500 my-2 py-2 px-2 text-lg font-bold text-white rounded-md hover:bg-green-600 w-fit mx-auto">
          Create new account
        </button>
      </div>
    </div>
  );
}
