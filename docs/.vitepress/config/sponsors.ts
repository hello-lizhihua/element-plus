export type Sponsor = {
  url: string
  name_cn?: string
  name: string
  slogan_cn?: string
  slogan: string
  img: string
  isDark?: boolean
  imgL?: string
  slogan_index?: string
  banner_img?: string
  className?: string
}

export const rightRichTextSponsors: Sponsor[] = []

export const rightBigLogoSponsors: Sponsor[] = []

export const rightLogoSmallSponsors: Sponsor[] = []

export const leftCustomImgSponsors: Sponsor[] = []

export const platinumSponsors = [
  ...leftCustomImgSponsors,
  ...rightBigLogoSponsors,
  ...rightRichTextSponsors,
]

export const leftLogoSponsors: Sponsor[] = []

export const goldSponsors = [...rightLogoSmallSponsors, ...leftLogoSponsors]
