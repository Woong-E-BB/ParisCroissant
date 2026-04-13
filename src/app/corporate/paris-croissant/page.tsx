import Link from "next/link";
import {
  ArrowUpRight,
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
  Download
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
  return (
    <main className="bg-[#171717] text-[#f6f2e9]">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#171717]/90 backdrop-blur">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-6 px-5 py-4 sm:px-8">
          <Link href="/corporate/paris-croissant" className="min-w-0">
            <p className="text-[11px] uppercase tracking-[0.34em] text-white/50">PARIS CROISSANT CORP.</p>
            <p className="mt-1 text-[25px] font-semibold tracking-[-0.04em] text-white">파리크라상</p>
          </Link>

          <nav className="hidden items-center gap-8 text-[15px] font-semibold text-white/60 lg:flex">
            <a href="#ceo-message" className="transition hover:text-white">CEO 메시지</a>
            <a href="#code-of-conduct" className="transition hover:text-white">행동강령</a>
            <a href="#cp-elements" className="transition hover:text-white">CP 8대 요소</a>
            <a href="#reporting" className="transition hover:text-white">제보센터</a>
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Link href="/" className="rounded-full bg-white px-4 py-2 text-[13px] font-semibold text-[#171717] transition hover:bg-white/90">
              파리크라상 메인
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative flex min-h-[50vh] flex-col justify-end overflow-hidden pb-16 pt-32 lg:min-h-[70vh]">
        <div className="absolute inset-0 bg-[url('https://d2afncas1tel3t.cloudfront.net/wp-content/uploads/2023/11/1620608772.jpg')] bg-cover bg-center opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#171717] via-[#171717]/80 to-transparent" />
        
        <div className="relative mx-auto w-full max-w-[1440px] px-5 sm:px-8">
          <p className="text-[13px] uppercase tracking-[0.4em] text-[#d4af37]">Compliance Program</p>
          <h1 className="mt-6 font-display text-[50px] leading-[1.1] tracking-tight sm:text-[72px] lg:text-[96px]">
            공정거래 <br />
            자율준수프로그램
          </h1>
          <p className="mt-6 max-w-2xl text-[18px] leading-8 text-white/70 sm:text-[20px]">
            기업이 경제활동을 하는 데 있어 경쟁질서를 확립하고, 공정거래 관련 법규를 스스로 준수하기 위해 
            자체적으로 제정하고 운영하는 교육·감독 등 내부 준법 시스템입니다.
          </p>
          <div className="mt-10">
            <a 
              href="https://www.paris.co.kr/wp-content/uploads/2025/01/CP_%EC%9A%B4%EC%98%81%EA%B7%9C%EC%A0%95.pdf" 
              target="_blank" 
              rel="noreferrer" 
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 py-4 pl-6 pr-5 text-[15px] font-medium backdrop-blur transition hover:bg-white/10"
            >
              CP 운영규정 다운로드
              <Download className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* CEO Message */}
      <section id="ceo-message" className="mx-auto max-w-[1440px] px-5 py-24 sm:px-8 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div>
            <p className="text-[13px] uppercase tracking-[0.3em] text-white/40">CEO Message</p>
            <h2 className="mt-4 font-display text-[42px] leading-tight tracking-[-0.03em] sm:text-[52px]">
              대표이사 메시지
            </h2>
          </div>
          <div className="relative">
            <svg className="absolute -left-12 -top-12 h-24 w-24 text-white/5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
            </svg>
            <div className="relative space-y-6 text-[17px] leading-[1.8] text-white/70">
              <p>
                존경하는 임직원 여러분, 안녕하십니까. 
                2025년 11월 3일부로 (주)파리크라상의 대표이사로 취임한 도세호입니다.
              </p>
              <p>
                지난 2024년 9월 30일 당사는 공정거래 자율준수프로그램(Compliance Program)의 도입을 대내외에 공식 선포하며, 
                공정거래 관련 법규 준수 및 자율준수 문화 확산을 위해 CP시스템을 체계적으로 구축하였습니다.
                또한 제과업계 최초로 글로벌 스탠다드 수준의 Compliance Program을 도입 운용하고 있으며, 
                2025년 4월 당사를 포함한 SPC그룹은 준법경영 선포식을 개최하며 전사적인 준법문화 정립에 대한 의지를 공고히 하였습니다.
              </p>
              <p>
                본 대표이사는 당사가 자율준수 프로그램을 준수하며 공정하게 경쟁하고 법을 준수하는 모범 기업으로 자리매김하고, 
                더욱 신뢰받는 글로벌 종합식품기업으로서 지속 성장할 수 있도록 아낌없는 지원과 노력을 기울일 것입니다.
              </p>
              <p>
                이에 임직원 여러분께서도 '준법 및 컴플라이언스'를 업무의 핵심 가치로 삼고 
                자율준수 프로그램의 내용을 숙지하여 각 업무에서 법 위반이 발생하지 않도록 각별히 유의해 주시길 당부 드립니다. 감사합니다.
              </p>
              <div className="mt-10 border-t border-white/10 pt-8">
                <p className="text-[20px] font-semibold text-white">도세호</p>
                <p className="mt-1 text-[14px] text-white/50">주식회사 파리크라상 대표이사</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Code of Conduct */}
      <section id="code-of-conduct" className="bg-[#f6f2e9] px-5 py-24 text-[#171717] sm:px-8 lg:py-32">
        <div className="mx-auto max-w-[1440px]">
          <div className="text-center">
            <p className="text-[13px] uppercase tracking-[0.3em] text-black/40">Code of Conduct</p>
            <h2 className="mt-4 font-display text-[42px] leading-tight tracking-[-0.03em] sm:text-[52px]">
              컴플라이언스 행동강령
            </h2>
          </div>
          
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            <div className="group rounded-[32px] bg-white p-10 transition hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)]">
              <div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-[#171717] text-white">
                <Scale className="h-7 w-7" />
              </div>
              <p className="text-[14px] font-semibold tracking-widest text-[#d4af37]">첫째,</p>
              <p className="mt-4 text-[22px] font-semibold leading-snug tracking-tight text-[#171717]">
                관련 법규 철저 준수 및 <br /> 
                자유로운 경쟁 기업 활동 영위
              </p>
              <p className="mt-5 text-[16px] leading-relaxed text-black/60">
                우리는 관련 법규를 철저히 준수하며 자유로운 경쟁에 바탕한 기업 활동을 영위합니다.
              </p>
            </div>
            
            <div className="group rounded-[32px] bg-white p-10 transition hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)]">
              <div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-[#171717] text-white">
                <HeartHandshake className="h-7 w-7" />
              </div>
              <p className="text-[14px] font-semibold tracking-widest text-[#d4af37]">둘째,</p>
              <p className="mt-4 text-[22px] font-semibold leading-snug tracking-tight text-[#171717]">
                불공정거래행위 차단 및 <br /> 
                상생의 가치 실천
              </p>
              <p className="mt-5 text-[16px] leading-relaxed text-black/60">
                우리는 협력사를 포함한 거래 관계에서 불공정거래행위를 차단하고 상생의 가치를 실천합니다.
              </p>
            </div>
            
            <div className="group rounded-[32px] bg-white p-10 transition hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)]">
              <div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-[#171717] text-white">
                <ShieldCheck className="h-7 w-7" />
              </div>
              <p className="text-[14px] font-semibold tracking-widest text-[#d4af37]">셋째,</p>
              <p className="mt-4 text-[22px] font-semibold leading-snug tracking-tight text-[#171717]">
                공정거래 자율준수 문화 확산을 <br /> 
                위한 FAIRWAY 정착
              </p>
              <p className="mt-5 text-[16px] leading-relaxed text-black/60">
                우리는 공정거래 자율준수 문화 확산을 위한 파리크라상 FAIRWAY 정착에 앞장섭니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CP 8 Elements */}
      <section id="cp-elements" className="mx-auto max-w-[1440px] px-5 py-24 sm:px-8 lg:py-32">
        <div className="mb-16">
           <p className="text-[13px] uppercase tracking-[0.3em] text-white/40">Core Elements</p>
           <h2 className="mt-4 font-display text-[42px] leading-tight tracking-[-0.03em] sm:text-[52px]">
             CP의 핵심 8대 요소
           </h2>
        </div>
        
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cpElements.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="group relative overflow-hidden rounded-[24px] border border-white/10 bg-white/5 p-8 transition hover:bg-white/10">
                <div className="text-[60px] font-display font-black tracking-tighter text-white/5 transition group-hover:text-white/10">
                  0{index + 1}
                </div>
                <div className="mt-6 flex h-12 w-12 items-center justify-center rounded-full bg-[#d4af37]/20 text-[#d4af37]">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 min-h-[60px] text-[20px] font-semibold leading-snug text-white">
                  {item.title}
                </h3>
                <p className="mt-4 text-[15px] leading-relaxed text-white/60">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Compliance Officer & Dispute center */}
      <section id="reporting" className="border-t border-white/10">
        <div className="mx-auto grid max-w-[1440px] lg:grid-cols-2">
          <div className="border-b border-white/10 p-8 py-20 lg:border-b-0 lg:border-r sm:p-16 lg:py-24">
            <h2 className="font-display text-[36px] tracking-tight text-[#d4af37]">
              자율준수관리자 인사말
            </h2>
            <div className="mt-8 space-y-5 text-[16px] leading-[1.8] text-white/70">
              <p>안녕하십니까, 자율준수관리자 <strong>이승환</strong>입니다.</p>
              <p>당사는 2024년 공정거래 자율준수프로그램(CP)을 도입하였으며, 관련 법규를 체계적으로 준수할 수 있도록 내부 준법시스템을 단계적으로 구축해 나가고 있습니다.</p>
              <p>자율준수관리자로서 저는 공정거래 관련 법규 및 내부 기준의 준수 여부를 지속적으로 점검하고, 임직원 여러분이 업무 수행 과정에서 법적 리스크를 사전에 인지하고 올바른 판단을 내릴 수 있도록 교육·절차·기준을 꾸준히 정비해 나가겠습니다.</p>
              <p>CP가 형식에 그치지 않고 회사 전반의 업무에 정착될 수 있도록 효과적으로 관리·감독하겠습니다.</p>
            </div>
          </div>
          
          <div className="p-8 py-20 sm:p-16 lg:py-24">
            <h2 className="font-display text-[36px] tracking-tight">
              분쟁조정 및 제보센터
            </h2>
            
            <div className="mt-12 space-y-10">
              <div>
                <h3 className="text-[20px] font-semibold text-[#d4af37]">자율분쟁조정협의회</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-white/60">
                  가맹본부와 가맹사업자 간에 발생할 수 있는 분쟁을 조정하기 위해 내부 자율분쟁조정협의회를 운영합니다.
                  분쟁조정을 희망하는 가맹사업자께서는 신청서를 아래 메일로 제출해 주시기 바랍니다.
                </p>
                <div className="mt-5 flex flex-wrap gap-4">
                  <a href="mailto:pccp@spc.co.kr" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-3 text-[14px]">
                    <Mail className="h-4 w-4" />
                    pccp@spc.co.kr
                  </a>
                  <a href="tel:02-2276-6612" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-3 text-[14px]">
                    02-2276-6612 / 6069
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-[20px] font-semibold text-[#d4af37]">공정거래제보 신고센터</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-white/60">
                  공정거래, 가맹사업 법규, 하도급 법규 위반행위에 대해 제보를 받는 공간입니다.
                  제보자의 신원은 철저히 보호되며 어떠한 불이익도 발생하지 않습니다.
                </p>
                <div className="mt-5">
                  <a href="https://sangmidang.co.kr/compliance/hotline" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-[15px] font-bold text-[#171717] transition hover:bg-white/90">
                    파리크라상 핫라인 제보
                    <ArrowUpRight className="h-4 w-4" />
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
