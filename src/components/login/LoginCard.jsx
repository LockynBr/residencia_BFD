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

//>> versão inicial do projeto
//>> apenas simulava o login e redirecionava para o dashboard

/*
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
*/
// =================================================================================
// =================================================================================


//>> versão atual
//>> integração React >> Django >> SQLite   abaixo vv


  const handleLogin = async (event) => {
  event.preventDefault();

  //>> mantém a funcionalidade de lembrar o usuário

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

  //==================================================
  //>> VERSÃO INICIAL
  //>> Na versão inicial, como já mencionado, o login era apenas simulado.
  //>> Independentemente dos dados digitados,
  //>> o usuário era enviado para o dashboard.
 

  //==================================================
  //>> VERSÃO ATUAL com integração back-end
  //>> Fluxo da autenticação:
  
  //>> React captura email e senha
  //>> fetch envia os dados para a API Django
  //>> Django consulta o SQLite
  //>> Django devolve um JSON
  //>> React analisa a resposta
  //>> Se válido, redireciona para o dashboard
  //==================================================

  try {

    //>> É neste ponto que o React deixa de trabalhar
    //>> exclusivamente no Front-end.

    //>> Até aqui tudo acontecia apenas no navegador.


    //>> A partir do fetch, o React passa a conversar
    //>> com a API Django através de uma rota HTTP.

    
    const resposta = await fetch(
      "http://127.0.0.1:8000/api/login/",                    //>> O fetch localiza o endereço informado,
                                                            //>> envia os dados do formulário para essa rota
                                                            //>> e aguarda uma resposta do servidor.
      {

        //>> POST indica envio de dados para o servidor

        method: "POST",

        headers: {

          //>> informa ao Django que os dados estão
          //>> sendo enviados em formato JSON

          "Content-Type": "application/json",
        },

        //>> transforma os dados do formulário
        //>> em JSON para envio ao backend

        body: JSON.stringify({
          email,
          senha: password,
        }),
      }
    );

    //>> converte o JSON recebido do Django
    //>> para um objeto JavaScript utilizável no React

    const dados = await resposta.json();

    //>> se o Django validar o usuário
    //>> permite acesso ao dashboard

    if (dados.sucesso) {

      console.log(
        "Usuário autenticado:",
        dados.usuario
      );

      navigate("/dashboard");

      return;
    }

    //>> credenciais inválidas retornadas pelo backend

    alert(dados.mensagem);

  } catch (erro) {

    //>> erro de comunicação entre React e Django
    //>> servidor desligado ou indisponível

    console.error(erro);

    alert(
      "Não foi possível conectar ao servidor."
    );
  }
};

  return (
    <div
      className="
        w-full
        max-w-[400px]

        rounded-xl
        border
        border-[var(--color-green-800)]

        bg-[var(--color-neutral-100)]/90

        p-8

        shadow-[7px_12px_109px_21px_var(--color-green-700)]
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
              text-[var(--color-green-800)]
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
                accent-[var(--color-green-700)]
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
              text-[var(--color-green-700)]

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