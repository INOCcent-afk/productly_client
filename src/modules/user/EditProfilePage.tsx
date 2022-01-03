import { useRouter } from "next/router";
import React, { SyntheticEvent, useEffect, useState } from "react";
import { useMutation } from "react-query";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import CogIcon from "../../icons/CogIcon";
import { IUpdateUser } from "../../models/user/IUser";
import { refetchUser } from "../../redux/AuthSlice.slice";
import { useAppDispatch } from "../../redux/hooks";
import { AppState } from "../../redux/store";
import { StyledButton } from "../../styles/styled-elements/button-elements";
import {
  StyledMainTitle,
  StyledTitle,
} from "../../styles/styled-elements/common-elements";
import {
  StyledBox,
  StyledMainContainer,
} from "../../styles/styled-elements/container-elements";
import {
  StyledInputText,
  StyledTextarea,
} from "../../styles/styled-elements/input-elements";
import Avatar from "../../ui/Avatar";
import { getSingleUser, uploadUserAvatar } from "../../utils/api/products_api";
import { darkYellow } from "../../utils/theme/colors";

const EditProfilePage = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const user: any = useSelector<AppState>((state) => state.auth);
  const [previewSource, setPreviewSource] = useState<any>("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [userInfo, setUserInfo] = useState<IUpdateUser>({
    first_name: "",
    last_name: "",
    bio_description: "",
    cover_photo: null,
    display_picture: null,
  });
  const userID = user.user && user.user.user_id;

  const handleFileInputChange = (e: any) => {
    const file = e.target.files[0];

    if (!file) {
      setSelectedFile(null);
      setPreviewSource("");
      return;
    }

    previewFile(file);
    setSelectedFile(file);
  };

  const previewFile = (file: any) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
      setUserInfo({
        ...userInfo,
        display_picture: reader.result as any,
      });
    };
  };

  const handleSubmitFile = async (e: any) => {
    e.preventDefault();
    if (!selectedFile) {
      mutation.mutate();
    } else {
      const reader = new FileReader();
      reader.readAsDataURL(selectedFile);
      reader.onloadend = () => {
        setUserInfo({ ...userInfo, display_picture: reader.result as any });
        mutation.mutate();
      };
      reader.onerror = () => {
        toast.error("something went wrong!");
      };
    }
  };

  const handleInfoData = (e: SyntheticEvent<HTMLInputElement>): void => {
    setUserInfo({
      ...userInfo,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const mutation = useMutation(
    () => uploadUserAvatar(userID, userInfo, user.token),
    {
      onSuccess: async () => {
        const { user } = await getSingleUser(userID);

        dispatch(refetchUser(user));

        toast.success("Profile Updated");

        router.push(`/profile/${userID}`);
      },
      onMutate: () => {
        toast.warn("Updating Profile info", {
          icon: false,
        });
      },
      onError: () => {
        toast.error("Whoops!");
      },
    }
  );

  useEffect(() => {
    setUserInfo({
      ...userInfo,
      first_name: user.user.first_name,
      last_name: user.user.last_name,
      bio_description: user.user.bio_description,
    });
  }, [user.user]);

  return (
    <StyledMainContainer>
      <StyledBox className="flex flex-col items-start p-10 gap-5">
        <div className="flex items-center gap-3">
          <CogIcon fill={darkYellow} width={50} height={50} />
          <StyledMainTitle className="!text-black">
            Account Settings
          </StyledMainTitle>
        </div>

        <form onSubmit={handleSubmitFile} className="form flex flex-col gap-8">
          <div className="flex flex-col gap-5">
            <StyledTitle className="!font-normal">Profile Picture</StyledTitle>
            <div className="flex items-center gap-5">
              {previewSource && (
                <Avatar
                  size={220}
                  name={user.user.first_name.charAt(0)}
                  additionalClassName="!text-6xl"
                  backgroundImage={previewSource}
                ></Avatar>
              )}
              {!previewSource && user.user.display_picture && (
                <Avatar
                  size={220}
                  name={user.user.first_name.charAt(0)}
                  additionalClassName="!text-6xl"
                  backgroundImage={user.user.display_picture}
                ></Avatar>
              )}

              <div className="file-input">
                <input
                  id="file"
                  type="file"
                  name="image"
                  onChange={handleFileInputChange}
                  className="file"
                />
                <label htmlFor="file">
                  Select file
                  <p className="file-name"></p>
                </label>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="">First Name</label>
            <StyledInputText
              borderRadius={8}
              name="first_name"
              type="text"
              value={userInfo.first_name}
              onChange={(e) => handleInfoData(e)}
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="">Last name</label>
            <StyledInputText
              borderRadius={8}
              name="last_name"
              type="text"
              value={userInfo.last_name}
              onChange={(e) => handleInfoData(e)}
              required
            />
          </div>

          <div className="flex flex-col gap-3">
            <label htmlFor="">Bio</label>
            <StyledTextarea
              value={userInfo.bio_description}
              onChange={(e) =>
                setUserInfo({
                  ...userInfo,
                  bio_description: e.target.value,
                })
              }
            ></StyledTextarea>
          </div>

          <StyledButton borderRadius={100} className="btn" type="submit">
            Submit
          </StyledButton>
        </form>
      </StyledBox>
    </StyledMainContainer>
  );
};

export default EditProfilePage;
