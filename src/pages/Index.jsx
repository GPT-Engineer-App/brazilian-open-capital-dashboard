import { Container, Table, Thead, Tbody, Tr, Th, Td, Text, VStack, Link, Box, Select } from "@chakra-ui/react";
import { FaFileAlt } from "react-icons/fa";
import { useState, useEffect } from "react";
import axios from "axios"; // or any other data fetching library

const Index = () => {
  const [companies, setCompanies] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        setLoading(true);
        const response = await axios.get("https://your-api.com/companies"); // replace with your API endpoint
        setCompanies(response.data);
        setSelectedCompany(response.data[0].id); // set the first company as default
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchCompanies();
  }, []);

  const handleCompanyChange = (companyId) => {
    setSelectedCompany(companyId);
  };

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  const selectedCompanyData = companies.find((company) => company.id === selectedCompany);

  return (
    <Container maxW="container.xl">
      <VStack spacing={5}>
        <Select placeholder="Select company" onChange={(e) => handleCompanyChange(e.target.value)}>
          {companies.map((company) => (
            <option key={company.id} value={company.id}>
              {company.name}
            </option>
          ))}
        </Select>
        <Text fontSize="2xl" fontWeight="bold">
          {selectedCompanyData.name} - Último Resultado: {selectedCompanyData.lastResult.trimester}, {selectedCompanyData.lastResult.date}
        </Text>

        {/* rest of the component remains the same */}
      </VStack>
    </Container>
  );
};

export default Index;
