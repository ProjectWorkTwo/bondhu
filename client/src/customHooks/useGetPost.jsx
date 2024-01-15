import { useQuery } from "@tanstack/react-query";
import { baseURL } from "../Constant/Constant";
import axios from "axios";

const useGetPost = (id) => {
  console.log(id);
  const {
    data: dataPost,
    isLoading: isLoadingPost,
    refetch: refetchPost,
  } = useQuery({
    queryKey: ["post", id],
    queryFn: () =>
      axios
        .get(`${baseURL}/getgroupposts/${id}`, {
          headers: JSON.parse(localStorage.getItem("authorData") || {}),
        })
        .then((res) => res.data),
  });

  return {
    dataPost,
    isLoadingPost,
    refetchPost,
  };
};

export default useGetPost;
