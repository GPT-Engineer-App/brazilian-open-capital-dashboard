import { Container, Table, Thead, Tbody, Tr, Th, Td, Text, VStack, Link, Box } from "@chakra-ui/react";
import { FaFileAlt } from "react-icons/fa";

const Index = () => {
  // Dados fictícios para exemplificar
  const dados = {
    empresa: "EmpresaX",
    ultimoResultado: {
      trimestre: "3T2023",
      data: "30/09/2023",
    },
    resultados: {
      receita: {
        atual: "R$ 500 milhões",
        passado: "R$ 450 milhões",
      },
      ebitda: {
        atual: "R$ 130 milhões",
        passado: "R$ 120 milhões",
      },
      lucroLiquido: {
        atual: "R$ 70 milhões",
        passado: "R$ 65 milhões",
      },
    },
    expectativas: {
      receita: "5%",
      ebitda: "8%",
      lucroLiquido: "7%",
    },
    reacaoMercado: "-3%",
    resumo: "A EmpresaX apresentou um crescimento sólido em receita e EBITDA, refletindo uma melhoria operacional. No entanto, o mercado reagiu negativamente devido às expectativas altas que não foram totalmente atendidas, resultando em uma queda de 3% no preço das ações desde a divulgação dos resultados.",
  };

  return (
    <Container maxW="container.xl">
      <VStack spacing={5}>
        <Text fontSize="2xl" fontWeight="bold">
          {dados.empresa} - Último Resultado: {dados.ultimoResultado.trimestre}, {dados.ultimoResultado.data}
        </Text>

        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Descrição</Th>
              <Th>Atual</Th>
              <Th>Ano Passado</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Receita do Trimestre</Td>
              <Td>{dados.resultados.receita.atual}</Td>
              <Td>{dados.resultados.receita.passado}</Td>
            </Tr>
            <Tr>
              <Td>EBITDA do Trimestre</Td>
              <Td>{dados.resultados.ebitda.atual}</Td>
              <Td>{dados.resultados.ebitda.passado}</Td>
            </Tr>
            <Tr>
              <Td>Lucro Líquido do Trimestre</Td>
              <Td>{dados.resultados.lucroLiquido.atual}</Td>
              <Td>{dados.resultados.lucroLiquido.passado}</Td>
            </Tr>
          </Tbody>
        </Table>

        <Text fontSize="xl" fontWeight="bold">
          Expectativa
        </Text>
        <Box as="ul">
          <li>Receita: {dados.expectativas.receita}</li>
          <li>EBITDA: {dados.expectativas.ebitda}</li>
          <li>Lucro Líquido: {dados.expectativas.lucroLiquido}</li>
        </Box>

        <Text fontSize="xl" fontWeight="bold">
          Reação do Mercado
        </Text>
        <Text>Variação percentual no preço da ação desde a divulgação do último resultado: {dados.reacaoMercado}</Text>

        <Text fontSize="xl" fontWeight="bold">
          Resumo
        </Text>
        <Text>{dados.resumo}</Text>

        <Link href="#" isExternal>
          <FaFileAlt /> Últimas demonstrações financeiras
        </Link>
      </VStack>
    </Container>
  );
};

export default Index;
