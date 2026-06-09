import LoginHeader from "../../components/login/LoginHeader";
import LoginCard from "../../components/login/LoginCard";

export default function Login() {
  return (
    <main
      className="
      flex
      min-h-screen
      flex-col
      items-center
      justify-center

      bg-gradient-to-tr
      from-[var(--color-green-700)]
      via-[var(--color-green-200)]
    to-[var(--color-neutral-100)]

      px-4
    "
    >
      <LoginHeader />

      <LoginCard />
    </main>
  );
}