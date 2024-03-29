import { useQuery } from "@tanstack/react-query";
import { baseURL } from "../Constant/Constant";
import axios from "axios";

const useGetPost = (id) => {
  if (!id) return;
  const {
    data: dataPost,
    isLoading: isLoadingPost,
    refetch: refetchPost,
  } = useQuery({
    queryKey: ["post", id],
    queryFn: () =>
      axios
        .get(`${baseURL}/getgroupsinglepost/${id}`, {
          headers: JSON.parse(localStorage.getItem("authorData") || {}),
        })
        .then((res) => {
          console.log(res?.data);
          res?.data;
        }),
  });

  return {
    dataPost,
    isLoadingPost,
    refetchPost,
  };
};

export default useGetPost;
