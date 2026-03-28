
import React, { useState, useMemo, useEffect, useRef } from 'react';
import { AppTab, ViewState, Poem } from './types';
import { POEMS } from './data/poems';

// --- Components ---

const Header = ({ title, onBack, rightElements }: { title: string, onBack?: () => void, rightElements?: React.ReactNode }) => (
  <header className="sticky top-0 z-50 bg-xuan/90 backdrop-blur-sm border-b border-wood/10 px-4 py-4">
    <div className="flex items-center justify-between max-w-2xl mx-auto">
      <div className="w-12">
        {onBack && (
          <button onClick={onBack} className="flex items-center text-ink opacity-60 hover:opacity-100">
            <span className="material-symbols-outlined text-2xl">arrow_back_ios</span>
          </button>
        )}
      </div>
      <h1 className="font-serif font-bold text-xl tracking-widest text-ink text-center flex-1 truncate px-2">{title}</h1>
      <div className="w-12 flex justify-end gap-2 relative">
        {rightElements}
      </div>
    </div>
  </header>
);

const SearchBar = ({ value, onChange, inputRef }: { value: string, onChange: (v: string) => void, inputRef?: React.RefObject<HTMLInputElement | null> }) => (
  <div className="px-2 flex items-center mb-8 max-w-2xl mx-auto">
    <div className="w-3 h-12 bg-wood rounded-l-sm shadow-inner"></div>
    <div className="flex-1 handscroll-bg h-12 flex items-center px-4 shadow-inner relative">
      <span className="material-symbols-outlined text-wood mr-2">search</span>
      <input 
        ref={inputRef}
        className="bg-transparent border-none focus:ring-0 w-full placeholder:text-wood/40 text-sm font-serif" 
        placeholder="搜诗词、作者、名句..." 
        type="text" 
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
    <div className="w-3 h-12 bg-wood rounded-r-sm shadow-inner"></div>
  </div>
);

const CollectionCard = ({ label, icon, subtitle, onClick }: { label: string, icon: string, subtitle: string, onClick: () => void }) => (
  <div 
    onClick={onClick} 
    className="bg-white/60 p-5 rounded-xl border border-wood/5 flex items-center justify-between group hover:bg-white transition-all cursor-pointer shadow-sm hover:shadow-md"
  >
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 bg-vermilion/5 rounded-full flex items-center justify-center text-vermilion group-hover:scale-110 transition-transform">
        <span className="material-symbols-outlined text-2xl">{icon}</span>
      </div>
      <div>
        <p className="font-serif font-bold text-lg text-ink tracking-widest">{label}</p>
        <p className="text-[10px] text-wood/60 font-serif tracking-wider">{subtitle}</p>
      </div>
    </div>
    <div className="flex items-center gap-1 text-wood/30 group-hover:text-vermilion transition-colors">
      <span className="text-[10px] font-serif">浏览</span>
      <span className="material-symbols-outlined text-sm">arrow_forward_ios</span>
    </div>
  </div>
);

