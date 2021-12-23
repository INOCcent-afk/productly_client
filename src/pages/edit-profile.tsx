import { useRouter } from "next/router";
import React, { SyntheticEvent, useEffect, useState } from "react";
import { useMutation } from "react-query";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { IUpdateUser } from "../models/user/IUser";
import { refetchUser } from "../redux/AuthSlice.slice";
import { useAppDispatch } from "../redux/hooks";
import { AppState } from "../redux/store";
import { getSingleUser, uploadUserAvatar } from "../utils/api/products_api";

const EditProfile = () => {
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

        router.push("/profile");
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
    <div>
      <h1 className="title">Upload an Image</h1>
      <form onSubmit={handleSubmitFile} className="form">
        <label htmlFor="">first name</label>
        <input
          name="first_name"
          type="text"
          value={userInfo.first_name}
          onChange={(e) => handleInfoData(e)}
        />
        <br />

        <label htmlFor="">last name</label>
        <input
          name="last_name"
          type="text"
          value={userInfo.last_name}
          onChange={(e) => handleInfoData(e)}
        />
        <br />

        <label htmlFor="">bio</label>
        <textarea
          value={userInfo.bio_description}
          onChange={(e) =>
            setUserInfo({
              ...userInfo,
              bio_description: e.target.value,
            })
          }
        ></textarea>
        <br />

        <input
          id="fileInput"
          type="file"
          name="image"
          onChange={handleFileInputChange}
          className="form-input"
        />
        <button className="btn" type="submit">
          Submit
        </button>
      </form>
      {previewSource && (
        <img src={previewSource} alt="chosen" style={{ height: "300px" }} />
      )}
      {!previewSource && user.user.display_picture && (
        <img
          src={user.user.display_picture}
          alt="chosen"
          style={{ height: "300px" }}
        />
      )}
    </div>
  );
};

export default EditProfile;
