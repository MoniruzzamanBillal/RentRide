import axios from "axios";

const imageHostingApi = `https://api.imgbb.com/1/upload?key=00fc9e4302335a502d2035bb196a9314`;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const GetImgLink = async (image: any) => {
  const formData = new FormData();
  formData.append("image", image);

  const response = await axios.post(imageHostingApi, formData);
  console.log(response);
  const imgUrl = response?.data?.data?.display_url;

  return imgUrl;
};

export default GetImgLink;
