function Section() {
  return (
    <section className="flex flex-col flex-1 px-4 md:px-20">
      {/* Toolbar */}
      <div className="mt-2 mb-4 p-4 bg-[#151718] border-[1.5px] border-[#282a2c] rounded-lg">
        <button className="px-3 py-1 text-[#cecece] bg-[#1f2123] hover:bg-[#2f3234] rounded">
          Coming Soon
        </button>
      </div>

      {/* Textarea */}
      <div className="overflow-auto">
        <textarea id="textBox"
          className="w-full h-[90rem] bg-[#0f0f0f] text-white text-lg"
          placeholder="Start typing or paste text here">
        </textarea>
      </div>
    </section>
  )
}

export default Section;
