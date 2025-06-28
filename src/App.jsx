import React, { useState } from "react";
import { trSlugify } from "tr-slugify";
import { Code, Zap, Globe, CheckCircle, Copy } from "lucide-react";

const stats = [
  { label: "İşletme", value: "1.880+" },
  { label: "Sohbet", value: "21.667+" },
  { label: "Mesaj", value: "256.476+" },
  { label: "Saat Tasarruf", value: "44.624+" },
];

function App() {
  const [inputText, setInputText] = useState("Türkçe Metin Örneği");
  const [outputText, setOutputText] = useState("");
  const [separator, setSeparator] = useState("-");
  const [lowercase, setLowercase] = useState(true);
  const [copied, setCopied] = useState(false);

  const handleSlugify = () => {
    const result = trSlugify(inputText, {
      separator,
      lowercase,
      removeSpecialChars: true,
      collapseSeparators: true,
      trimSeparators: true,
    });
    setOutputText(result);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const examples = [
    { input: "Türkçe SEO Optimizasyonu", output: "turkce-seo-optimizasyonu" },
    { input: "İstanbul, Türkiye", output: "istanbul-turkiye" },
    { input: "React.js ile Modern Web", output: "react-js-ile-modern-web" },
    { input: "iPhone 14 Pro Max", output: "iphone-14-pro-max" },
  ];

  const features = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Türkçe Karakter Desteği",
      description: "ç→c, ğ→g, ı→i, İ→I, ö→o, ş→s, ü→u dönüşümleri",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Hızlı ve Optimize",
      description: "Sıfır bağımlılık ile hızlı çalışma",
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "TypeScript Desteği",
      description: "Tam TypeScript desteği ve tip güvenliği",
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Özelleştirilebilir",
      description: "Ayırıcı karakter ve diğer seçenekler",
    },
  ];

  React.useEffect(() => {
    handleSlugify();
  }, [inputText, separator, lowercase]);

  return (
    <div className="min-h-screen bg-white flex flex-col gap-20 pt-28 pb-16">
      {/* HEADER */}
      <header className="w-full flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 text-gray-900">
          En Doğru Türkçe Slugify
          <br />
          <span className="text-gray-800">paketiyle tanışın</span>
        </h1>
        <p className="text-lg md:text-2xl text-gray-700 max-w-2xl mx-auto mb-8">
          Türkçe karakterleri doğru çeviren, SEO uyumlu ve hızlı slug
          oluşturucu. <br />
          <span className="font-semibold text-gray-900">tr-slugify</span> ile
          URL'leriniz her zaman temiz ve profesyonel.
        </p>
        <a
          href="#demo"
          className="inline-block px-8 py-4 rounded-full bg-gray-900 text-white font-bold text-lg shadow-lg hover:scale-105 transition-transform"
        >
          Hemen Dene
        </a>
      </header>

      {/* DEMO */}
      <section id="demo" className="flex flex-col items-center justify-center">
        <div className="bg-gray-50 rounded-3xl shadow-xl p-8 md:p-12 max-w-xl w-full border border-gray-200">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center text-gray-900">
            Canlı Demo
          </h2>
          <DemoSlugify />
        </div>
      </section>

      {/* ÖRNEK DÖNÜŞÜMLER */}
      <section className="bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Örnek Dönüşümler
          </h3>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden border border-gray-200">
              <table className="w-full">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Giriş
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Çıkış
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-gray-50 divide-y divide-gray-200">
                  {examples.map((example, index) => (
                    <tr key={index} className="hover:bg-gray-100">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {example.input}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                        <code className="bg-gray-100 px-2 py-1 rounded">
                          {example.output}
                        </code>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full py-8 text-center text-gray-500 text-sm mt-auto">
        MIT License © 2024 ahmetseha &middot;{" "}
        <a
          href="https://www.npmjs.com/package/tr-slugify"
          className="text-gray-900 hover:underline"
        >
          NPM
        </a>{" "}
        &middot;{" "}
        <a
          href="https://github.com/ahmetseha/tr-slugify"
          className="text-gray-800 hover:underline"
        >
          GitHub
        </a>
      </footer>
    </div>
  );
}

function DemoSlugify() {
  const [input, setInput] = React.useState("Türkçe Metin Örneği");
  const [output, setOutput] = React.useState("");
  const [copied, setCopied] = React.useState(false);
  const outputRef = React.useRef(null);

  React.useEffect(() => {
    import("tr-slugify").then(({ trSlugify }) => {
      setOutput(trSlugify(input));
    });
  }, [input]);

  React.useEffect(() => {
    if (outputRef.current) {
      outputRef.current.style.height = "auto";
      outputRef.current.style.height = outputRef.current.scrollHeight + "px";
    }
  }, [output]);

  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Giriş Metni
        </label>
        <button
          type="button"
          onClick={() => setInput("")}
          className="px-3 py-2 text-xs rounded bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors"
        >
          Temizle
        </button>
      </div>
      <div className="flex items-center gap-2 mb-4">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full p-3 border border-gray-300 bg-white text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent placeholder:text-gray-400"
          rows={3}
        />
      </div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Oluşturulan Slug
      </label>
      <div className="relative mb-2 flex items-center">
        <textarea
          ref={outputRef}
          value={output}
          readOnly
          rows={1}
          className="w-full p-3 border border-gray-200 rounded-lg bg-gray-100 font-mono text-gray-800 text-lg pr-12 overflow-hidden resize-none"
          style={{ minHeight: "2.5rem" }}
        />
        <button
          onClick={() => {
            navigator.clipboard.writeText(output);
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
          }}
          className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center text-gray-500 hover:text-gray-900 transition-colors"
          style={{
            height: "2.5rem",
            width: "2.5rem",
            background: "none",
            boxShadow: "none",
            border: "none",
            padding: 0,
          }}
          tabIndex={-1}
          aria-label="Kopyala"
        >
          <Copy
            className={copied ? "text-green-500" : "text-gray-500"}
            size={16}
          />
        </button>
      </div>
    </div>
  );
}

export default App;
