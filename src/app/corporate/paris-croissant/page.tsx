"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  Scale,
  ShieldCheck,
  HeartHandshake,
  Eye,
  AlertCircle,
  FileText,
  CheckCircle2,
  UserCheck,
  Building2,
  FileCheck,
  Mail,
  Download,
  ArrowUpRight
} from "lucide-react";
import { SiteFooter } from "@/components/site-footer";

const cpElements = [
  {
    title: "최고경영자의 자율준수 의지 및 지원",
    description: "최고경영자는 공정거래 자율 준수의지와 방침을 공개적으로 표명하고, CP 운영을 적극 지원합니다.",
    icon: UserCheck,
  },
  {
    title: "자율준수관리자 임명",
    description: "최고 의사결정기구(이사회)는 효과적인 CP 운영에 대한 책임을 부여하기 위해 자율준수관리자를 임명합니다.",
    icon: ShieldCheck,
  },
  {
    title: "자율준수편람 제작·활용",
    description: "임직원이 업무에 참고할 수 있도록 공정거래 관련 법규 및 CP의 기준과 절차에 관한 편람을 작성합니다.",
    icon: FileText,
  },
  {
    title: "지속적이고 체계적인 자율준수 교육",
    description: "CP 기준과 절차 및 공정거래 관련 법규 준수 사항에 대해 임직원을 대상으로 정기 교육을 실시합니다.",
    icon: FileCheck,
  },
  {
    title: "법규 위반 임직원 제재",
    description: "내규에 따라 법규 위반행위의 중대성에 따라 해당 임직원에게 엄격하게 제재를 가합니다.",
    icon: AlertCircle,
  },
  {
    title: "내부감시체계 구축",
    description: "위반행위의 사전 예방을 위한 내부 감독 시스템을 구축하고 그 결과를 이사회에 정기 보고합니다.",
    icon: Eye,
  },
  {
    title: "효과성 평가와 개선조치",
    description: "CP 기준, 절차, 운용 등에 대한 자체 점검과 감사를 실시한 후, 문제점을 찾아내어 개선합니다.",
    icon: CheckCircle2,
  },
  {
    title: "CP 기준과 절차 마련 및 시행",
    description: "실질적인 공정거래 관련 법규 준수 및 실천을 담보하기 위한 사내 기준과 절차를 지속 정비합니다.",
    icon: Building2,
  },
];

