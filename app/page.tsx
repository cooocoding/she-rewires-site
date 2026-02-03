"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, MapPin, Heart, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/components/language-provider"

export default function HomePage() {
  const { t, language } = useLanguage()

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gray-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">{t("hero.title")}</h1>
          <p className="text-2xl md:text-3xl mb-6 text-gray-300">{t("hero.subtitle")}</p>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-300">{t("hero.description")}</p>
          <Button
            size="lg"
            className="bg-lime text-gray-800 hover:bg-lime/90 px-8 py-4 text-lg font-semibold rounded-full"
          >
            {t("hero.cta")}
          </Button>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
              {language === "en" ? "About Us" : "关于我们"}
            </h2>
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                {language === "en"
                  ? "SHE REWIRES focuses on the development of women in science, technology, engineering, art, and mathematics (STEAM). We're committed to igniting and reshaping women's passion and development for STEAM. As the most active women-in-STEAM community in China, we represent a new and vibrant image of Chinese women in technology."
                  : "SHE REWIRES 她原力聚焦于女性在科学、技术、工程、艺术和数学（STEAM）领域的发展。我们致力于点燃和重塑女性对于 STEAM 的热爱和发展，展现一种全新而充满活力的中国科技女性新形象。"}
              </p>
            </div>
            <div className="mt-8">
              <Link href="/about">
                <Button
                  variant="outline"
                  className="border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white bg-transparent"
                >
                  {language === "en" ? "Learn More" : "了解更多"} <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">{t("impact.title")}</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="bg-white/10 backdrop-blur-md border-white/20 text-center">
              <CardContent className="p-8">
                <Users className="w-12 h-12 text-lime mx-auto mb-4" />
                <div className="text-4xl font-bold text-white mb-2">70,000+</div>
                <div className="text-gray-300">{t("impact.members")}</div>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur-md border-white/20 text-center">
              <CardContent className="p-8">
                <Heart className="w-12 h-12 text-purple-100 mx-auto mb-4" />
                <div className="text-4xl font-bold text-white mb-2">130+</div>
                <div className="text-gray-300">{t("impact.builders")}</div>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur-md border-white/20 text-center">
              <CardContent className="p-8">
                <MapPin className="w-12 h-12 text-purple-500 mx-auto mb-4" />
                <div className="text-4xl font-bold text-white mb-2">16+</div>
                <div className="text-gray-300">{t("impact.cities")}</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Get Involved Preview */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">{t("getInvolved.title")}</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">{t("getInvolved.description")}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-4 rounded-full font-semibold"
            >
              {t("getInvolved.member")}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-gray-800 text-gray-800 hover:bg-lime hover:text-gray-800 hover:border-lime px-8 py-4 rounded-full font-semibold bg-transparent"
            >
              {t("getInvolved.volunteer")}
            </Button>
          </div>
          <div className="mt-8">
            <Link href="/get-involved">
              <Button variant="ghost" className="text-gray-800 hover:text-purple-500">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
