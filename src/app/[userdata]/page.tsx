const DynamicUser = async (props: any) => {
  console.log(props);
  const url = await fetch(
    `https://jsonplaceholder.typicode.com/users/${props.params.userdata}`
  );
  const response = await url.json();
  console.log("Single User", response);

  return (
    <div className="grid items-center justify-center bg-pink-600 mx-4 sm:mx-16 md:mx-32 lg:mx-64 xl:mx-96 my-16 px-6 py-8 sm:py-12 md:py-16 rounded-[30px] sm:rounded-[40px] md:rounded-[50px] gap-4">
      <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl text-red-950 hover:text-green-900 text-center">
        User Details
      </h1>

      <h2 className="text-lg sm:text-2xl md:text-3xl font-serif font-medium text-white">
        Id: {response.id}
      </h2>
      <h2 className="text-xl sm:text-2xl md:text-3xl font-serif font-medium text-white">
        Name: {response.name}
      </h2>
      <h2 className="text-xl sm:text-2xl md:text-3xl font-serif font-medium text-white">
        Username: {response.username}
      </h2>
      <h2 className="text-xl sm:text-2xl md:text-3xl font-serif font-medium text-white">
        Email: {response.email}
      </h2>
      <h2 className="text-xl sm:text-2xl md:text-3xl font-serif font-medium text-white">
        Address:
        {response.address.street} , 
        {response.address.suite} ,   
        {response.address.city} , 
        {response.address.zipcode}
      </h2>
      <h2 className="text-xl sm:text-2xl md:text-3xl font-serif font-medium text-white">
        Phone #: {response.phone}
      </h2>
      <h2 className="text-xl sm:text-2xl md:text-3xl font-serif font-medium text-white">
        Website: {response.website}
      </h2>
      <h2 className="text-xl sm:text-2xl md:text-3xl font-serif font-medium text-white">
        Company:
        {response.company.name}, 
         {response.company.bs}
      </h2>
    </div>
  );
};
export default DynamicUser;
