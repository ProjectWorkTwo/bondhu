import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { baseURL } from "../Constant/Constant";

const useGetGroupInfo = (groupName) => {
  if (groupName.includes(" ")) {
    groupName = groupName.split(" ").join("-");
  }
  const {
    data: dataGroupInfo,
    isLoading: isLoadingGroupInfo,
    refetch: refetchGroupInfo,
  } = useQuery({
    queryKey: ["group", groupName],
    queryFn: () =>
      axios
        .get(`${baseURL}/getgroup/${groupName}`, {
          headers: JSON.parse(localStorage.getItem("authorData") || {}),
        })
        .then((res) => res.data),
  });

  return {
    dataGroupInfo,
    isLoadingGroupInfo,
    refetchGroupInfo,
  };
};
const useGetGroupMembers = (groupName) => {
  if (groupName.includes(" ")) {
    groupName = groupName.split(" ").join("-");
  }

  console.log(`${baseURL}/getgroupmembers/${groupName}`);
  const {
    data: dataGroupMembers,
    isLoading: isLoadingGroupMembers,
    refetch: refetchGroupMembers,
  } = useQuery({
    queryKey: ["groupmembers", groupName],
    queryFn: () =>
      axios
        .get(`${baseURL}/getgroupmembers/${groupName}`, {
          headers: JSON.parse(localStorage.getItem("authorData") || {}),
        })
        .then((res) => res.data),
  });

  return {
    dataGroupMembers,
    isLoadingGroupMembers,
    refetchGroupMembers,
  };
};

export { useGetGroupInfo, useGetGroupMembers };
