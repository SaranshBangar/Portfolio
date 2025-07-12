"use client";

import { TerminalCommandOutput, TerminalCommands } from "../lib/data";
import { TerminalAIOutput } from "../lib/terminal-ai-output";
import { useState, useRef, useEffect } from "react";

interface TerminalEntry {
  command: string;
  output: string;
  isLoading?: boolean;
}

const Terminal = () => {
  const [history, setHistory] = useState<TerminalEntry[]>([]);
  const [currentInput, setCurrentInput] = useState("");
  const [filteredCommands, setFilteredCommands] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedSuggestion, setSelectedSuggestion] = useState(-1);
  const [isProcessing, setIsProcessing] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (currentInput) {
      const filtered = TerminalCommands.filter((cmd) => cmd.toLowerCase().includes(currentInput.toLowerCase()));
      setFilteredCommands(filtered);
      setShowSuggestions(filtered.length > 0 && currentInput !== "");
    } else {
      setFilteredCommands([]);
      setShowSuggestions(false);
    }
    setSelectedSuggestion(-1);
  }, [currentInput]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentInput(e.target.value);
  };

  const handleKeyDown = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const command = currentInput.trim();

      if (command === "") return;

      if (command === "cls") {
        setHistory([]);
        setCurrentInput("");
        return;
      }

      setIsProcessing(true);
      setCurrentInput("");
      setShowSuggestions(false);

      const tempEntry: TerminalEntry = { command, output: "Processing...", isLoading: true };
      setHistory((prev) => [...prev, tempEntry]);

      let output = "";
      if (TerminalCommands.includes(command)) {
        output = TerminalCommandOutput[command as keyof typeof TerminalCommandOutput];
      } else {
        output = await TerminalAIOutput(command);
      }

      setHistory((prev) => prev.map((entry, index) => (index === prev.length - 1 ? { ...entry, output, isLoading: false } : entry)));
      setIsProcessing(false);
      setTimeout(() => {
        inputRef.current?.focus();
      }, 0);
    } else if (e.key === "ArrowUp" && showSuggestions) {
      e.preventDefault();
      setSelectedSuggestion((prev) => (prev <= 0 ? filteredCommands.length - 1 : prev - 1));
    } else if (e.key === "ArrowDown" && showSuggestions) {
      e.preventDefault();
      setSelectedSuggestion((prev) => (prev >= filteredCommands.length - 1 ? 0 : prev + 1));
    } else if (e.key === "Tab" && showSuggestions && selectedSuggestion >= 0) {
      e.preventDefault();
      setCurrentInput(filteredCommands[selectedSuggestion]);
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (command: string) => {
    setCurrentInput(command);
    setShowSuggestions(false);
    inputRef.current?.focus();
  };

  return (
    <section className="relative">
      <section className="border-b-[1px] border-[#4AF626] bg-background pb-2 max-lg:-m-2">
        {TerminalCommands.map((command, index) => (
          <span key={index} className="text-[#4AF626]">
            {command}
            {index === TerminalCommands.length - 1 ? "" : <span> | </span>}
          </span>
        ))}
      </section>

      <section className="flex flex-col gap-2 pt-2 max-lg:pt-8">
        {history.map((entry, index) => (
          <div key={index} className="flex flex-col gap-1">
            <div className="flex gap-2">
              <span className="text-[#4AF626]">bangar@portfolio:~$</span>
              <span className="text-white">{entry.command}</span>
            </div>
            <div className="text-white/80 whitespace-pre-wrap">
              {entry.isLoading ? <span className="text-white/50">Processing...</span> : entry.output}
            </div>
          </div>
        ))}

        <div className="flex gap-2 relative">
          <span className="text-[#4AF626]">bangar@portfolio:~$</span>
          <div className="flex-1 relative">
            <input
              ref={inputRef}
              type="text"
              value={currentInput}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              className="bg-transparent outline-none caret-[#4AF626] text-white w-full"
              autoFocus
              disabled={isProcessing}
            />

            {showSuggestions && (
              <div className="absolute top-full left-0 mt-1 bg-black/90 border border-[#4AF626] rounded-md z-30 min-w-[200px] max-h-[150px] overflow-y-auto">
                {filteredCommands.map((command, index) => (
                  <div
                    key={command}
                    onClick={() => handleSuggestionClick(command)}
                    className={`px-3 py-2 cursor-pointer text-sm transition-colors ${
                      index === selectedSuggestion ? "bg-[#4AF626]/20 text-[#4AF626]" : "text-white/80 hover:bg-[#4AF626]/10"
                    }`}
                  >
                    {command}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </section>
  );
};

export default Terminal;
