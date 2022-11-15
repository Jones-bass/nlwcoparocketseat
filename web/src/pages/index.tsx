import Image from "next/image";

import appPreviewImg from "../assets/app-nlw-copa-preview.png";
import logoImg from "../assets/logo.svg";
import usersAvatarExampleImg from "../assets/users-avatar-example.png";
import iconCheckImg from "../assets/icon-check.svg";

interface Props {
  count: number;
}

export default function Home(props: Props) {
  return (
    <div>
      <main>
        <Image src={logoImg} alt="NLW Copa" />

        <h1>Crie seu próprio bolão da copa e compartilhe entre amigos!</h1>

        <div>
          <Image src={usersAvatarExampleImg} alt="" />

          <strong>
            <span>+</span> pessoas já estão usando
          </strong>
        </div>

        <form>
          <input type="text" placeholder="Qual nome do seu bolão?" />
          <button>Criar meu bolão</button>
        </form>

        <p>
          Após criar seu bolão, você receberá um código único que poderá usar
          para convidar outras pessoas 🚀
        </p>

        <div>
          <div>
            <Image src={iconCheckImg} alt="" />
            <div>
              <span>+</span>
              <span>Bolões criados</span>
            </div>
          </div>

          <div />

          <div>
            <Image src={iconCheckImg} alt="" />
            <div>
              <span>+</span>
              <span>Palpites enviados</span>
            </div>
          </div>
        </div>
      </main>

      <Image
        src={appPreviewImg}
        alt="Dois celulares exibindo uma prévia da aplicação do NLW Copa"
        quality={100}
      />
    </div>
  );
}

export const getServerSideProps = async () => {
  const response = await fetch("http://localhost:3333/pools/count");
  const data = await response.json();

  return {
    props: {
      count: data.count,
    },
  };
};
