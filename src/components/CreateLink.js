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
  
  const [uploadData,setUploadData] = useState(true);

  const onSubmit = (data) => {
    console.log(data);

    uploadData === true ?

    fetch('http://localhost:5000/link/find',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({linkId: data.urlName})
    }).then(res => res.json())
    .then(res => {
      setUploadData(res)
      swal("Sorry!", "Link Name is already exists", "warning");
      // window.location.reload();
      reset({urlName:"",url:`${data.url}`})
    })

    :

    fetch("http://localhost:5000/link/insert", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data === true) {
          swal("Good job!", "Your Link is shorted!", "success");
          setUploadData(true)
        } else {
          swal("Sorry!", "Your Link Isn't shorted!", "warning");
        }
        reset();
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
        {errors.urlName && <span>This field is required</span>}
        </div>

        <div>
        <input
          placeholder="Shorten Your Link"
          {...register("url", { required: true })}
        />
        {errors.url && <span>This field is required</span>}
        </div>

        <button type="submit">Shorten</button>
      </form>
    </div>
    </div>
  );
};

export default CreateLink;