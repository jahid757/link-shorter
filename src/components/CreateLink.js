import React, { useState } from "react";
import { useForm } from "react-hook-form";
import swal from "sweetalert";

const CreateLink = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [uploadData, setUploadData] = useState(true);

  const setYourDataLocally = (data) => {
    const oldData = localStorage.getItem("shortLink");
    localStorage.setItem(
      "shortLink",
      JSON.stringify([data, ...JSON.parse(oldData)])
    );
  };

  const onSubmit = (data) => {
    // setYourDataLocally(data);

    uploadData === true
      ? fetch("https://still-savannah-83715.herokuapp.com/link/find", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ linkId: data.urlName }),
        })
          .then((response) => response.json())
          .then((res) => {
            setUploadData(res);
            swal("Sorry!", "Link Name is already exists", "warning");
            // window.location.reload();
            reset({ urlName: "", url: `${data.url}` });
          })
      : fetch("https://still-savannah-83715.herokuapp.com/link/insert", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        })
          .then((response) => response.json())
          .then((result) => {
            if (result === true) {
              swal("Good job!", "Your Link is shorted!", "success");
              setUploadData(true);
              setYourDataLocally(data);
            } else {
              swal("Sorry!", "Your Link Isn't shorted!", "warning");
            }
            reset({ urlName: "", url: "" });
          });
  };

  return (
    <div className="insert_link mt-4">
      <div className=" container py-4 pb-3">
        <form
          className=" d-md-flex align-items-start justify-content-center"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div>
            <input
              placeholder="Custom URL Name"
              {...register("urlName", { required: true })}
            />
            {errors.urlName && <span>URL name is required</span>}
          </div>

          <div>
            <input
              placeholder="Shorten Your Link"
              {...register("url", { required: true })}
              type="url"
            />
            {errors.url && <span>URL is required</span>}
          </div>

          <button type="submit">Shorten</button>
        </form>
      </div>
    </div>
  );
};

export default CreateLink;
