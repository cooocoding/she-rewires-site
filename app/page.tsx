"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, MapPin, Heart, ArrowRight, Globe } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/components/language-provider"

export default function HomePage() {
  const { t, language } = useLanguage()

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-[#E6E6E6] py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-4">
            <span className="text-lg text-[#303030]/70">{language === "en" ? "她原力" : "She Rewires"}</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-[#303030]">
            {language === "en" ? "She Rewires" : "她原力"}
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-[#303030]/80 leading-relaxed">{t("hero.description")}</p>
          <Link href="/get-involved">
            <Button
              size="lg"
              className="bg-[#BFFE01] text-[#303030] hover:bg-[#BFFE01]/80 px-8 py-4 text-lg font-semibold rounded-full"
            >
              {t("hero.cta")}
            </Button>
          </Link>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#303030] mb-8">
              {language === "en" ? "About Us" : "关于我们"}
            </h2>
            <div className="space-y-6">
              <p className="text-lg text-[#303030]/70 leading-relaxed">{t("about.preview")}</p>
            </div>
            <div className="mt-8">
              <Link href="/about">
                <Button
                  variant="outline"
                  className="border-[#8A55ED] text-[#8A55ED] hover:bg-[#8A55ED] hover:text-white bg-transparent"
                >
                  {language === "en" ? "Learn More" : "了解更多"} <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-16 bg-[#DEC4FF]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#303030] text-center mb-12">{t("impact.title")}</h2>
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <Card className="bg-white/80 backdrop-blur-md border-[#8A55ED]/20 text-center">
              <CardContent className="p-6">
                <Users className="w-10 h-10 text-[#8A55ED] mx-auto mb-3" />
                <div className="text-3xl font-bold text-[#303030] mb-1">70,000+</div>
                <div className="text-[#303030]/70 text-sm">{t("impact.members")}</div>
              </CardContent>
            </Card>
            <Card className="bg-white/80 backdrop-blur-md border-[#8A55ED]/20 text-center">
              <CardContent className="p-6">
                <Heart className="w-10 h-10 text-[#BFFE01] mx-auto mb-3" />
                <div className="text-3xl font-bold text-[#303030] mb-1">130+</div>
                <div className="text-[#303030]/70 text-sm">{t("impact.builders")}</div>
              </CardContent>
            </Card>
            <Card className="bg-white/80 backdrop-blur-md border-[#8A55ED]/20 text-center">
              <CardContent className="p-6">
                <MapPin className="w-10 h-10 text-[#8A55ED] mx-auto mb-3" />
                <div className="text-3xl font-bold text-[#303030] mb-1">16+</div>
                <div className="text-[#303030]/70 text-sm">{t("impact.cities")}</div>
              </CardContent>
            </Card>
            <Card className="bg-white/80 backdrop-blur-md border-[#8A55ED]/20 text-center">
              <CardContent className="p-6">
                <Globe className="w-10 h-10 text-[#BFFE01] mx-auto mb-3" />
                <div className="text-3xl font-bold text-[#303030] mb-1">3+</div>
                <div className="text-[#303030]/70 text-sm">{t("impact.regions")}</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Get Involved Preview */}
      <section className="py-16 bg-[#E6E6E6]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#303030] mb-6">{t("getInvolved.title")}</h2>
          <p className="text-lg text-[#303030]/70 mb-8 max-w-2xl mx-auto">{t("getInvolved.description")}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/get-involved">
              <Button
                size="lg"
                className="bg-[#8A55ED] hover:bg-[#8A55ED]/90 text-white px-8 py-4 rounded-full font-semibold"
              >
                {t("getInvolved.member")}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
