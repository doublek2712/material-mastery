"use client";
import {
  Button,
  Stack,
  TextInput,
  PasswordInput,
  Checkbox,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { phoneRegex, checkPasswordFormat } from "@/utils/regex";
import { userService } from "@/services/userServices";

export function SignInForm() {
  const form = useForm({
    initialValues: {
      phone: "",
      password: "",
    },
    validate: {
      // phone: (value) =>
      //   phoneRegex.test(value) ? null : "Invalid phone number",
      //password: (value) => checkPasswordFormat(value),
    },
  });

  const handleSubmit = async (formData: any) => {
    console.log(JSON.stringify(formData));
    if (formData.phone && formData.password) {
      const res = await userService.login(formData);
    }
  };

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <Stack gap="1rem">
        <TextInput
          name="phone"
          label="Số điện thoại"
          placeholder="Nhập số điện thoại"
          withAsterisk
          {...form.getInputProps("phone")}
          size="md"
        />
        <PasswordInput
          name="password"
          label="Mật khẩu"
          placeholder="Nhập mật khẩu"
          withAsterisk
          {...form.getInputProps("password")}
          size="md"
        />
      </Stack>
      <Button fullWidth h="3rem" mt="1.5rem" type="submit">
        Đăng nhập
      </Button>
    </form>
  );
}
