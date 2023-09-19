import Container from "./components/Container";
import ClientOnly from "./components/ClientOnly";

export default function Home() {
  return (
    <ClientOnly>
      <Container></Container>
    </ClientOnly>
  );
}
