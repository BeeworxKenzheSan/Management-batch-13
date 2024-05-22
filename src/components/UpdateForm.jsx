import { Form, redirect, useLoaderData } from "react-router-dom";

export const getDataById = async ({ request, params }) => {
  const response = await fetch(
    `https://batch-13-baa03-default-rtdb.firebaseio.com/managment/${params.adilet}.json`
  );
  const res = await response.json();
  return res;
};

export const updateData = async ({ request, params }) => {
  const formData = await request.formData();
  const newStudent = {
    name: formData.get("adilet"),
    username: formData.get("username"),
    birthDate: formData.get("birthDate"),
  };

  await fetch(
    `https://batch-13-baa03-default-rtdb.firebaseio.com/managment/${params.adilet}.json`,
    {
      method: "PUT",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(newStudent),
    }
  );
  return redirect("/management");
};

export const UpdateForm = () => {
  const initalDataFromServer = useLoaderData();
  return (
    <div>
      <h1>Update Form</h1>
      <Form method="put">
        <label className="block" htmlFor="">
          Name
        </label>
        <input
          className="block"
          defaultValue={initalDataFromServer.name}
          name="adilet"
          type="text"
          placeholder="Name"
        />
        <label className="block" htmlFor="">
          Username
        </label>
        <input
          className="block"
          name="username"
          type="text"
          placeholder="Name"
          defaultValue={initalDataFromServer.username}
        />
        <label className="block" htmlFor="">
          Birth date
        </label>
        <input
          className="block"
          name="birthDate"
          type="date"
          placeholder="Name"
          defaultValue={initalDataFromServer.birthDate}
        />
        <button type="submit">Submit</button>
      </Form>
    </div>
  );
};
