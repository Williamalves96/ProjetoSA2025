import React, { useState } from "react";

function BuscaCEP() {
  const [cep, setCep] = useState("");
  const [dados, setDados] = useState(null);
  const [erro, setErro] = useState("");

  const buscarCep = async () => {
    if (!cep || cep.length !== 8) {
      setErro("Por favor, insira um CEP válido com 8 dígitos.");
      return;
    }

    try {
      setErro("");
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();

      if (data.erro) {
        setErro("CEP não encontrado.");
        setDados(null);
      } else {
        setDados(data);
      }
    } catch (error) {
      setErro("Erro ao buscar o CEP. Tente novamente mais tarde.");
      setDados(null);
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Busca de CEP</h1>
      <input
        type="text"
        placeholder="Digite o CEP (somente números)"
        value={cep}
        onChange={(e) => setCep(e.target.value.replace(/\D/g, ""))}
        maxLength="8"
        style={{ padding: "10px", marginRight: "10px" }}
      />
      <button onClick={buscarCep} style={{ padding: "10px" }}>
        Buscar
      </button>

      {erro && <p style={{ color: "red" }}>{erro}</p>}

      {dados && (
        <div style={{ marginTop: "20px" }}>
          <h2>Dados do CEP:</h2>
          <p><strong>Logradouro:</strong> {dados.logradouro || "Não informado"}</p>
          <p><strong>Bairro:</strong> {dados.bairro || "Não informado"}</p>
          <p><strong>Cidade:</strong> {dados.localidade}</p>
          <p><strong>Estado:</strong> {dados.uf}</p>
        </div>
      )}
    </div>
  );
}

export default BuscaCEP;
