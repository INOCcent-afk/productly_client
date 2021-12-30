import React, { useEffect } from "react";
import Image from "next/image";
import {
  StyledAvatar,
  StyledTitle,
  StyledBody,
  StyledMainTitle,
} from "../../styles/styled-elements/common-elements";
import { useRouter } from "next/router";
import { useSingleUser } from "../../utils/reactQueryHooks/productsQueryHooks";

const ProfilePage = () => {
  const router = useRouter();
  const { user_id } = router.query;

  const { data, refetch } = useSingleUser(user_id as string);

  useEffect(() => {
    refetch();
  }, []);

  return (
    <div className="mb-32">
      <div className="relative w-full h-60">
        <Image
          layout="fill"
          objectFit="cover"
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2F6NlmBQLhWy2QM%2Fsource.gif&f=1&nofb=1"
          alt="cover_photo"
        />
      </div>
      <div
        className="flex flex-col gap-8 relative items-center mx-auto"
        style={{ marginTop: -80, maxWidth: 450 }}
      >
        <StyledAvatar size={220} className="border-4 border-white !text-7xl">
          {data?.user.first_name.charAt(0)}
        </StyledAvatar>
        <StyledTitle>
          {data?.user.first_name} {data?.user.last_name}
        </StyledTitle>
        <div className="border border-gray-300 py-5 px-10 rounded-md">
          <StyledBody>{data?.user.bio_description}</StyledBody>
        </div>
        <div className="flex gap-28 my-14">
          <div className="flex flex-col gap-3 items-center">
            <div className="text-4xl font-bold">
              {data?.userRatingsCount.count}
            </div>
            <StyledTitle>Ratings</StyledTitle>
          </div>
          <div className="flex flex-col gap-3 items-center">
            <div className="text-4xl font-bold">
              {data?.userReviewsCount.count}
            </div>
            <StyledTitle>Reviews</StyledTitle>
          </div>
        </div>
        <StyledMainTitle>Activity</StyledMainTitle>
      </div>
    </div>
  );
};

export default ProfilePage;
