interface CodeEditorVisualProps {
  fileName: string;
  children: React.ReactNode;
}

export default function CodeEditorVisual({
  fileName,
  children,
}: Readonly<CodeEditorVisualProps>) {
  return (
    <div className='relative w-full h-full rounded-xl overflow-hidden bg-black border border-white/8'>
      {/* Gradient backgrounds */}
      <div className='absolute inset-0'>
        <div className='absolute inset-0 bg-linear-to-br from-violet-500/10 via-transparent to-indigo-500/10' />
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_60%_30%,rgba(124,58,237,0.15),transparent_50%)]' />
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(99,102,241,0.15),transparent_50%)]' />
      </div>

      {/* Glow blobs */}
      <div className='absolute inset-0'>
        <div className='absolute -left-40 -top-40 w-80 h-80 bg-violet-500 rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-blob' />
        <div className='absolute -right-40 -bottom-40 w-80 h-80 bg-indigo-500 rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-blob animation-delay-2000' />
      </div>

      <div className='absolute inset-0 z-10'>
        <div className='h-full flex flex-col'>
          {/* Title bar */}
          <div className='flex items-center justify-between px-4 py-3 bg-black/40 border-b border-white/10 backdrop-blur-md'>
            <div className='flex items-center space-x-4'>
              <div className='flex space-x-2'>
                <div className='w-3 h-3 rounded-full bg-[#FF5F56]' />
                <div className='w-3 h-3 rounded-full bg-[#FFBD2E]' />
                <div className='w-3 h-3 rounded-full bg-[#27C93F]' />
              </div>
              <div className='text-sm text-gray-300 font-mono'>{fileName}</div>
            </div>
          </div>

          {/* Editor content */}
          <div className='relative flex-1 p-6 font-mono text-sm'>
            <div className='relative z-10'>{children}</div>

            {/* Glowing dots */}
            <div className='absolute top-1/4 right-12 w-2 h-2 rounded-full bg-violet-500/80 animate-pulse'>
              <div className='absolute inset-0 rounded-full bg-violet-500 blur-sm animate-pulse' />
            </div>
            <div className='absolute top-2/4 right-24 w-2 h-2 rounded-full bg-indigo-500/80 animate-pulse delay-150'>
              <div className='absolute inset-0 rounded-full bg-indigo-500 blur-sm animate-pulse delay-150' />
            </div>
            <div className='absolute bottom-1/4 right-16 w-2 h-2 rounded-full bg-violet-500/80 animate-pulse delay-300'>
              <div className='absolute inset-0 rounded-full bg-violet-500 blur-sm animate-pulse delay-300' />
            </div>
          </div>
        </div>
      </div>

      {/* Gradient lines */}
      <div className='absolute inset-0 pointer-events-none'>
        <div className='absolute top-1/4 left-0 w-full h-px bg-linear-to-r from-transparent via-violet-500/20 to-transparent' />
        <div className='absolute top-2/4 left-0 w-full h-px bg-linear-to-r from-transparent via-indigo-500/20 to-transparent' />
        <div className='absolute top-3/4 left-0 w-full h-px bg-linear-to-r from-transparent via-violet-500/20 to-transparent' />
      </div>

      {/* Vignette */}
      <div className='absolute inset-0 bg-linear-to-t from-black via-transparent to-black/50' />
      <div className='absolute inset-0 bg-linear-to-r from-black via-transparent to-black' />
    </div>
  );
}