const PoemDetail = ({ 
  poem, 
  onBack, 
  onRecite, 
  isFavorited, 
  toggleFavorite 
}: { 
  poem: Poem, 
  onBack: () => void, 
  onRecite: () => void, 
  isFavorited: boolean,
  toggleFavorite: (id: string) => void 
}) => {
  const [showSettings, setShowSettings] = useState(false);
  const [config, setConfig] = useState({
    pinyin: true,
    annotation: true,
    translation: true
  });

  const getAnnotationsForLine = (line: string) => {
    if (!poem.annotation) return [];
    return poem.annotation.filter(item => line.includes(item.word));
  };

  const translationLines = useMemo(() => {
    return poem.translation?.split(/[，。！？]/).filter(s => s.trim().length > 0) || [];
  }, [poem.translation]);

  return (
    <div className="min-h-screen bg-xuan pb-40 animate-in fade-in duration-500 overflow-x-hidden">
      <Header 
        title={poem.title} 
        onBack={onBack} 
        rightElements={
          <>
            <button onClick={() => setShowSettings(!showSettings)} className={`transition-colors ${showSettings ? 'text-vermilion' : 'text-wood/60'}`}>
               <span className="material-symbols-outlined text-2xl">visibility</span>
            </button>
            
            {showSettings && (
              <div className="absolute right-0 top-12 w-44 bg-white border-2 border-wood/10 rounded-2xl shadow-2xl z-[60] py-4 animate-in zoom-in-95 duration-200 text-left">
                <div className="flex flex-col gap-2">
                  <div className="px-4 pb-1 border-b border-wood/5 text-[10px] font-bold text-wood/40 tracking-[0.2em] uppercase">显示控制</div>
                  {[
                    { id: 'pinyin', label: '拼音' },
                    { id: 'annotation', label: '注释' },
                    { id: 'translation', label: '译文' }
                  ].map(opt => (
                    <label key={opt.id} className="flex items-center px-4 py-2 hover:bg-wood/5 cursor-pointer active:bg-wood/10 transition-colors">
                      <input 
                        type="checkbox" 
                        checked={config[opt.id as keyof typeof config]} 
                        onChange={() => setConfig(prev => ({ ...prev, [opt.id]: !prev[opt.id as keyof typeof config] }))}
                        className="rounded text-vermilion focus:ring-vermilion mr-4 size-5"
                      />
                      <span className="text-base font-serif text-ink tracking-widest">{opt.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            <button onClick={() => toggleFavorite(poem.id)} className="text-vermilion transition-transform active:scale-125">
               <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: isFavorited ? "'FILL' 1" : "'FILL' 0" }}>
                 star
               </span>
            </button>
          </>
        }
      />
      <main className="px-6 pt-10 text-center max-w-lg mx-auto">
        <div className="mb-6">
          <h2 className="text-4xl font-bold tracking-[0.2em] text-ink mb-1">{poem.title}</h2>
          <div className="flex items-center justify-center gap-2 opacity-50">
            <span className="h-[px] w-4 bg-wood"></span>
            <p className="text-base text-wood font-medium tracking-widest">{poem.dynasty} · {poem.author}</p>
            <span className="h-[px] w-4 bg-wood"></span>
          </div>
        </div>

        <article className="space-y-1">
          {poem.content.map((line, idx) => {
            const pinyinLine = poem.pinyin ? poem.pinyin[idx]?.split(' ') : [];
            const chars = line.split('');
            const lineAnnotations = getAnnotationsForLine(line);
            
            return (
              <div key={idx} className="flex flex-col items-center py-1.5">
                <div className="flex flex-wrap justify-center gap-x-1.5">
                  {chars.map((char, charIdx) => (
                    <ruby key={charIdx} className="text-3xl leading-none text-ink tracking-normal font-bold">
                      {char}
                      {config.pinyin && pinyinLine && pinyinLine[charIdx] && (
                        <rt className="text-[11px] text-wood/60 font-sans tracking-normal mb-1 font-normal">
                          {pinyinLine[charIdx]}
                        </rt>
                      )}
                    </ruby>
                  ))}
                </div>
                
                {config.translation && translationLines[idx] && (
                  <div className="mt-1 animate-in fade-in duration-300">
                    <p className="text-2xl font-serif text-ink/60 tracking-wider leading-snug">
                      {translationLines[idx]}
                    </p>
                  </div>
                )}

                {config.annotation && lineAnnotations.length > 0 && (
                  <div className="mt-1 space-y-0.5 animate-in fade-in duration-300">
                    {lineAnnotations.map((ann, ai) => (
                      <div key={ai} className="flex items-center justify-center gap-2">
                        <span className="text-2xl font-serif text-vermilion">[{ann.word}]</span>
                        <span className="text-2xl font-serif text-wood/80">{ann.meaning}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </article>
      </main>

      <div className="fixed bottom-0 left-0 right-0 p-6 z-40 bg-gradient-to-t from-xuan via-xuan/90 to-transparent flex justify-center">
        <button 
          onClick={onRecite}
          className="w-full max-w-md bg-vermilion hover:bg-vermilion/90 text-xuan font-serif py-4 rounded-xl shadow-2xl flex items-center justify-center gap-3 transition-all active:scale-95 group"
        >
          <span className="material-symbols-outlined text-xl group-hover:rotate-12 transition-transform">ink_pen</span>
          <span className="tracking-[0.4em] font-bold text-xl">开始背诵</span>
        </button>
      </div>
    </div>
  );
};

const RecitationView = ({ poem, onExit, onComplete }: { poem: Poem, onExit: () => void, onComplete: () => void }) => {
  const [sentenceLevels, setSentenceLevels] = useState<number[]>(new Array(poem.content.length).fill(0));
  const [activeSentenceIdx, setActiveSentenceIdx] = useState<number | null>(null);

  const incrementLevel = (idx: number) => {
    setActiveSentenceIdx(idx);
    setSentenceLevels(prev => {
      const next = [...prev];
      next[idx] = (next[idx] + 1) % 5;
      return next;
    });
  };

  const renderSentence = (line: string, lineIdx: number) => {
    const level = sentenceLevels[lineIdx];
    const chars = line.split('');
    const shouldReveal = (charIdx: number) => {
      if (level >= 4) return true;
      if (level >= 2 && charIdx < 2) return true;
      if (level >= 1 && charIdx < 1) return true;
      return false;
    };

    return (
      <div 
        onClick={() => incrementLevel(lineIdx)}
        className={`flex items-center justify-center gap-2 py-4 px-2 rounded-lg transition-colors cursor-pointer ${activeSentenceIdx === lineIdx ? 'bg-wood/5' : 'hover:bg-wood/5'}`}
      >
        {chars.map((char, charIdx) => {
          const isPunctuation = /[，。！？；：、]/.test(char);
          if (isPunctuation) return <span key={charIdx} className="text-ink/20 text-xl font-serif">{char}</span>;
          
          return (
            <div key={charIdx} className={`w-8 h-10 border-b-2 flex items-end justify-center pb-0.5 transition-colors ${activeSentenceIdx === lineIdx ? 'border-vermilion/50' : 'border-ink/10'}`}>
              <span className={`text-xl font-serif text-ink transition-all duration-300 ${shouldReveal(charIdx) ? 'opacity-100 translate-y-0 font-bold' : 'opacity-0 translate-y-1'}`}>
                {char}
              </span>
            </div>
          );
        })}
      </div>
    );
  };

  const currentHint = activeSentenceIdx !== null && sentenceLevels[activeSentenceIdx] === 3 
    ? (poem.translation?.split(/[，。！？]/)[activeSentenceIdx] || '暂无详细释义')
    : null;

  useEffect(() => {
    if (sentenceLevels.every(l => l >= 4)) {
      onComplete();
    }
  }, [sentenceLevels, onComplete]);

  return (
    <div className="fixed inset-0 z-[60] bg-[#fdfaf2] flex animate-in zoom-in-95 duration-300 overflow-hidden">
      {/* 左侧主要内容区 */}
      <div className="flex-1 flex flex-col h-full overflow-hidden relative border-r border-wood/10">
        <div className="w-full flex justify-between items-center px-6 py-6 shrink-0">
          <div className="flex items-center gap-2 text-vermilion/60">
            <span className="material-symbols-outlined text-lg">history_edu</span>
            <span className="text-xs tracking-widest font-serif font-bold">背诵模式</span>
          </div>
          <button onClick={onExit} className="text-ink/40 hover:text-vermilion transition-colors p-2">
            <span className="material-symbols-outlined text-3xl">close</span>
          </button>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center w-full px-6 overflow-y-auto no-scrollbar pb-10">
          <div className="mb-12 text-center shrink-0">
            <h1 className="text-ink text-4xl font-bold tracking-[0.2em] mb-3 font-serif">{poem.title}</h1>
            <p className="text-wood text-xl tracking-widest font-serif">[{poem.dynasty}] {poem.author}</p>
          </div>

          <div className="space-y-6 w-full max-w-sm">
            {poem.content.map((line, idx) => (
              <div key={idx}>
                {renderSentence(line, idx)}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 右侧侧边栏 (提示区) */}
      <div className="w-32 md:w-64 h-full bg-white/40 backdrop-blur-md shadow-2xl flex flex-col shrink-0 p-4 border-l-4 border-vermilion/10 overflow-y-auto">
        <div className="mb-8 pb-4 border-b-2 border-wood/10">
          <h2 className="text-sm font-bold text-ink mb-4 tracking-widest font-serif border-l-4 border-vermilion pl-2">阶段指引</h2>
          <div className="space-y-3 font-serif">
            <div className="flex flex-col">
              <span className="text-xs font-bold text-vermilion">1.首字提醒</span>
              <p className="text-[10px] text-ink/80 leading-tight">点击显示每句首个汉字</p>
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-bold text-vermilion">2.前二字显</span>
              <p className="text-[10px] text-ink/80 leading-tight">点击显示前两个汉字</p>
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-bold text-vermilion">3.释义导引</span>
              <p className="text-[10px] text-ink/80 leading-tight">在此处查看该句释义</p>
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-bold text-vermilion">4.全显该句</span>
              <p className="text-[10px] text-ink/80 leading-tight">显示整行内容确认背诵</p>
            </div>
          </div>
        </div>

        <div className="flex-1 flex flex-col">
          <h2 className="text-sm font-bold text-ink mb-3 tracking-widest font-serif border-l-4 border-wood/40 pl-2">实时提示</h2>
          <div className="flex-1 bg-white/60 rounded-xl p-4 border border-wood/10 shadow-inner flex items-center justify-center">
             {currentHint ? (
               <p className="text-base text-ink font-serif font-bold text-center leading-relaxed vertical-text-center animate-in fade-in duration-300">
                 {currentHint}
               </p>
             ) : (
               <p className="text-xs text-wood/60 text-center font-serif leading-loose">
                 点击左侧诗句<br/>在此处获取<br/>释义提示
               </p>
             )}
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-wood/10">
           <p className="text-[10px] text-wood/40 text-center font-serif leading-relaxed">
             勤学苦练<br/>终成大器
           </p>
        </div>
      </div>
    </div>
  );
};

// --- Main App ---

export default function App() {
  const [activeTab, setActiveTab] = useState<AppTab>(AppTab.HOME);
  const [viewState, setViewState] = useState<ViewState>(ViewState.SEARCH);
  const [prevViewState, setPrevViewState] = useState<ViewState>(ViewState.SEARCH);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPoem, setSelectedPoem] = useState<Poem | null>(null);
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  const [completedPoemIds, setCompletedPoemIds] = useState<Set<string>>(new Set());
  const searchInputRef = useRef<HTMLInputElement>(null);

  const toggleFavorite = (id: string) => {
    setFavorites(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const filteredPoems = useMemo(() => {
    const q = searchQuery.toLowerCase();
    if (!q && viewState !== ViewState.CATEGORY_LIST) return POEMS.slice(0, 10); 
    return POEMS.filter(p => 
      p.title.toLowerCase().includes(q) || 
      p.author.toLowerCase().includes(q) || 
      p.content.some(line => line.includes(q))
    );
  }, [searchQuery, viewState]);

  const categorizedPoems = useMemo(() => {
    const order = ["五言古诗", "七言古诗", "五言律诗", "七言律诗", "五言绝句", "七言绝句", "乐府"];
    const result: Record<string, Poem[]> = {};
    order.forEach(cat => {
      const list = POEMS.filter(p => p.subCategory === cat);
      if (list.length > 0) result[cat] = list;
    });
    return result;
  }, []);

  const memorizedPoems = useMemo(() => POEMS.filter(p => completedPoemIds.has(p.id)), [completedPoemIds]);
  const unmemorizedPoems = useMemo(() => POEMS.filter(p => !completedPoemIds.has(p.id)), [completedPoemIds]);

  const handlePoemClick = (poem: Poem) => {
    setPrevViewState(viewState);
    setSelectedPoem(poem);
    setViewState(ViewState.DETAIL);
  };

  const handleRecitationComplete = () => {
    if (selectedPoem) {
      setCompletedPoemIds(prev => {
        const next = new Set(prev);
        next.add(selectedPoem.id);
        return next;
      });
    }
  };

  const handleCategoryClick = () => {
    setViewState(ViewState.CATEGORY_LIST);
    setSearchQuery('');
  };

  if (viewState === ViewState.DETAIL && selectedPoem) {
    return (
      <PoemDetail 
        poem={selectedPoem} 
        isFavorited={favorites.has(selectedPoem.id)}
        toggleFavorite={toggleFavorite}
        onBack={() => setViewState(prevViewState)} 
        onRecite={() => setViewState(ViewState.RECITE)}
      />
    );
  }

  if (viewState === ViewState.RECITE && selectedPoem) {
    return (
      <RecitationView 
        poem={selectedPoem} 
        onExit={() => setViewState(ViewState.DETAIL)} 
        onComplete={handleRecitationComplete}
      />
    );
  }

  return (
    <div className="min-h-screen bg-xuan pb-32 font-serif">
      <Header 
        title={
          activeTab === AppTab.HOME ? (viewState === ViewState.CATEGORY_LIST ? "唐诗全集" : "古诗") : 
          activeTab === AppTab.RECITE_TAB ? "背诵状态" :
          activeTab === AppTab.LIBRARY ? "博闻强识" : "雅客斋号"
        } 
        onBack={viewState === ViewState.CATEGORY_LIST ? () => setViewState(ViewState.SEARCH) : undefined}
        rightElements={null}
      />

      <main className="px-6 py-8 max-w-2xl mx-auto">
        {activeTab === AppTab.HOME && (
          <div className="animate-in fade-in duration-500">
            {viewState !== ViewState.CATEGORY_LIST && (
              <>
                <SearchBar 
                  value={searchQuery} 
                  onChange={setSearchQuery} 
                  inputRef={searchInputRef}
                />

                {!searchQuery && (
                  <div className="animate-in slide-in-from-bottom-2">
                    <section className="mb-12">
                      <div className="flex items-end justify-between mb-6">
                        <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-ink/40 border-l-2 border-vermilion pl-3">诗集精选</h3>
                        <span onClick={handleCategoryClick} className="text-[10px] text-wood/70 underline underline-offset-4 cursor-pointer">查看名录</span>
                      </div>
                      <div className="space-y-4">
                        <CollectionCard 
                          label="唐诗三百首" 
                          icon="forest" 
                          subtitle="收录全卷经典名篇" 
                          onClick={handleCategoryClick} 
                        />
                      </div>
                    </section>
                  </div>
                )}
              </>
            )}

            <section className={searchQuery || viewState === ViewState.CATEGORY_LIST ? 'mt-4' : ''}>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-ink/40 mb-8 border-l-2 border-vermilion pl-3">
                {searchQuery ? `检索到 ${filteredPoems.length} 首` : (viewState === ViewState.CATEGORY_LIST ? '诗歌名录' : '今日荐读')}
              </h3>
              
              {viewState === ViewState.CATEGORY_LIST && !searchQuery ? (
                <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
                  {Object.entries(categorizedPoems).map(([catName, poems]) => (
                    <div key={catName}>
                      <div className="flex items-center gap-3 mb-6">
                        <span className="text-sm font-bold text-vermilion tracking-[0.3em]">{catName}</span>
                        <div className="flex-1 h-[0.5px] bg-wood/10"></div>
                        <span className="text-xs text-wood/30 font-medium italic">{poems.length}首</span>
                      </div>
                      <div className="grid grid-cols-3 gap-x-3 gap-y-2">
                        {poems.map((poem) => (
                          <div 
                            key={poem.id} 
                            onClick={() => handlePoemClick(poem)}
                            className="flex items-center justify-start text-left cursor-pointer active:opacity-40 transition-all group py-1"
                          >
                            <div className="font-serif leading-none group-hover:text-vermilion transition-colors w-full truncate border-b border-transparent hover:border-vermilion/20 pb-0.5">
                              <span className="text-base font-bold text-ink inline-block max-w-[70%] truncate align-middle">
                                {poem.title}
                              </span>
                              <span className="text-[10px] text-wood/40 ml-1 italic align-middle">
                                {poem.author}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="space-y-6">
                  {filteredPoems.length > 0 ? filteredPoems.map((poem) => (
                    <div 
                      key={poem.id} 
                      onClick={() => handlePoemClick(poem)}
                      className="relative pl-6 cursor-pointer group flex items-center justify-between"
                    >
                      <div className="absolute left-0 top-1 w-0.5 h-full bg-gradient-to-b from-vermilion to-transparent opacity-30 group-hover:opacity-100 transition-opacity"></div>
                      <div className="flex flex-col">
                        <div className="flex items-baseline gap-2 mb-1">
                          <h4 className="text-xl font-bold tracking-wider group-hover:text-vermilion transition-colors">
                            {poem.title} <span className="text-sm font-normal text-wood opacity-60">({poem.author})</span>
                          </h4>
                        </div>
                        <p className="text-ink/60 text-sm leading-relaxed italic line-clamp-1">“{poem.content[0]}...”</p>
                      </div>
                      <span className="material-symbols-outlined text-wood/10 text-sm group-hover:text-vermilion/40 transition-colors">arrow_forward_ios</span>
                    </div>
                  )) : (
                    <div className="text-center py-24 opacity-40 font-serif flex flex-col items-center">
                      <span className="material-symbols-outlined text-6xl mb-4 text-wood/30">auto_stories</span>
                      <p className="text-xl tracking-widest">书卷寻遍，未见此句</p>
                      <button onClick={() => {setSearchQuery(''); setViewState(ViewState.SEARCH)}} className="mt-4 text-xs text-vermilion underline underline-offset-4">返回首页</button>
                    </div>
                  )}
                </div>
              )}
            </section>
          </div>
        )}

        {activeTab === AppTab.RECITE_TAB && (
          <div className="animate-in fade-in duration-500">
             <div className="flex gap-4 mb-10">
               <div className="flex-1 bg-white/40 p-6 rounded-xl border border-wood/10 backdrop-blur-sm shadow-sm text-center">
                 <p className="text-xs text-wood/60 mb-2 font-bold uppercase tracking-widest">已背诵</p>
                 <span className="text-4xl font-bold font-serif text-vermilion">{completedPoemIds.size}</span>
               </div>
               <div className="flex-1 bg-white/40 p-6 rounded-xl border border-wood/10 backdrop-blur-sm shadow-sm text-center">
                 <p className="text-xs text-wood/60 mb-2 font-bold uppercase tracking-widest">待研读</p>
                 <span className="text-4xl font-bold font-serif">{unmemorizedPoems.length}</span>
               </div>
             </div>

             <section className="mb-12">
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-ink/40 mb-6 border-l-2 border-vermilion pl-3">已在心中</h3>
                {memorizedPoems.length > 0 ? (
                  <div className="grid grid-cols-2 gap-3">
                    {memorizedPoems.map(p => (
                      <div key={p.id} onClick={() => handlePoemClick(p)} className="bg-white/60 p-4 rounded-xl border border-wood/10 flex items-center justify-between group active:opacity-50 transition-all cursor-pointer">
                        <div className="truncate">
                          <p className="font-bold text-ink truncate">{p.title}</p>
                          <p className="text-[10px] text-wood/40">{p.author}</p>
                        </div>
                        <span className="material-symbols-outlined text-vermilion text-sm">verified</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12 border-2 border-dashed border-wood/10 rounded-2xl opacity-30 italic text-sm">
                    尚无完整背诵记录
                  </div>
                )}
             </section>

             <section>
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-ink/40 mb-6 border-l-2 border-wood/20 pl-3">虚位以待</h3>
                <div className="space-y-3">
                  {unmemorizedPoems.slice(0, 15).map(p => (
                    <div key={p.id} onClick={() => handlePoemClick(p)} className="flex items-center justify-between p-4 bg-white/30 rounded-xl border border-wood/5 group cursor-pointer hover:bg-white transition-colors">
                      <div>
                        <span className="font-bold text-ink text-lg">{p.title}</span>
                        <span className="text-xs text-wood/40 ml-2">[{p.dynasty}] {p.author}</span>
                      </div>
                      <span className="material-symbols-outlined text-wood/20 text-sm group-hover:text-vermilion transition-colors">menu_book</span>
                    </div>
                  ))}
                  {unmemorizedPoems.length > 15 && (
                    <p className="text-center text-[10px] text-wood/30 italic pt-4">及更多诗篇...</p>
                  )}
                </div>
             </section>
          </div>
        )}

        {activeTab === AppTab.LIBRARY && (
           <div className="animate-in slide-in-from-right-4 duration-500">
             <div className="flex gap-4 mb-8">
               <div className="flex-1 bg-white/40 p-6 rounded-xl border border-wood/10 backdrop-blur-sm shadow-sm">
                 <p className="text-xs text-wood/60 mb-2 font-bold">收藏</p>
                 <div className="flex items-baseline gap-1">
                   <span className="text-4xl font-bold font-serif">{favorites.size}</span>
                   <span className="text-[10px] text-wood/40">首</span>
                 </div>
               </div>
             </div>
             
             <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-ink/40 mb-6 border-l-2 border-bamboo pl-3">藏书阁</h3>
             <div className="space-y-4">
               {POEMS.filter(p => favorites.has(p.id)).length > 0 ? POEMS.filter(p => favorites.has(p.id)).map(p => (
                 <div key={p.id} onClick={() => handlePoemClick(p)} className="bg-white/60 p-5 rounded-xl border border-wood/5 flex items-center justify-between group hover:bg-white transition-colors cursor-pointer shadow-sm">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-vermilion/10 rounded-full flex items-center justify-center text-vermilion group-hover:scale-110 transition-transform">
                        <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                      </div>
                      <div>
                        <p className="font-bold text-lg">{p.title} <span className="text-sm font-normal text-wood/60">({p.author})</span></p>
                        <p className="text-[10px] text-wood/40 tracking-widest">{p.dynasty} · {p.subCategory}</p>
                      </div>
                    </div>
                    <span className="material-symbols-outlined text-wood/20 text-sm">arrow_forward_ios</span>
                 </div>
               )) : (
                <div className="text-center py-20 opacity-20 font-serif italic text-sm">
                  空山寂寂，暂无藏书
                </div>
               )}
             </div>
           </div>
        )}
        
        {activeTab === AppTab.PROFILE && (
           <div className="flex flex-col items-center py-12 animate-in zoom-in-95 duration-500">
             <div className="size-24 rounded-full border-4 border-wood/10 mb-6 flex items-center justify-center bg-white shadow-xl relative">
                <span className="material-symbols-outlined text-4xl text-wood">person</span>
                <div className="absolute -bottom-1 -right-1 w-7 h-7 bg-vermilion rounded-full flex items-center justify-center border-2 border-white">
                   <span className="material-symbols-outlined text-xs text-white">edit</span>
                </div>
             </div>
             <h2 className="text-2xl font-bold mb-2 tracking-widest">墨香文士</h2>
             <p className="text-sm text-wood/60 tracking-widest mb-10 italic">诗书启智，笔墨传情</p>
             <div className="w-full space-y-3">
               <button className="w-full flex items-center justify-between p-6 bg-white/40 rounded-xl border border-wood/5 hover:bg-white transition-all shadow-sm">
                 <div className="flex items-center gap-4 text-ink/70">
                   <span className="material-symbols-outlined text-wood/50">stars</span>
                   <span className="text-base font-bold tracking-[0.2em]">修得称号</span>
                 </div>
                 <span className="material-symbols-outlined text-sm opacity-40">chevron_right</span>
               </button>
               <button className="w-full flex items-center justify-between p-6 bg-white/40 rounded-xl border border-wood/5 hover:bg-white transition-all shadow-sm">
                 <div className="flex items-center gap-4 text-ink/70">
                   <span className="material-symbols-outlined text-wood/50">history</span>
                   <span className="text-base font-bold tracking-[0.2em]">习读足迹</span>
                 </div>
                 <span className="material-symbols-outlined text-sm opacity-40">chevron_right</span>
               </button>
             </div>
           </div>
        )}
      </main>

      <nav className="fixed bottom-0 w-full bg-xuan/95 backdrop-blur-xl border-t border-wood/10 px-8 py-3 flex justify-between items-center pb-8 shadow-[0_-8px_20px_rgba(0,0,0,0.05)] z-50">
        <div 
          onClick={() => { setActiveTab(AppTab.HOME); setViewState(ViewState.SEARCH); setSearchQuery(''); }} 
          className={`flex flex-col items-center gap-1 cursor-pointer transition-all ${activeTab === AppTab.HOME ? 'text-vermilion scale-110 font-bold' : 'text-ink/40'}`}
        >
          <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: activeTab === AppTab.HOME ? "'FILL' 1" : "" }}>home</span>
          <span className="text-[10px]">主页</span>
        </div>
        
        <div 
          onClick={() => { setActiveTab(AppTab.RECITE_TAB); setViewState(ViewState.SEARCH); }} 
          className={`flex flex-col items-center gap-1 cursor-pointer transition-all ${activeTab === AppTab.RECITE_TAB ? 'text-vermilion scale-110 font-bold' : 'text-ink/40'}`}
        >
          <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: activeTab === AppTab.RECITE_TAB ? "'FILL' 1" : "" }}>history_edu</span>
          <span className="text-[10px]">背诵</span>
        </div>

        <div 
          onClick={() => setActiveTab(AppTab.LIBRARY)} 
          className={`flex flex-col items-center gap-1 cursor-pointer transition-all ${activeTab === AppTab.LIBRARY ? 'text-bamboo scale-110 font-bold' : 'text-ink/40'}`}
        >
          <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: activeTab === AppTab.LIBRARY ? "'FILL' 1" : "" }}>auto_stories</span>
          <span className="text-[10px]">书架</span>
        </div>

        <div 
          onClick={() => setActiveTab(AppTab.PROFILE)} 
          className={`flex flex-col items-center gap-1 cursor-pointer transition-all ${activeTab === AppTab.PROFILE ? 'text-wood scale-110 font-bold' : 'text-ink/40'}`}
        >
          <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: activeTab === AppTab.PROFILE ? "'FILL' 1" : "" }}>person_book</span>
          <span className="text-[10px]">斋号</span>
        </div>
      </nav>
    </div>
  );
}
