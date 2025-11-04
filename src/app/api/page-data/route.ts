import { NextResponse } from 'next/server'
import {
  avatar,
  innovation,
  WebResultTag,
  faq,
} from '@/app/types/menu'

const avatarList: avatar[] = [
  {
    image: '/images/home/avatar_1.jpg',
    title: 'Sarah Johnson',
  },
  {
    image: '/images/home/avatar_2.jpg',
    title: 'Olivia Miller',
  },
  {
    image: '/images/home/avatar_3.jpg',
    title: 'Sophia Roberts',
  },
  {
    image: '/images/home/avatar_4.jpg',
    title: 'Isabella Clark',
  },
]

const innovationList: innovation[] = [
  {
    image: '/images/home/services/calculation.svg',
    title: 'Automated Bookkeeping',
    description: 'Streamline your financial records with our cloud-based automated bookkeeping system that ensures accuracy and compliance.',
    bg_color: 'bg-purple/20',
    txt_color: 'text-purple',
  },
  {
    image: '/images/home/services/working-time.svg',
    title: 'CFO Services',
    description: 'Get strategic financial leadership and expert guidance to drive your business growth and profitability.',
    bg_color: 'bg-blue/20',
    txt_color: 'text-blue',
  },
  {
    image: '/images/home/services/book.svg',
    title: 'Tax Compliance',
    description: 'Stay compliant with Nigerian tax regulations through our expert tax preparation and filing services.',
    bg_color: 'bg-orange/20',
    txt_color: 'text-orange',
  },
  {
    image: '/images/home/services/health-report.svg',
    title: 'Financial Reporting',
    description: 'Access real-time financial insights and comprehensive reports to make informed business decisions.',
    bg_color: 'bg-green/20',
    txt_color: 'text-green',
  },
  {
    image: '/images/home/services/settings.svg',
    title: 'Business Intelligence',
    description: 'Transform your financial data into actionable insights with advanced analytics and business intelligence tools.',
    bg_color: 'bg-pink/20',
    txt_color: 'text-pink',
  },
]

const WebResultTagList: WebResultTag[] = [
  {
    image: '/images/home/result/expert-accountants.svg',
    name: 'Expert Nigerian Accountants',
    bg_color: 'bg-green/20',
    txt_color: 'text-green',
  },
  {
    image: '/images/home/result/technology-driven.svg',
    name: 'Technology-Driven',
    bg_color: 'bg-blue/20',
    txt_color: 'text-blue',
  },
  {
    image: '/images/home/result/scalable-solutions.svg',
    name: 'Scalable Solutions',
    bg_color: 'bg-orange/20',
    txt_color: 'text-orange',
  },
]

const faqList: faq[] = [
  {
    faq_que: 'What financial services does FunnelFit offer?',
    faq_ans:
      'FunnelFit provides comprehensive financial solutions including automated bookkeeping, fractional CFO services, tax compliance, financial reporting, and business intelligence analytics specifically designed for Nigerian businesses.',
  },
  {
    faq_que: 'How does your automated bookkeeping work?',
    faq_ans:
      'Our cloud-based automated bookkeeping system integrates with your existing business tools to track income, expenses, and transactions in real-time. We ensure compliance with Nigerian accounting standards and provide monthly financial reports.',
  },
  {
    faq_que: 'What is a fractional CFO and do I need one?',
    faq_ans:
      'A fractional CFO provides part-time strategic financial leadership without the full-time cost. If your business needs financial planning, investor relations, or growth strategy but cannot justify a full-time CFO, our fractional CFO service is perfect for you.',
  },
  {
    faq_que: 'How do you ensure Nigerian tax compliance?',
    faq_ans:
      'Our team of certified Nigerian accountants stays updated with FIRS regulations, VAT requirements, and local tax laws. We handle tax preparation, filing, and ensure your business meets all regulatory compliance requirements.',
  },
  {
    faq_que: 'How quickly can you set up our financial systems?',
    faq_ans:
      'Most businesses are fully onboarded within 2-3 weeks. This includes system integration, historical data migration, team training, and establishing automated reporting workflows tailored to your business needs.',
  },
  {
    faq_que: 'What makes FunnelFit different from traditional accounting firms?',
    faq_ans:
      'We combine traditional accounting expertise with modern technology and deep understanding of Nigerian business environment. Our cloud-based solutions provide real-time insights, automated processes, and strategic financial guidance that traditional firms often lack.',
  },
]

export const GET = async () => {
  return NextResponse.json({
    avatarList,
    innovationList,
    WebResultTagList,
    faqList,
  });
};
