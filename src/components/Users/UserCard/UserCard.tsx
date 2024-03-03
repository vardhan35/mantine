import React, { useState } from "react";
import { Card, Text, Button, Flex } from "@mantine/core";
import {
  IconAt,
  IconPhoneCall,
  IconStar,
  IconTrash,
  IconUserMinus,
  IconUserPlus,
  IconWorld,
} from "@tabler/icons-react";
import { Image } from "@mantine/core";
import Link from "next/link";

const UserCard = (data: any) => {
  const [followed, setFollowed] = useState(false);
  const { deleteUser, user } = data;

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Flex
        style={{ width: "98%" }}
        justify="center"
        align="center"
        mt="md"
        mb="1rem"
        display={"flex"}
        direction="column"
      >
        <Flex
          style={{
            width: 120,
            height: 120,
            backgroundColor: "blue",
            borderRadius: "50%",
          }}
          bg={"blue"}
          justify={"center"}
          align={"center"}
          mb={"1rem"}
        >
          <Image
            radius="50%"
            src={`https://api.dicebear.com/7.x/initials/svg?seed=${user.username}`}
          />
        </Flex>
        <Flex display={"flex"} justify={"center"} align={"center"}>
          <Text fw={500} display={"flex"}>
            {user.name}
          </Text>
          {followed ? <IconStar size={25} fontWeight={"sm"} /> : <></>}
        </Flex>
      </Flex>

      <Flex
        justify="space-between"
        display="flex"
        align="start"
        style={{ width: "98%", margin: "auto", flexDirection: "column" }}
      >
        <Text size="sm" c="dimmed" display="flex" mb={"0.25rem"}>
          <IconAt size={18} />
          {user.email}
        </Text>
        <Text size="sm" c="dimmed" display="flex" mb={"0.25rem"}>
          <IconPhoneCall size={18} />
          {user.phone}
        </Text>
        <Text size="sm" c="dimmed" display="flex">
          <IconWorld size={18} />
          <Link
            style={{ textDecoration: "none", color: "gray" }}
            target="_blank"
            href={"http://" + user.website}
          >
            {user.website}
          </Link>
        </Text>
      </Flex>

      <Flex
        justify="space-between"
        display="flex"
        style={{ width: "98%", margin: "auto" }}
      >
        <Button
          color="blue"
          variant={followed ? "default" : ""}
          mt="md"
          radius="sm"
          style={{ width: "47%" }}
          onClick={() => setFollowed(!followed)}
        >
          {!followed ? (
            <IconUserPlus size={20} style={{ marginRight: "0.5em" }} />
          ) : (
            <IconUserMinus size={20} style={{ marginRight: "0.5em" }} />
          )}
          {followed ? "Unfollow" : "Follow"}
        </Button>
        <Button
          variant="outline"
          color="blue"
          mt="md"
          radius="sm"
          style={{ width: "47%" }}
          onClick={() => {
            return deleteUser(user.id);
          }}
        >
          <IconTrash size={20} style={{ marginRight: "0.5em" }} />
          Delete
        </Button>
      </Flex>
    </Card>
  );
};

export default UserCard;
