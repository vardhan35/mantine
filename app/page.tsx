import Users from "../src/components/Users";

async function getUsers() {
  const data = await fetch("https://jsonplaceholder.typicode.com/users");
  return await data.json();
}

export default async function HomePage() {
  const data = await getUsers();
  return (
    <div>
      <Users users={data} />
    </div>
  );
}
