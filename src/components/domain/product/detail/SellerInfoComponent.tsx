// import { useEffect, useState } from "react";

import classes from "./SellerInfoComponent.module.css";
import DEFAUlT_AVATAR from "../../../../assets/images/default-avatar.png";
// import { useBoundStore } from "../../../../store";
// import useCustomAxios from "../../../../services/useCustomAxios";

const SellerInfoComponent = ({ product }: { product: ProductItemType }) => {
  // const [userName, setUserName] = useState("");
  // const user = useBoundStore((state) => state.userBasicInfo);

  // const axiosInstance = useCustomAxios();

  // const handleRightUserName = async () => {
  //   if (user._id === product.seller_id) {
  //     await axiosInstance(`/users/5/name`);
  //   }
  // };

  // useEffect(() => {
  //   handleRightUserName();
  // }, [user, product]);

  return (
    <div className={classes.wrapper}>
      <div className={classes["seller-info"]}>
        <div className={classes["avatar-box"]}>
          <img src={DEFAUlT_AVATAR} alt="" />
        </div>
        <h4>{product.seller_id}</h4>
      </div>
      <button>스트랩버튼</button>
    </div>
  );
};

export default SellerInfoComponent;
