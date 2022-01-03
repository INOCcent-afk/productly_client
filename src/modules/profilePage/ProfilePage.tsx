import React, { useEffect, useRef } from "react";
import Image from "next/image";
import {
  StyledTitle,
  StyledBody,
  StyledMainTitle,
} from "../../styles/styled-elements/common-elements";
import { useRouter } from "next/router";
import { useSingleUser } from "../../utils/reactQueryHooks/productsQueryHooks";
import Avatar from "../../ui/Avatar";
import { StyledButton } from "../../styles/styled-elements/button-elements";
import PencilAltIcon from "../../icons/PencilAltIcon";
import ClipboardCopy from "../../icons/ClipboardCopy";
import Link from "next/link";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast } from "react-toastify";
import { useAppSelector } from "../../redux/hooks";
import LongUserActivity from "../../ui/LongUserActivity";

const ProfilePage = () => {
  const user = useAppSelector((state) => state.auth);
  const currentUserID = user.user && user.user.user_id;
  const router = useRouter();

  let user_id;
  user_id = router.query.user_id;

  if (!user_id && typeof window !== "undefined") {
    user_id = window.location.pathname.split("/").pop();
  }

  const { data, refetch, isError } = useSingleUser(user_id as string);

  if (isError) router.push("/404");

  useEffect(() => {
    refetch();
  }, [user_id]);

  const isMe = user && currentUserID === user_id;

  return (
    <div className="mb-32" style={{ minHeight: "100vh" }}>
      <div>
        <div className="relative w-full h-60">
          {data?.user.cover_photo ? (
            <Image
              layout="fill"
              objectFit="cover"
              src={data.user.cover_photo}
              blurDataURL={data.user.cover_photo}
              placeholder="blur"
              alt="cover_photo"
            />
          ) : (
            <Image
              layout="fill"
              objectFit="cover"
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2F6NlmBQLhWy2QM%2Fsource.gif&f=1&nofb=1"
              blurDataURL="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2F6NlmBQLhWy2QM%2Fsource.gif&f=1&nofb=1"
              placeholder="blur"
              alt="cover_photo"
            />
          )}
        </div>
        <div
          className="flex flex-col gap-8 relative items-center mx-auto"
          style={{ marginTop: -80, maxWidth: 450 }}
        >
          <Avatar
            size={220}
            additionalClassName="border-4 border-white !text-7xl"
            name={data?.user.first_name.charAt(0) as string}
            backgroundImage={data?.user.display_picture}
          />
          <StyledTitle>
            {data?.user.first_name} {data?.user.last_name}
          </StyledTitle>
          {isMe && (
            <div className="flex items-center gap-5">
              <Link href="/user/account-settings">
                <StyledButton
                  className="flex items-center gap-1"
                  borderRadius={8}
                >
                  <PencilAltIcon /> Edit Profile
                </StyledButton>
              </Link>

              <CopyToClipboard
                text={typeof window !== "undefined" ? window.location.href : ""}
                onCopy={() => toast.success("Copied!", { icon: false })}
              >
                <StyledButton
                  className="flex items-center gap-1"
                  borderRadius={8}
                  onClick={() => {}}
                >
                  <ClipboardCopy />
                  Share Profile
                </StyledButton>
              </CopyToClipboard>
            </div>
          )}
          {data?.user.bio_description && (
            <div className="border border-gray-300 py-5 px-10 rounded-md">
              <StyledBody>{data?.user.bio_description}</StyledBody>
            </div>
          )}
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
        </div>
      </div>
      {data?.user_activity.activity.length && (
        <div className="mx-auto px-2" style={{ maxWidth: 700 }}>
          <StyledMainTitle className="text-center !my-20">
            Activity
          </StyledMainTitle>
          <div className="flex flex-col gap-5">
            {data?.user_activity.activity.map((activity) => (
              <LongUserActivity
                key={activity.product_id}
                productTitle={activity.product_name}
                rating={activity.average_rating}
                date={activity.latest_review_date}
                productID={activity.product_id}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
