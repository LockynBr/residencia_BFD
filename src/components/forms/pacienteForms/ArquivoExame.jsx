import { useState } from "react";

export default function ArquivoExame({ formData, handleChange, setFormData }) {
  const [arquivo, setArquivo] = useState(null);
  const [dragActive, setDragActive] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setArquivo(file);
      setFormData({ ...formData, arquivoExame: file.name });
    }
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    const file = e.dataTransfer.files[0];
    if (file) {
      setArquivo(file);
      setFormData({ ...formData, arquivoExame: file.name });
    }
  };

  return (
    <div className="p-6 space-y-4">
      <div>
        <label className="block text-gray-700 font-medium mb-2">
          Arquivo do exame
        </label>
        
        {/* Área de upload */}
        <div
          className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
            dragActive
              ? "border-green-500 bg-green-50"
              : "border-gray-300 hover:border-green-400"
          }`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <input
            type="file"
            id="arquivoExame"
            accept=".pdf,.jpg,.png,.dicom"
            onChange={handleFileChange}
            className="hidden"
          />
          
          <label
            htmlFor="arquivoExame"
            className="cursor-pointer flex flex-col items-center gap-2"
          >
            <svg
              className="w-12 h-12 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              />
            </svg>
            <span className="text-gray-600">
              {arquivo ? arquivo.name : "Clique para importar o exame"}
            </span>
            <span className="text-sm text-gray-400">
              ou arraste e solte (PDF, JPG, PNG, DICOM)
            </span>
          </label>
        </div>

        {/* Preview do arquivo selecionado */}
        {arquivo && (
          <div className="mt-4 p-3 bg-green-50 rounded-md flex items-center justify-between">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm text-green-700">{arquivo.name}</span>
            </div>
            <button
              type="button"
              onClick={() => {
                setArquivo(null);
                setFormData({ ...formData, arquivoExame: "" });
              }}
              className="text-red-500 hover:text-red-700"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}