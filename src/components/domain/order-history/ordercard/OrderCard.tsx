import React from "react";
import Box from "@mui/material/Box";
import { CardMedia, Typography, makeStyles } from "@mui/material";
import MediaQuery from "../../../../hooks/MediaQuery";
import { CommonButton } from "../../../UI/CommonButton";
import OrderTotalPrice from "./OrderTotalPrice";
import { useBoundStore } from "../../../../store";

interface OrderCardProps {
  title: string;
  image: string;
  orderItems?: number; // 주문건 외 몇건
  startDate?: string; // 대여 시작 날짜
  endDate?: string; // 대여 종료 날짜
  buyDate?: string; // 구매날짜
  priceProduct?: number; // 각각의 상품 가격
  totalPrice?: number;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  isVisible?: boolean; // 버튼보임 설정
  sellerId?: string;
  productPrice?: number;
}

const OrderCard: React.FC<OrderCardProps> = ({
  title,
  image,
  orderItems,
  endDate,
  startDate,
  buyDate,
  onClick,
  productPrice,
  totalPrice,
  isVisible = true,
  sellerId,
}) => {
  const isDark = useBoundStore((state) => state.isDark);
  const isMobile = MediaQuery();
  {
    orderItems;
  }

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: " space-evenly",
          mt: "25px",
          mb: "25px",
          alignItems: "center",
          borderBottom: isDark || "1px solid var(--color-gray-300)",
        }}
      >
        <Box
          sx={{
            flexBasis: "200px",
            margin: "10px",
            //모바일 일때 크기
            flex: isMobile ? 2 : undefined,
          }}
        >
          {isMobile ? (
            <Box color="var(--color-gray-700)">
              주문날짜
              <Box>{buyDate}</Box>
            </Box>
          ) : (
            <Box color="var(--color-gray-700)">주문날짜: {buyDate}</Box>
          )}
          <CardMedia
            component="img"
            image={image}
            alt=""
            style={{
              borderRadius: "10px",
              marginTop: "20px",
              marginBottom: "20px",
            }}
          />
        </Box>
        <Box
          sx={{
            textAlign: "center",
            display: isMobile ? undefined : "flex",
            fontSize: isMobile ? "0.7rem" : undefined,
            width: "100%",
            justifyContent: "space-around",
            flex: 3,
          }}
        >
          {orderItems ? (
            <Typography
              variant={isMobile ? "body2" : "body1"}
              sx={{ fontWeight: "bold" }}
            >
              {/* 배열의 length가 1 이상일 때만 랜더링 */}
              {title} {orderItems >= 2 && `외 ${orderItems}`}
            </Typography>
          ) : (
            <Typography
              variant={isMobile ? "body2" : "body1"}
              sx={{ fontWeight: "bold" }}
            >
              {title}
            </Typography>
          )}

          <Box>
            <Box>{startDate} ~</Box>
            {endDate}
          </Box>

          {/* <Box>{sellerId}</Box> */}
          {totalPrice ? (
            <OrderTotalPrice totalPrice={totalPrice} />
          ) : (
            <OrderTotalPrice productPrice={productPrice} />
          )}
          {isVisible && (
            <CommonButton
              text="상세보기"
              onClick={onClick}
              isVisible={isVisible}
            />
          )}
        </Box>
      </Box>
    </>
  );
};

export default OrderCard;
