"use client";
import React, { useEffect, useState } from "react";
import UserCard from "./UserCard/UserCard";
import { SimpleGrid } from "@mantine/core";

const Users = (data: any) => {
  const [state, setState] = useState([]);
  const { users } = data;

  function deleteUser(params: string) {
    return setState(
      state.filter((item: any) => {
        return item.id !== params;
      })
    );
  }

  useEffect(() => {
    users.length && setState(data.users);
  }, []);

  return (
    <SimpleGrid
      cols={{ base: 1, sm: 2, lg: 4 }}
      spacing={{ base: 10, sm: "md" }}
      verticalSpacing={{ base: "md", sm: "xl" }}
      mt={20}
      mx={20}
    >
      {state.length ? (
        state.map((user: any) => {
          return <UserCard user={user} deleteUser={deleteUser} key={user.id} />;
        })
      ) : (
        <></>
      )}
    </SimpleGrid>
  );
};

export default Users;
