import Link from "next/link";
import { Check, X, Crown, Star } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { TIER_LIST } from "@/lib/config";
import { formatEgp } from "@/lib/utils";

export const metadata = {
  title: "الأسعار والباقات",
  description: "اختار الباقة اللي تليق بفرحك — الأساسي ٥٠ ج، بريميام ١٢٠ ج، VIP ٣٠٠ ج",
};

export default function PricingPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="bg-gradient-to-b from-gold-50/40 to-transparent py-14">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h1 className="font-display text-3xl font-bold text-ink-900 sm:text-5xl">
            باقات تليق بفرحك
          </h1>
          <p className="mt-3 text-ink-600">سعر واحد، دفعة واحدة، دعوة مدى الحياة</p>
        </div>
      </div>

      <section className="mx-auto max-w-7xl px-4 pb-20">
        <div className="grid gap-6 lg:grid-cols-3">
          {TIER_LIST.map((t) => (
            <div
              key={t.id}
              className={`relative flex flex-col rounded-3xl p-8 shadow-xl ring-1 ${
                t.highlighted
                  ? "bg-gradient-to-b from-ink-900 to-ink-800 text-white ring-gold-500"
                  : "bg-white text-ink-900 ring-gold-100"
              }`}
            >
              {t.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-l from-gold-500 to-rose-500 px-4 py-1 text-xs font-bold text-white shadow-lg">
                  الأكثر طلباً ⭐
                </div>
              )}

              <div className="flex items-center gap-2">
                {t.id === "vip" && <Crown className="h-5 w-5 text-gold-500" />}
                {t.id === "premium" && <Star className="h-5 w-5 fill-rose-400 text-rose-400" />}
                <h2 className="font-display text-2xl font-bold">{t.nameAr}</h2>
              </div>
              <p className={`mt-1 text-sm ${t.highlighted ? "text-ink-300" : "text-ink-500"}`}>
                {t.tagline}
              </p>

              <div className="mt-6">
                <span
                  className={`font-display text-5xl font-bold ${
                    t.highlighted ? "text-gold-400" : "text-gold-700"
                  }`}
                >
                  {formatEgp(t.price)}
                </span>
                <span className={`ml-1 text-sm ${t.highlighted ? "text-ink-300" : "text-ink-500"}`}>
                  / دفعة واحدة
                </span>
              </div>

              <ul className="mt-6 flex-1 space-y-2.5">
                {t.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    {f.included ? (
                      <Check className={`h-4 w-4 flex-none ${t.highlighted ? "text-gold-400" : "text-emerald-600"}`} />
                    ) : (
                      <X className={`h-4 w-4 flex-none ${t.highlighted ? "text-ink-500" : "text-ink-300"}`} />
                    )}
                    <span className={f.included ? "" : "opacity-50 line-through"}>{f.ar}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/templates"
                className={`mt-8 block rounded-full px-6 py-3 text-center font-bold transition hover:scale-[1.02] ${
                  t.highlighted
                    ? "bg-gold-gradient text-ink-900 shadow-xl"
                    : "bg-gradient-to-l from-gold-600 to-rose-600 text-white shadow-lg"
                }`}
              >
                اختار {t.nameAr}
              </Link>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-3xl rounded-3xl bg-gold-50 p-6 text-center ring-1 ring-gold-200">
          <p className="font-bold text-ink-900">💎 محتاج باقة مخصصة لفرح كبير؟</p>
          <p className="mt-1 text-sm text-ink-600">
            تواصل معانا واتساب وهنعمل لك عرض خاص لفرح أكتر من ١٠٠٠ ضيف
          </p>
          <a
            href="https://wa.me/201065316500"
            target="_blank"
            rel="noopener"
            className="mt-3 inline-block rounded-full bg-emerald-600 px-6 py-2 text-sm font-bold text-white shadow-md hover:bg-emerald-700"
          >
            📱 تواصل واتساب
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
