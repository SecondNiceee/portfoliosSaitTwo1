import { useForm } from "react-hook-form";
import TextInput from "../../../shared/ui/TextInput/TextInput";
import Submit from "../../../shared/ui/Sumbit/Submit";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerFields } from "../config";
import { UserSchema } from "../model";
import { useRegistrationSubmit } from "../model/RegistrationSubmit";
export type TFormValues = {
  firstName: string;
  password: string;
  email: string;
  confirmPassword: string;
};
const SignUp = () => {

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<TFormValues>({
    resolver: zodResolver(UserSchema),
  });

  const onSubmit = useRegistrationSubmit({handleSubmit})

  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="form-wrapper">
        {registerFields.map((e, i) => {
          return (
            <TextInput
              maxLength={e.name === "firstName" ? 15 : undefined}
              error={errors[e.error]}
              name={e.name}
              register={register}
              type={e.type}
            />
          );
        })}
      </div>

      <Submit value="Sign up!" className="submit" />

    </form>
  );
};

export default SignUp;
