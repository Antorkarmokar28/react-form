const UnctrolledForm = () => {
  const handleFormData = (formData) => {
    console.log(formData.get("name"));
    console.log(formData.get("email"));
    console.log(formData.get("password"));
  };
  return (
    <form action={handleFormData}>
      <input type="text" name="name" placeholder="Name" required />
      <br />
      <input type="email" name="email" placeholder="Email" required />
      <br />
      <input type="password" name="password" required />
      <br />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default UnctrolledForm;
