import Link from "next/link";
import Image from "next/image";

export default async function Home() {
  const url = await fetch('https://jsonplaceholder.typicode.com/users');
  const response = await url.json();
  console.log(response);

  return (
    <div className="bg-pink-200 px-4 py-10">
      <h1 className="text-3xl bg-pink-500 text-blue-900 font-extrabold font-serif hover:text-yellow-500 transition transform hover:scale-105 hover:shadow-lg shadow-pink-800 text-center mb-8">
        USERS
      </h1>

      {/* Grid layout for users */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center items-center">
        {/* Mapping through the user details */}
        {response.map((userdata: any, index: number) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center bg-pink-600 p-5 rounded-3xl w-3/5 shadow-lg transition transform hover:scale-105 hover:shadow-xl"
            >
              {/* User Image */}
              <Image
                src="/images/user.jpg"
                alt="user"
                width={300}
                height={200}
                className="rounded-lg mb-4 w-full h-auto object-cover"
              />

              {/* User Name */}
              <Link
                href={`/${userdata.id}`}
                className="text-lg font-extrabold text-white bg-red-950 w-full text-center py-2 rounded-full transition hover:bg-pink-800 hover:shadow-md hover:shadow-pink-950"
              >
                {userdata.name}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
