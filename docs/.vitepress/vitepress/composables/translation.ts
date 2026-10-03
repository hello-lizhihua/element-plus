import { computed } from 'vue'
import { useData, useRoute, useRouter, withBase } from 'vitepress'
import { useStorage } from '@vueuse/core'
import { PREFERRED_LANG_KEY } from '../constant'
import langs from '../../i18n/lang.json'
import translationLocale from '../../i18n/component/translation.json'
import { useLang } from './lang'

export const useTranslation = () => {
  const route = useRoute()
  const router = useRouter()
  const lang = useLang()
  const { site } = useData()

  const languageMap = {
    'en-US': 'English',
    'zh-CN': '中文',
    'es-ES': 'Español',
    'fr-FR': 'Français',
    'ja-JP': '日本語',
  }

  const locale = computed(() => translationLocale[lang.value])
  // 与官方差异:下拉同时列出中文与英文(官方会排除当前语言,导致永远只剩一项)
  const langsRef = computed(() => ['zh-CN', 'en-US'])

  const language = useStorage(PREFERRED_LANG_KEY, 'en-US')

  const getTargetUrl = (lang: string) => {
    const firstSlash = route.path.indexOf('/', site.value.base.length)
    return firstSlash === -1
      ? `/${lang}/`
      : `/${lang}/${route.path.slice(firstSlash + 1)}`
  }

  const switchLang = (targetLang: string) => {
    if (lang.value === targetLang) return
    language.value = targetLang

    const goTo: string = getTargetUrl(targetLang)
    router.go(withBase(goTo))
  }

  return {
    locale,
    languageMap,
    langs: langsRef,
    lang,
    getTargetUrl,
    switchLang,
  }
}
