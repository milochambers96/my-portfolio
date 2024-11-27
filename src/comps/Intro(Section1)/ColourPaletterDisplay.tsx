import React from "react";

const ColorPaletteDisplay = () => {
  const palettes = [
    {
      name: "Sage & Burnt Orange",
      colors: [
        {
          name: "Light Sage Background",
          hex: "#F5F5F0",
          className: "bg-[#F5F5F0]",
        },
        { name: "Burnt Orange", hex: "#D35400", className: "bg-[#D35400]" },
        { name: "Sage Green", hex: "#8B9D83", className: "bg-[#8B9D83]" },
        { name: "Dark Olive", hex: "#4A5043", className: "bg-[#4A5043]" },
      ],
    },
    {
      name: "Olive & Terra",
      colors: [
        {
          name: "Light Olive Background",
          hex: "#E8E6D9",
          className: "bg-[#E8E6D9]",
        },
        { name: "Terra Cotta", hex: "#CC5500", className: "bg-[#CC5500]" },
        { name: "Olive Green", hex: "#7D8471", className: "bg-[#7D8471]" },
        { name: "Deep Olive", hex: "#556052", className: "bg-[#556052]" },
      ],
    },
    {
      name: "Desert Tones",
      colors: [
        { name: "Sand Background", hex: "#F4F1EA", className: "bg-[#F4F1EA]" },
        { name: "Burnt Sienna", hex: "#C46D3B", className: "bg-[#C46D3B]" },
        { name: "Sage", hex: "#9CA777", className: "bg-[#9CA777]" },
        { name: "Forest Green", hex: "#535E3F", className: "bg-[#535E3F]" },
      ],
    },
  ];

  return (
    <div className="p-8 bg-gray-100">
      <h1 className="text-2xl font-bold mb-8">Portfolio Color Palettes</h1>

      <div className="space-y-12">
        {palettes.map((palette) => (
          <div key={palette.name} className="bg-white rounded-lg p-6 shadow-lg">
            <h2 className="text-xl font-semibold mb-4">{palette.name}</h2>

            {/* Large Color Blocks */}
            <div className="grid grid-cols-4 gap-4 mb-6">
              {palette.colors.map((color) => (
                <div
                  key={color.hex}
                  className={`h-32 rounded-lg shadow-sm ${color.className}`}
                />
              ))}
            </div>

            {/* Color Information */}
            <div className="grid grid-cols-4 gap-4">
              {palette.colors.map((color) => (
                <div key={color.hex} className="text-center">
                  <p className="font-medium text-sm">{color.name}</p>
                  <p className="text-gray-500 text-sm">{color.hex}</p>
                </div>
              ))}
            </div>

            {/* Example Usage */}
            <div
              className={`mt-8 p-6 rounded-lg ${palette.colors[0].className}`}
            >
              <h3
                className={`text-xl font-bold mb-4`}
                style={{ color: palette.colors[3].hex }}
              >
                Sample Content
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow">
                  <div
                    className={`w-full h-2 mb-2 rounded ${palette.colors[1].className}`}
                  ></div>
                  <p className="text-gray-600">
                    Content block with accent color
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <div
                    className={`w-full h-2 mb-2 rounded ${palette.colors[2].className}`}
                  ></div>
                  <p className="text-gray-600">
                    Content block with secondary color
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Usage Examples */}
      <div className="mt-12 bg-white rounded-lg p-6 shadow-lg">
        <h2 className="text-xl font-semibold mb-6">Recommended Usage</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Use the light background color as your main page background</li>
          <li>
            Use the burnt orange/terra cotta for buttons and important
            call-to-actions
          </li>
          <li>Use the sage/olive green for secondary elements and accents</li>
          <li>Use the darkest color for main headings and important text</li>
        </ul>
      </div>
    </div>
  );
};

export default ColorPaletteDisplay;
