import { TextInput, Checkbox, Button, Group, Box } from "@mantine/core";
import { useForm } from "@mantine/form";
import "./styles.css";

function Signuppage() {
  const form = useForm({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      zipcode: "",
      Phoneno: "",
      termsOfService: false,
    },

    validate: {
      firstName: (value) =>
        /^\S+@\S+$/.test(value) ? null : "Invalid firstName",

      lastName: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid lname"),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      password: (value) =>
        /^\S+@\S+$/.test(value) ? null : "Invalid password",
      confirmPassword: (value) =>
        /^\S+@\S+$/.test(value) ? null : "Invalid confirm password",
      zipcode: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid zip code"),
      Phoneno: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid phone no"),
    },
  });

  // const [formData, setFormData] = useState({
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  //   password: "",
  //   confirmPassword: "",
  //   zipcode: "",
  //    Phoneno:"",
  // });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  // localStorage.setItem("signupFormData", JSON.stringify(formData));
  // console.log("Data saved in local storage:", formData);
}

return (
  <Box maw={300} mx="auto">
    {/* <form onSubmit={form.onSubmit((values) => console.log(values))}> */}

    <form
      onSubmit={form.onSubmit((values) => {
        localStorage.setItem("signupFormData", JSON.stringify(values));
        console.log("Data saved in local storage:", values);
      })}
    >
      {/* <div className="signup-container">
      <div className="signup-form">
        <Text>Sign Up</Text>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>First Name:</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Last Name:</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>confirmPassword:</label>
            <input
              type="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange} // confrm paswrd
            />
          </div>

          <div className="form-group">
            <label>Zip Code:</label>
            <input
              type="zipcode"
              name="zipcode"
              value={formData.zipcode}
              onChange={handleChange} // zip code
            />
          </div>

          <div className="form-group">
            <label>Phone number:</label>
            <input
              type="Phoneno"
              name="Phoneno"
              value={formData.Phoneno}
              onChange={handleChange} // ph no
            />
          </div>

          <button type="submit">Sign Up</button>
         
        </form> */}

      <TextInput
        withAsterisk
        label="Fname"
        placeholder="Joseph"
        {...form.getInputProps("firstName")}
      />

      <TextInput
        withAsterisk
        label="lastName"
        placeholder="your@email.com"
        {...form.getInputProps("lastName")}
      />

      <TextInput
        withAsterisk
        label="Email"
        placeholder="your@email.com"
        {...form.getInputProps("email")}
      />

      <TextInput
        withAsterisk
        label="password"
        placeholder="AbC144"
        {...form.getInputProps("password")}
      />

      <TextInput
        withAsterisk
        label="confirmPassword"
        placeholder="AbC144"
        {...form.getInputProps("confirmPassword")}
      />

      <TextInput
        withAsterisk
        label="zipcode"
        placeholder="your@email.com"
        {...form.getInputProps("zipcode")}
      />

      <Checkbox
        mt="md"
        label="I agree to sell my privacy"
        {...form.getInputProps("termsOfService", { type: "checkbox" })}
      />

      <TextInput
        withAsterisk
        label="Phoneno"
        placeholder="0303-1234567"
        {...form.getInputProps("Phoneno")}
      />

      <Group position="right" mt="md">
        <Button type="submit">Sign Up</Button>
      </Group>
    </form>
  </Box>
);

export default Signuppage;
