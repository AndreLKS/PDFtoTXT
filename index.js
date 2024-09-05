const fs = require('fs');
const pdf = require('pdf-parse');

// Função para ler o PDF e converter para texto
async function convertPdfToText(pdfPath, outputPath) {
  try {
    // Ler o arquivo PDF
    const dataBuffer = fs.readFileSync(pdfPath);

    // Parse o PDF
    const data = await pdf(dataBuffer);

    // Escrever o texto extraído em um arquivo .txt
    fs.writeFileSync(outputPath, data.text);

    console.log('Conversão concluída com sucesso!');
  } catch (error) {
    console.error('Erro ao converter PDF para TXT:', error);
  }
}

const pdfPath = 'teste.pdf'; 
const outputPath = 'output.txt'; 

convertPdfToText(pdfPath, outputPath);
