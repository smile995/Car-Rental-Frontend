/* eslint-disable @typescript-eslint/no-explicit-any */
import nexiosInstance from "@/config/nexios.config";

const carDatas = async () => {
  const { data }: any = await nexiosInstance.get("/cars", {
    cache: "no-store",
    next: {},
  });
  return data;
};
export default carDatas;
