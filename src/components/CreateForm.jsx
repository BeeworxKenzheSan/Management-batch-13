import { Form, redirect } from "react-router-dom";

export const PostData = async ({ request, param }) => {
  const formData = await request.formData();
  const newStudent = {
    name: formData.get("adilet"),
    username: formData.get("username"),
    birthDate: formData.get("birthDate"),
  };

  await fetch(
    `https://batch-13-baa03-default-rtdb.firebaseio.com/managment.json`,
    {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(newStudent),
    }
  );
  return redirect("/management");
};

export const CreateForm = () => {
  return (
    <div>
      <h1>Create Form</h1>
      <Form method="post">
        <label className="block" htmlFor="">
          Name
        </label>
        <input className="block" name="adilet" type="text" placeholder="Name" />
        <label className="block" htmlFor="">
          Username
        </label>
        <input
          className="block"
          name="username"
          type="text"
          placeholder="Name"
        />
        <label className="block" htmlFor="">
          Birth date
        </label>
        <input
          className="block"
          name="birthDate"
          type="date"
          placeholder="Name"
        />
        <button type="submit">Submit</button>
      </Form>
    </div>
  );
};
