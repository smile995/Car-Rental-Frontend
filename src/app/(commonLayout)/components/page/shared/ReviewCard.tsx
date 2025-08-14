import { TReview } from "@/Types";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";

import Rating from "@mui/material/Rating";
import Image from "next/image";
const ReviewCard = ({ review }: { review: TReview }) => {
  const {image,location,name,rating,review:comment}=review
  return (
    <div className="ml-5">
      <Card sx={{ maxWidth: 400,height:200 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="profile">
              {/* <img src={image} alt="" /> */}
              <Image width={65} height={65} src={image} alt={"Profile"}/>
            </Avatar>
          }
          title={name}
          subheader={location}
        />

        <CardContent>
          <Rating name="read-only" value={rating} readOnly />

          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {comment}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default ReviewCard;
