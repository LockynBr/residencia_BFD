//componente de cartão de login, contendo o formulário de autenticação e as 
//opções de lembrar usuário e recuperar senha

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Input from "../ui/Input";
import Button from "../ui/Button";

import {
  UserRound,
  Lock,
  Eye,
  EyeOff,
} from "lucide-react";

export default function LoginCard() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [rememberUser, setRememberUser] = useState(false);

  const [showPassword, setShowPassword] =
    useState(false);

  useEffect(() => {
    const savedUser =
      localStorage.getItem("rememberedUser");

    if (savedUser) {
      setEmail(savedUser);
      setRememberUser(true);
    }
  }, []);

  const handleLogin = (event) => {
    event.preventDefault();

    if (rememberUser) {
      localStorage.setItem(
        "rememberedUser",
        email
      );
    } else {
      localStorage.removeItem(
        "rememberedUser"
      );
    }

    navigate("/dashboard");
  };

  return (
    <div
      className="
        w-full
        max-w-[400px]

        rounded-xl
        border
        border-green-200

        bg-white/90

        p-8

        shadow-xl
        backdrop-blur-sm
      "
    >
      <form
        className="
          flex
          flex-col
          items-center
          justify-center
          space-y-5
        "
        onSubmit={handleLogin}
      >
        <Input
          icon={UserRound}
          label="Usuário / E-mail"
          placeholder="email@email.com"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <Input
          icon={Lock}
          rightIcon={
            showPassword
              ? EyeOff
              : Eye
          }
          onRightIconClick={() =>
            setShowPassword(
              (prev) => !prev
            )
          }
          label="Senha"
          type={
            showPassword
              ? "text"
              : "password"
          }
          placeholder="Sua senha"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <div
          className="
            flex
            w-full
            items-center
            justify-between
          "
        >
          <label
            className="
              flex
              items-center
              gap-2
              text-sm
              text-[var(--color-green-500)]
              cursor-pointer
            "
          >
            <input
              type="checkbox"
              checked={rememberUser}
              onChange={(e) =>
                setRememberUser(
                  e.target.checked
                )
              }
              className="
                h-3
                w-3
                cursor-pointer
                accent-[var(--color-green-900)]
              "
            />

            Lembrar usuário
          </label>

          <button
            type="button"
            className="
              text-sm
              font-medium
              cursor-pointer
              text-[var(--color-green-500)]

              hover:text-[var(--color-green-900)]
            "
          >
            Esqueceu a senha?
          </button>
        </div>

        <Button
          className="w-64"
          type="submit"
        >
          Entrar
        </Button>
      </form>
    </div>
  );
}