export default function ParisCroissantCompliancePage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="bg-white text-[#171717]">
      {/* GNB (LG Ensol Corporate Style) */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-in-out ${
          scrolled ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-200 py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 md:px-12">
          {/* Logo Area */}
          <Link href="/corporate/paris-croissant" className="flex items-center gap-4">
            <span className={`block h-[1px] w-8 ${scrolled ? "bg-black" : "bg-white"} transition-colors`} />
            <div>
              <p className={`text-[10px] font-bold uppercase tracking-[0.4em] ${scrolled ? "text-gray-500" : "text-white/60"} transition-colors`}>
                PARIS CROISSANT CORP.
              </p>
              <p className={`mt-0.5 text-[22px] font-semibold tracking-[-0.04em] ${scrolled ? "text-black" : "text-white"} transition-colors`}>
                파리크라상
              </p>
            </div>
          </Link>

          {/* Nav Area */}
          <nav className="hidden items-center gap-12 lg:flex">
            {["CEO 메시지", "행동강령", "CP 8대 요소", "제보센터"].map((item, idx) => {
              const hrefLinks = ["#ceo-message", "#code-of-conduct", "#cp-elements", "#reporting"];
              return (
                <a
                  key={item}
                  href={hrefLinks[idx]}
                  className={`group relative py-2 text-[15px] font-bold tracking-wide transition-colors ${
                    scrolled ? "text-gray-800 hover:text-black" : "text-white/80 hover:text-white"
                  }`}
                >
                  {item}
                  {/* Hover Indicator */}
                  <span className={`absolute bottom-0 left-0 h-[2px] w-0 transition-all duration-300 group-hover:w-full ${
                    scrolled ? "bg-black" : "bg-white"
                  }`} />
                </a>
              );
            })}
          </nav>

          {/* Right Utils */}
          <div className="hidden items-center gap-4 lg:flex">
            <Link
              href="/"
              className={`rounded-full px-5 py-2.5 text-[13px] font-bold uppercase tracking-wider transition-all ${
                scrolled
                  ? "border border-gray-300 text-black hover:border-black hover:bg-black hover:text-white"
                  : "border border-white/40 text-white hover:bg-white hover:text-black"
              }`}
            >
              파리크라상 메인
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section (100vh) */}
      <section className="relative flex h-[100vh] min-h-[800px] w-full flex-col justify-center overflow-hidden">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 bg-[#0a0a0a]">
          <div className="absolute inset-0 scale-105 bg-[url('https://d2afncas1tel3t.cloudfront.net/wp-content/uploads/2023/11/1620608772.jpg')] bg-cover bg-center opacity-40 transition-transform duration-[20s] hover:scale-100" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50" />
        </div>

        {/* Hero Content */}
        <div className="relative mx-auto mt-20 w-full max-w-[1600px] px-6 text-center text-white md:px-12">
          <p className="inline-block border-b-[2px] border-white/50 pb-2 text-[13px] font-bold uppercase tracking-[0.6em] text-white">
            Compliance Program
          </p>
          <h1 className="mt-10 font-display text-[56px] font-medium leading-[1.1] tracking-tight sm:text-[80px] lg:text-[100px]">
            공정거래 <br />
            자율준수프로그램
          </h1>
          <p className="mx-auto mt-10 max-w-2xl text-[18px] font-light leading-relaxed text-white/80 sm:text-[22px]">
            기업활동에서 경쟁질서를 확립하고 관련 법규를 스스로 준수하기 위해 운영하는 자발적 준법 내부 통제 시스템입니다.
          </p>

          <div className="mt-14 flex flex-col items-center justify-center gap-6 sm:flex-row">
            <a 
              href="https://www.paris.co.kr/wp-content/uploads/2025/01/CP_%EC%9A%B4%EC%98%81%EA%B7%9C%EC%A0%95.pdf" 
              target="_blank" 
              rel="noreferrer" 
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full border border-white/50 bg-transparent px-8 py-4 text-[15px] font-bold tracking-wide text-white transition-all hover:border-white"
            >
              <span className="relative z-10 transition-colors duration-500 group-hover:text-black">CP 운영규정 다운로드</span>
              <Download className="relative z-10 h-5 w-5 transition-colors duration-500 group-hover:text-black" />
              <div className="absolute inset-0 z-0 h-full w-full -translate-x-full bg-white transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-x-0" />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3 text-white/50">
          <span className="text-[11px] font-bold uppercase tracking-widest">Scroll</span>
          <div className="h-14 w-[1px] bg-white/20">
            <div className="h-1/2 w-full animate-bounce bg-white" />
          </div>
        </div>
      </section>

      {/* CEO Message - LG Style Asymmetric Grid & Big Typos */}
      <section id="ceo-message" className="mx-auto max-w-[1600px] border-b border-gray-200 px-6 py-24 sm:px-12 lg:py-40">
        <div className="grid gap-16 lg:grid-cols-[1fr_2fr] lg:gap-32">
          {/* Left Title */}
          <div className="lg:border-r lg:border-gray-200 lg:pr-12">
            <div className="flex h-full flex-col justify-between">
              <div>
                <p className="text-[13px] font-bold uppercase tracking-[0.3em] text-gray-500">CEO Message</p>
                <h2 className="mt-8 font-display text-[48px] font-medium leading-[1.1] tracking-[-0.03em] sm:text-[64px]">
                  대표이사 <br />
                  메시지
                </h2>
              </div>
              <div className="mt-16 hidden lg:block">
                <p className="text-[32px] font-semibold text-black">도세호</p>
                <p className="mt-2 text-[15px] text-gray-500">주식회사 파리크라상 대표이사</p>
              </div>
            </div>
          </div>
          
          {/* Right Content */}
          <div className="relative flex flex-col justify-center">
            <svg className="absolute -left-12 -top-12 h-24 w-24 text-gray-100" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
            </svg>
            <div className="relative space-y-8 text-[18px] font-light leading-[1.8] text-gray-700 sm:text-[22px]">
              <p>
                존경하는 임직원 여러분, 안녕하십니까. <br />
                2025년 11월 3일부로 (주)파리크라상의 대표이사로 취임한 도세호입니다.
              </p>
              <p>
                지난 2024년 9월 30일 당사는 공정거래 자율준수프로그램(Compliance Program)의 도입을 대내외에 공식 선포하며, 
                공정거래 관련 법규 준수 및 자율준수 문화 확산을 위해 CP시스템을 체계적으로 구축하였습니다. 
                또한 제과업계 최초로 글로벌 스탠다드 수준의 Compliance Program을 도입 운용하고 있으며, 
                2025년 4월 당사를 포함한 SPC그룹은 준법경영 선포식을 개최하며 전사적인 준법문화 정립에 대한 의지를 공고히 하였습니다.
              </p>
              <p>
                당사가 자율준수 프로그램을 준수하며 공정하게 경쟁하고 법을 준수하는 모범 기업으로 자리매김하고, 
                더욱 신뢰받는 글로벌 종합식품기업으로서 지속 성장할 수 있도록 아낌없는 지원과 노력을 기울일 것입니다.
              </p>
              <p>
                임직원 여러분께서도 <strong>'준법 및 컴플라이언스'를 업무의 핵심 가치</strong>로 삼고 
                자율준수 프로그램의 내용을 숙지하여 각 업무에서 법 위반이 발생하지 않도록 각별히 유의해 주시길 당부 드립니다. 감사합니다.
              </p>
              <div className="mt-12 block border-t border-gray-200 pt-8 lg:hidden">
                <p className="text-[24px] font-semibold text-black">도세호</p>
                <p className="mt-1 text-[14px] text-gray-500">주식회사 파리크라상 대표이사</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Code of Conduct - Clean Light Gray BG */}
      <section id="code-of-conduct" className="bg-[#fcfcfc] px-6 py-24 sm:px-12 lg:py-40">
        <div className="mx-auto max-w-[1600px]">
          <div className="flex flex-col items-start lg:flex-row lg:justify-between lg:items-end">
            <div>
              <p className="text-[13px] font-bold uppercase tracking-[0.3em] text-gray-400">Code of Conduct</p>
              <h2 className="mt-4 font-display text-[42px] font-medium leading-[1.15] tracking-[-0.03em] sm:text-[56px]">
                컴플라이언스 행동강령
              </h2>
            </div>
            <p className="mt-6 max-w-lg text-[16px] leading-relaxed text-gray-500 lg:mt-0 lg:text-right">
              자유롭고 공정한 경쟁, 그리고 윤리경영이 만들어가는<br className="hidden lg:block"/> 신뢰받는 파리크라상의 원칙입니다.
            </p>
          </div>
          
          <div className="mt-20 grid gap-0 border border-gray-200 bg-gray-200 md:grid-cols-3">
            {[ 
              { icon: Scale, num: "첫째", title: "관련 법규 철저 준수 및 자유로운 경쟁 기반 활동", desc: "우리는 관련 법규를 철저히 준수하며 자유로운 경쟁에 바탕한 기업 활동을 영위합니다." },
              { icon: HeartHandshake, num: "둘째", title: "불공정거래행위 차단 및 상생의 가치 실천", desc: "우리는 협력사를 포함한 거래 관계에서 불공정거래행위를 차단하고 상생의 가치를 실천합니다." },
              { icon: ShieldCheck, num: "셋째", title: "공정거래 자율준수 문화를 위한 FAIRWAY 정착", desc: "우리는 공정거래 자율준수 문화 확산을 위한 파리크라상 FAIRWAY 정착에 앞장섭니다." }
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="group relative bg-white p-12 transition-all hover:z-10 hover:shadow-[0_40px_80px_rgba(0,0,0,0.08)] lg:p-16">
                  <div className="mb-12 inline-flex h-16 w-16 items-center justify-center bg-gray-100 text-black transition-colors group-hover:bg-black group-hover:text-white">
                    <Icon className="h-7 w-7" />
                  </div>
                  <p className="text-[14px] font-bold tracking-widest text-black/40">{item.num}</p>
                  <h3 className="mt-6 min-h-[80px] text-[24px] font-semibold leading-[1.3] tracking-tight text-black">
                    {item.title}
                  </h3>
                  <p className="mt-8 text-[16px] font-light leading-relaxed text-gray-600">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CP 8 Elements - Technical & Minimal */}
      <section id="cp-elements" className="mx-auto max-w-[1600px] border-t border-gray-200 px-6 py-24 sm:px-12 lg:py-40">
        <div className="mb-20 flex flex-col items-start justify-between border-b border-gray-300 pb-12 lg:flex-row lg:items-end">
           <div>
             <p className="text-[13px] font-bold uppercase tracking-[0.3em] text-gray-500">Core Elements</p>
             <h2 className="mt-4 font-display text-[42px] font-medium leading-[1.1] tracking-[-0.03em] sm:text-[56px]">
               CP의 핵심 8대 요소
             </h2>
           </div>
           <p className="mt-6 text-[18px] text-gray-600 lg:mt-0">체계적인 공정거래 준수를 위한 파리크라상의 전략</p>
        </div>
        
        <div className="grid grid-cols-1 gap-x-12 gap-y-16 border-gray-200 sm:grid-cols-2 lg:grid-cols-4">
          {cpElements.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="group flex flex-col">
                <div className="flex items-center justify-between border-b border-gray-200 pb-6 transition-colors group-hover:border-black">
                  <span className="font-display text-[32px] font-light text-gray-300 transition-colors group-hover:text-black">
                    0{index + 1}
                  </span>
                  <Icon className="h-8 w-8 text-gray-300 transition-colors group-hover:text-black" />
                </div>
                <h3 className="mt-6 text-[22px] font-semibold leading-[1.35] tracking-tight text-black">
                  {item.title}
                </h3>
                <p className="mt-4 text-[15px] font-light leading-[1.7] text-gray-600">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Contact & Reporting - Dark Section to wrap up */}
      <section id="reporting" className="bg-[#111] text-white">
        <div className="mx-auto flex max-w-[1600px] flex-col lg:flex-row">
          
          <div className="flex-1 border-b border-white/10 p-8 py-20 sm:p-16 lg:border-b-0 lg:border-r lg:py-32">
            <p className="text-[13px] font-bold uppercase tracking-[0.3em] text-white/40">Compliance Officer</p>
            <h2 className="mt-4 font-display text-[40px] font-medium leading-[1.2] tracking-tight sm:text-[48px]">
              자율준수관리자 인사말
            </h2>
            <div className="mt-12 space-y-8 text-[17px] font-light leading-[1.8] text-white/70">
              <p>안녕하십니까, 자율준수관리자 <strong className="font-semibold text-white">이승환</strong>입니다.</p>
              <p>당사는 2024년 공정거래 자율준수프로그램(CP)을 도입하였으며, 관련 법규를 체계적으로 준수할 수 있도록 내부 준법시스템을 단계적으로 구축해 나가고 있습니다.</p>
              <p>자율준수관리자로서 저는 공정거래 관련 법규 및 내부 기준의 준수 여부를 지속적으로 점검하고, 임직원 여러분이 업무 수행 과정에서 법적 리스크를 사전에 인지하고 올바른 판단을 내릴 수 있도록 교육·절차·기준을 꾸준히 정비해 나가겠습니다.</p>
              <p>CP가 형식에 그치지 않고 회사 전반의 업무에 정착될 수 있도록 효과적으로 관리·감독하겠습니다.</p>
            </div>
          </div>
          
          <div className="flex-1 p-8 py-20 sm:p-16 lg:py-32">
            <p className="text-[13px] font-bold uppercase tracking-[0.3em] text-white/40">Reporting Center</p>
            <h2 className="mt-4 font-display text-[40px] font-medium leading-[1.2] tracking-tight sm:text-[48px]">
              분쟁조정 및 제보센터
            </h2>
            
            <div className="mt-12 space-y-16">
              {/* Box 1 */}
              <div>
                <h3 className="text-[22px] font-semibold text-white">자율분쟁조정협의회</h3>
                <p className="mt-4 text-[16px] font-light leading-relaxed text-white/60">
                  가맹본부와 가맹사업자 간에 발생할 수 있는 분쟁을 조정하기 위해 내부 자율분쟁조정협의회를 운영합니다. 분쟁조정을 희망하는 가맹사업자께서는 신청서를 아래 연락처로 제출해 주시기 바랍니다.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <a href="mailto:pccp@spc.co.kr" className="group flex items-center gap-3 border-b border-white/30 pb-2 text-[15px] transition-colors hover:border-white">
                    <Mail className="h-5 w-5 text-white/50 group-hover:text-white" />
                    pccp@spc.co.kr
                  </a>
                  <a href="tel:02-2276-6612" className="group flex items-center gap-3 border-b border-white/30 pb-2 text-[15px] transition-colors hover:border-white">
                    02-2276-6612 / 6069
                  </a>
                </div>
              </div>

              {/* Box 2 */}
              <div>
                <h3 className="text-[22px] font-semibold text-white">공정거래제보 신고센터</h3>
                <p className="mt-4 text-[16px] font-light leading-relaxed text-white/60">
                  공정거래, 가맹사업 법규, 하도급 법규 위반행위에 대해 제보를 받는 공간입니다. 제보자의 신원은 철저히 보호되며 어떠한 불이익도 발생하지 않습니다.
                </p>
                <div className="mt-10">
                  <a href="https://sangmidang.co.kr/compliance/hotline" target="_blank" rel="noreferrer" className="group inline-flex items-center gap-3 overflow-hidden rounded-full bg-white px-8 py-4 text-[15px] font-bold text-black transition-all hover:bg-gray-200">
                    파리크라상 핫라인 제보
                    <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
